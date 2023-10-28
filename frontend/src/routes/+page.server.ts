import { getPosts } from "$lib/API/api.server";
import type { PageServerLoad } from "./$types";

export async function load() {
    const posts = await getPosts(10, 1);
    console.log(posts);
    return { posts };
}