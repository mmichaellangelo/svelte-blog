import pool from "./db-connect.server";
import type { Post } from "$lib/types/types";
import type { QueryResult } from "pg";

export class PostError extends Error {
    constructor(message: string) {
        super(message);
        this.name='PostError';
    }
}


export async function addPost(slug: string, title: string, body: string): Promise<Post> {
    try {

        let date_created = new Date().toUTCString;

        let res: QueryResult<Post> = await pool.query(
            'INSERT INTO post(slug, title, body, date_created) VALUES($1, $2, $3, $4) RETURNING *', [slug, title, body, date_created]);
        let Slug: string = res.rows[0].slug;
        let Title: string = res.rows[0].title;
        let Body: string = res.rows[0].body;
        let Post_Date: Date = res.rows[0].post_date;
        let Author: string = res.rows[0].author;
        if ()

        let post: Post = {
            slug: Slug,
            title: Title,
            body: Body,
            post_date: Post_Date,
            author: Author
        }

        return post;
    } catch (error) {
        console.log(error);
        throw new PostError('Error adding post.');
    }
}


export async function getPostByID(id: number) {
    let res = await pool.query('SELECT * FROM post WHERE id = $1', [id]);
    return res.rows[0];
}


export async function getPostBySlug(slug: string): Promise<Post> {
    try {
        let res = await pool.query('SELECT * FROM post WHERE slug = $1', [slug]);
        if (res.rowCount !== 1) {
            throw new PostError('Error: post could not be found');
        } else {
            let post: Post = res.rows[0];
            return post;
        }
    } catch