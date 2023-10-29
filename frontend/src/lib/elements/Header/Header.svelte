<script lang="ts">
    import type { UserData } from "$lib/types/types";
    import Navbar from "../Navbar/Navbar.svelte";

    export let site_title: string;
    export let site_tagline: string;
    export let user_data: UserData;
    
</script>


<div id="header_container">
    <div id="header_top_container">
        <div id="title_tagline">
            <h1>{site_title}</h1>
            <p id="site_tagline">{site_tagline}</p>
        </div>
        <div id="user_area">
            <a href="#">
                <div id="profile_picture"></div>
            </a>
            <div id="user_area_links_container">
                {#if user_data.logged_in}
                    <a href="#">{user_data.username}</a>
                    <a href="#">Log Out</a>
                    
                {:else}
                    <a href="#">Log In</a>
                    <a href="#">Create Account</a>
                {/if}
            </div>
        </div>
    </div>
    <Navbar />
</div>


<style>

    #title_tagline {
        padding: 0px;
        background-color: var(--color2);
        
    }

    #header_container {
        border: 2px solid black;
        background-color: var(--color2);
        padding: 0px;
        margin: 0px;
        display: block;
    }

    #header_top_container {
        display: flex;
        align-items: center;
    }

    #user_area {
        display: flex;
        margin-left: auto;
        margin-right: 2rem;
        align-items: center;
    }

    #user_area_links_container {
        display: flex;
        flex-direction: column;
    }

    #user_area_links_container a {
        color: var(--color3);
        text-decoration: none;
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
    }

    #user_area_links_container a:hover {
        color: var(--color4);
        text-decoration: none;
    }

    #user_area_links_container a:active {
        color: var(--color3);
        text-decoration: none;
    }

    #profile_picture {
        display: block;
        width: 32px;
        height: 32px;
        margin-right: 1rem;
        background-color: white;
        border-radius: 100%;
    }

    h1 {
        color: var(--color4);
        margin-bottom: 0.1rem;
        margin-left: 1.5rem;
    }

    p {
        color: var(--color3);
    }

    #site_tagline {
        margin-top: 0px;
        margin-left: 2rem;
    }


</style>