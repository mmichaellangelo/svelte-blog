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


export async function createPost(slug: string, title: string, body: string, author_id: number, tags?: string[]): Promise<Post> {
    try {
        let date_created = new Date().toUTCString;

        let res: QueryResult<Post> = await pool.query(
            'INSERT INTO post(slug, title, body, author_id, date_created) VALUES($1, $2, $3, $4, $5) RETURNING *', [slug, title, body, author_id, date_created]);

        return res.rows[0];

    } catch (error) {
        console.error(error);
        throw new PostError('Error adding post.');
    }
}


export async function getPosts(limit: number, page: number): Promise<Post[]> {
    let offset = page * limit;
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

export async function getUserByID(id: number): Promise<User> {
    try {
        let res:QueryResult<User> = await pool.query('SELECT * FROM user where id = $1', [id]);
        return res.rows[0];
    } catch (error) {
        console.error(error);
        throw new PostError('Error finding user');
    }
}

export async function createUser(username: string, password: string, permissions: Permission[]): Promise<User> {
    let hashedPassword = hashPassword(password);
    try {
        let res:QueryResult<User> = await pool.query('INSERT INTO user(username, password, permissions) VALUES($1, $2, $3)', [username, hashedPassword, permissions]);
        return res.rows[0];
    } catch (error) {
        console.error(error);
        throw new PostError("Error creating user");
    }
}
