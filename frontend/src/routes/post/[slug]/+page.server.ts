import { getPostByID, getPosts } from "$lib/API/api.server";
import type { PageServerLoad } from "./$types";

export async function load({params}) {
    const post = await getPostByID(parseInt(params.slug))
    console.log(post);
    return { post };
}