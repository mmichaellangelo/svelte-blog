import pool from "./db-connect.server";
import type { Post } from "$lib/types/types";

export class PostError extends Error {
    constructor(message: string) {
        super(message);
        this.name='PostError';
    }
}

export async function addPost(slug: string, title: string, body: string): Promise<Post | unknown> {
    try {
        let res = await pool.query(
            'INSERT INTO post(slug, title, body) VALUES($1, $2, $3) RETURNING *', [slug, title, body]);
        let post: Post = {
            slug: res.rows[0].slug,
            title: res.rows[0].title,
            body: res.rows[0].body
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