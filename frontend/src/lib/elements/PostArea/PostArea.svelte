<script lang="ts">
    import type { Post } from "$lib/types/types";
    import PostCardPreview from "../Post/PostCardPreview.svelte";
    const posts: Post[] = [
        {
            slug: "abc123",
            title: "Post 1 with a longer title",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum "
        },
        {
            slug: "chicken",
            title: "Post 2",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum "
        }
    ]
</script>
<div id="posts_container">
    <h2 id="recent_posts_title">Recent Posts</h2>
    {#each posts as post}
        <PostCardPreview title={post.title} body={post.body} />
    {/each}
</div>

<style>
    #posts_container {
        padding-top: 1rem;
        border: 2px solid black;
        background-color: var(--color2);
        padding: 2rem;
        margin-top: 1rem;
    }

    #recent_posts_title {
        color: var(--color4);
        margin-top: 0rem;
        margin-bottom: 1.5rem;
    }
</style>