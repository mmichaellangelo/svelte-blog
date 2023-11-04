<script lang="ts">
    import PostCardPreview from "$lib/elements/Post/PostCardPreview.svelte";
    import type { PageServerData } from "./$types.js";
    import { autoresize } from 'svelte-textarea-autoresize';
    export let data: PageServerData;
    
    let md: string = "";
    let title = "";

    $: slug = title.toLowerCase().trim().replaceAll(' ', '-');
    $: slugAlreadyInUse = data.slugs.includes(slug);
    $: newSlug = slugAlreadyInUse ? slug + '-1' : slug;


    let date = new Date();
    
</script>

<div id="container">
    <h2>New Post</h2>
    <form method="POST" action="?/createPost">
        <div class="label_input_combo">
            <label for="post_title_input">Post Title:</label> <br>
            <input id="post_title_input" type="text" name="title" bind:value={title}> <br>
        </div>
        <input type="text" name="slug" readonly bind:value={newSlug}> <br/>
        <div class="label_input_combo">
            <label for="post_body_input">Body:</label> <br>
        </div>
        <div id="editor_preview_container">
            <div id="editor_container">
                <textarea id="editor_textarea" bind:value={md} name="body" use:autoresize></textarea>
            </div>
            <div id="preview_container">
                <PostCardPreview post={{
                    id: -1,
                    slug: newSlug,
                    title: title,
                    body: md,
                    date_created: date,
                    author_id: -1,
                    tags: []
                    }} 
                    titleCharLimit={-1}
                    bodyCharLimit={-1}
                    />
            </div>
        </div>
        <button type="submit">Create Post</button>
    </form>
</div>




<style>

    #editor_container {
        display: block;
        width: 50%;
    }

    #preview_container {
        width: 50%;
    }

    #editor_preview_container {
        display: flex;
    }

    #editor_textarea {
        width: 80%;
        height: 30rem;
    }

    input, textarea {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        background-color: var(--color3);
        border: 2px solid var(--color6);
        padding: 0.5rem;
        margin-top: 0.25rem;
        margin-bottom: 0.5rem;
        margin-left: auto;
        margin-right: auto;;
    }

    input:focus, textarea:focus {
        outline: none;
        background-color: var(--color4);
    }

    textarea {
        resize: none;
        height: 10rem;
        margin-bottom: 0px;
        margin-left: 0px;
    }

    #container {
        padding: 1rem;
        background-color: var(--color2);
        margin-top: 1rem;
        border-radius: 0 0 0.5rem 0.5rem;
    }

    label, h2 {
        color: var(--color4);
    }

    .label_input_combo {
        display: block;
        flex-direction: column;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding: 0px;
        margin-bottom: 0px;
    }
</style>