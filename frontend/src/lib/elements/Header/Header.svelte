<script lang="ts">
    export let site_title: string;
    export let site_tagline: string;
    import Navbar from "../Navbar/Navbar.svelte";

</script>
    <div id="header_container">
    <h1>{site_title}</h1>
    <p>{site_tagline}</p>
    <Navbar />
</div>


<style>
    #header_container {
        padding: 0px;
        background-color: var(--color2);
        border: 2px solid black;
    }

    h1 {
        color: var(--color4);
        margin-bottom: 0.1rem;
        margin-left: 1.5rem;
    }

    p {
        color: var(--color3);
        margin-top: 0px;
        margin-left: 2rem;
    }

</style>