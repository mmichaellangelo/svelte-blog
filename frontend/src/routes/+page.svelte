<script>
    import Header from "$lib/elements/Header/Header.svelte";
    import PostArea from "$lib/elements/PostArea/PostArea.svelte";
    import '$lib/styles/global.css';
</script>
<div id="site_container">
    
    <PostArea />
</div>

<style>
    :root {
        background-color: var(--color1);
    }
    header {
        color: white;
    }
</style>