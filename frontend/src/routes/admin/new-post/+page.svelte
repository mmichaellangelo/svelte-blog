<script lang="ts">
    import Markdown from "svelte-exmarkdown";
    import { autoresize } from "svelte-textarea-autoresize";
    let md: string = "";
    
</script>

<div id="container">
    <h2>New Post</h2>
    <label for="post_title_input">Post Title:</label> <br>
    <input id="post_title_input" type="text"> <br>
    <label for="post_body_input">Body:</label> <br>
    <div id="editor_preview_container">
        <div id="editor_container">
            <textarea id="editor_textarea" bind:value={md} use:autoresize></textarea>
        </div>
        <div id="preview_container">
            <Markdown {md} />
        </div>
    </div>
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

    #container {
        padding: 1rem;
        background-color: var(--color2);
        margin-top: 1rem;
    }

    label, h2 {
        color: var(--color4);
    }
</style>