export interface Post {
    slug: string;       // URL Slug
    title: string;      // Title of the article
    body: string;       // Body of the article (Markdown)
    post_date: Date;    // Original post date
    edit_date?: Date;   // Date last edited
    author: string;     // Username of author
}