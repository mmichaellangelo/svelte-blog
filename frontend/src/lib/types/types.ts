export interface Post {
    id: number,         // index, identifier
    slug: string;       // URL Slug
    title: string;      // Title of the article
    body: string;       // Body of the article (Markdown)
    post_date: Date;    // Original post date
    edit_date?: Date;   // Date last edited
    author_id: number;  // ID of author
    tags: string[]      // tags to categorize post
}

export interface User {
    id: number;
    username: string;
    email: string;
    password_hashed: string;
    permissions?: Permission[] 
}

export enum Permission {
    EDIT = "edit",
    CREATE = "create",
    DELETE = "delete"
}

export const DEFAULT_PERMISSIONS = [Permission.EDIT, Permission.CREATE, Permission.DELETE];