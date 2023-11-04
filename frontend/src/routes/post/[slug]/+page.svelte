<script lang="ts">
    import Markdown from "svelte-exmarkdown";
    import type { PageData } from "./$types";
    export let data: PageData;
    $: numTags = data.post.tags?.length;

</script>

<div id="mainframe-container">
    <h1 id="post-title">{data.post.title}</h1>
    <p id="date-published">{data.post.date_created.toDateString()}</p>
    <Markdown md={data.post.body} />
    <ul id="tags-list">
        {#if data.post.tags}
            <span>Tags: </span>
            {#each data.post.tags as tag, i}
                <li class="tag-item">
                    <a href="#">{tag + (i < (numTags - 1) ? ',' : '')}</a>
                </li>
            {/each}
        {/if}
    </ul>
</div>

<style>
    #mainframe-container {
        background-color: var(--color3);
        padding: 1rem;
        translate: 0 1rem;
        border: 2px solid black;
        word-wrap: break-word;
    }

    #post-title {
        color: var(--color1);
        margin-bottom: 0.5rem;
    }

    #date-published {
        color: var(--color6);
        margin-top: 0px;
        margin-bottom: 1rem;
    }

    #tags-list {
        list-style: none;
        padding: 0px;
    }
    .tag-item {
        display: inline;
    }

    .tag-item a {
        color: var(--color6);
    }
</style>