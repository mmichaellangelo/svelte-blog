<script lang="ts">
    import type { Post } from "$lib/types/types";
    import Markdown, { Transparent, type Plugin } from 'svelte-exmarkdown';

    const plugins: Plugin[] = [
        { renderer: {h1: Transparent, h2: Transparent, 
            h3: Transparent, h4: Transparent,
            h5: Transparent, h6: Transparent}}
    ]

    export let post: Post;
    export let disableHeaders = true;

    export let titleCharLimit = 45;
    export let bodyCharLimit = 300;

    $: titleTrimmed = titleCharLimit > -1 ? post.title.slice(0, titleCharLimit) : post.title;
    $: if ( titleTrimmed.length < post.title.length ) { titleTrimmed = titleTrimmed.concat("..."); }
    $: bodyTrimmed = bodyCharLimit > -1 ? post.body.slice(0, bodyCharLimit) : post.body;
    $: if ( bodyTrimmed.length < post.body.length ) { bodyTrimmed = bodyTrimmed.concat("..."); }
</script>

<div class="post_container">
    <div class="post_header_container">
        <a class="post_title" href={`/post/${post.id}`}>
            <h2>{titleTrimmed}</h2>
        </a>
        <p class="post_date">{post.date_created.toDateString()}</p>
    </div>
    <div class="post_body_container">
        {#if disableHeaders}
            <Markdown md={bodyTrimmed} plugins={plugins} />
        {:else}
            <Markdown md={bodyTrimmed} plugins={plugins} />
        {/if}
    </div>
</div>

<style>
    .post_container {
        display: block;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        /* border: 2px solid black; */
        border-radius: 0.5rem;

        margin-top: 0.5rem;
        margin-bottom: 1rem;
        background-color: var(--color3);
    }

    .post_header_container {
        border-radius: 0.5rem 0.5rem 0 0;
        padding: 0.5rem;
        background-color: var(--color3);
    }

    .post_body_container {
        padding: 1rem;
        background-color: var(--color4);
        border-radius: 0 0 0.5rem 0.5rem;
        word-wrap: break-word;
    }

    .post_title {
        display: block;
        text-decoration: none;
        color: var(--color1);
        margin-left: 1rem;
        margin-bottom: 0px;
    }

    .post_title h2 {
        margin-bottom: 0.5rem;
    }

    .post_date {
        margin-left: 1rem;
        margin-top: 0px;
        color: var(--color6)
    }
    .post_title:hover {
        color: var(--color2);
        text-decoration: underline;
    }
</style>