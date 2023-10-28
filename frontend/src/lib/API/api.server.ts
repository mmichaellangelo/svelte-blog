import pool from "./db-connect.server";
import type { Permission, Post, User } from "$lib/types/types";
import type { QueryResult } from "pg";
import { hashPassword } from "./passhash.server";


export class PostError extends Error {
    constructor(message: string) {
        super(message);
        this.name='PostError';
    }
}

export class UserError extends Error {
    constructor(message: string) {
        super(message);
        this.name="UserError";
    }
}


export async function createPost(slug: string, title: string, body: string, author_id: number, tags?: string[]): Promise<Post> {
    try {
        let date_created = new Date().toUTCString();

        let res: QueryResult<Post> = await pool.query(
            'INSERT INTO post(slug, title, body, author_id, date_created) VALUES($1, $2, $3, $4, $5) RETURNING *', [slug, title, body, author_id, date_created]);

        return res.rows[0];

    } catch (error) {
        console.error(error);
        throw new PostError('Error adding post.');
    }
}


export async function getPosts(limit: number, page: number): Promise<Post[]> {
    let offset = (page - 1) * limit;
    try {
        let res:QueryResult<Post> = await pool.query('SELECT * FROM post OFFSET $1 LIMIT $2', [offset, limit]);
        return res.rows;
    } catch (error) {
        console.error(error);
        throw new PostError("Error querying posts");
    }
}

export async function getPostByID(id: number): Promise<Post> {
    try {
        let res:QueryResult<Post> = await pool.query('SELECT * FROM post WHERE id = $1', [id]);
        return res.rows[0];
    } catch (error) {
        console.error(error);
        throw new PostError('Error Getting Post');
    }
}

export async function getAllSlugsInUse(): Promise<string[]> {
    try {
        let res = await pool.query('SELECT slug from post');
        let slugs = [];
        for (let i = 0; i < res.rowCount; i++) {
            slugs[i] = res.rows[i].slug;
        }
        return slugs;
    } catch (error) {
        throw new PostError("Error: unable to get the slugs");
    }
}

export async function getUserByID(id: number): Promise<User> {
    try {
        let res: QueryResult<User> = await pool.query('SELECT * FROM user where id = $1', [id]);
        return res.rows[0];
    } catch (error) {
        console.error(error);
        throw new PostError('Error finding user');
    }
}

export async function getUserByUsername(username: string): Promise<User> {
    try {
        let res: QueryResult<User> = await pool.query('SELECT * FROM user where username = $1', [username]);
        return res.rows[0];
    } catch (error) {
        console.error(error);
        throw new UserError('ERROR: Could not find user');
    }
}

export async function createUser(username: string, email: string, password: string, permissions: Permission[]): Promise<User> {
    let hashedPassword = await hashPassword(password);
    try {
        let res:QueryResult<User> = await pool.query('INSERT INTO "user"(username, email, password, permissions) VALUES($1, $2, $3, $4)', [username, email, hashedPassword, permissions]);
        return res.rows[0];
    } catch (error) {
        console.error(error);
        throw new PostError("Error creating user");
    }
}
