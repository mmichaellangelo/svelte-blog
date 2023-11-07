export interface Post {
    id: number,           // index, identifier
    slug: string;         // URL Slug
    title: string;        // Title of the article
    body: string;         // Body of the article (Markdown)
    date_created: Date;   // Original post date
    date_edited?: Date;   // Date last edited
    author_id: number;    // ID of author
    tags: string[]        // tags to categorize post
}

export interface User {
    id: number;
    username: string;
    email: string;
    password_hashed: string;
    permissions?: Permission[] 
}

export interface UserData {
    logged_in: boolean;
    username: string;
    permissions?: Permission[];
}

export enum Permission {
    EDIT = "edit",
    CREATE = "create",
    DELETE = "delete"
}

export const DEFAULT_PERMISSIONS = [Permission.EDIT, Permission.CREATE, Permission.DELETE];