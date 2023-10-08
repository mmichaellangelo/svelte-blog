import type { PageLoad } from "./$types";

export function load({ params }) {
    return {
        title: params.slug,
        content: "Phoebe is a slug"
    }
}