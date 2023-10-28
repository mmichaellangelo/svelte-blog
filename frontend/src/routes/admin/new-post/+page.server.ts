import { createPost, getAllSlugsInUse } from "$lib/API/api.server.js";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";

export async function load() {
    const slugs = await getAllSlugsInUse();
    console.log(slugs);
    return { slugs }
}

export const actions = {
    createPost: async ({ request }) => {
        const data = await request.formData();
        const title = data.get('title')?.valueOf();
        const body = data.get('body')?.valueOf();
        const slug = data.get('slug')?.valueOf();
        if (!(typeof title == "string" && typeof body == "string" && typeof slug == "string")) {
            throw new Error("Error something happened boo hoo");
        } else {
            console.log(`Title: ${title}, Body: ${body}, Slug: ${slug} `)
            await createPost(slug, title, body, 1);
        }
    }
}