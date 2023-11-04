<script lang="ts">
    import type { Post } from "$lib/types/types";
    import PostCardPreview from "../Post/PostCardPreview.svelte";

    export let posts: Post[];

</script>
<div id="posts_container">
    <h2 id="recent_posts_title">Recent Posts</h2>
    {#each posts as post}
        <PostCardPreview {post} />
    {/each}
</div>

<style>
    #posts_container {
        padding-top: 1rem;
        border-radius: 0 0 0.5rem 0.5rem;
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