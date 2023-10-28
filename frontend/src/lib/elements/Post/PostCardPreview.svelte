<script lang="ts">
    import type { Post } from "$lib/types/types";

    export let post: Post;
    const titleCharLimit = 30;
    const bodyCharLimit = 300;
    $: titleTrimmed = post.title.slice(0, titleCharLimit);
    $: if ( titleTrimmed.length < post.title.length ) { titleTrimmed = titleTrimmed.concat("..."); }
    $: bodyTrimmed = post.body.slice(0, bodyCharLimit);
    $: if ( bodyTrimmed.length < post.body.length ) { bodyTrimmed = bodyTrimmed.concat("..."); }
</script>
<div class="post_container">
    <a class="post_title" href={`/post/${post.id}`}>
        <h2>{titleTrimmed}</h2>
    </a>
    <p>{bodyTrimmed}</p>
</div>

<style>
    .post_container {
        display: block;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        border: 2px solid black;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        padding: 1rem;
        background-color: var(--color3);
    }
    .post_title {
        text-decoration: none;
        color: var(--color1);
    }
    .post_title:hover {
        color: var(--color2);
        text-decoration: underline;
    }
</style>