<script lang="ts">
    export let title: string;
    export let body: string;
    const titleCharLimit = 30;
    const bodyCharLimit = 300;
    $: titleTrimmed = title.slice(0, titleCharLimit);
    $: if ( titleTrimmed.length < title.length ) { titleTrimmed = titleTrimmed.concat("..."); }
    $: bodyTrimmed = body.slice(0, bodyCharLimit);
    $: if ( bodyTrimmed.length < body.length ) { bodyTrimmed = bodyTrimmed.concat("..."); }
</script>
<div class="post_container">
    <a class="post_title" href="#">
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