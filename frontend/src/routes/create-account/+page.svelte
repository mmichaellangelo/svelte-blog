<script lang="ts">
    import { DEFAULT_PERMISSIONS } from "$lib/types/types";
    import type { ActionData } from "./$types";
    var email: string;
    var username: string;
    var password: string;

    export let form: ActionData

</script>

<div id="container">
    <h2>Create a New Account</h2>
    <form method="POST" action="?/createUser">
        <label for="email">Email</label> <br/>
        <input type="email" id="email" name="email"> <br/>
        <label for="password">Password</label> <br/>
        <input type="password" id="password" name="password"> <br/>
        <label for="username">Username</label> <br/>
        <input type="text" id="username" name="username"> <br/>
        <button type="submit">Create Account</button>
    </form>
</div>

{#if form?.success}
    <p>Hooray!</p>

{:else}
    <p>No way!</p>
{/if}

<style>
    #container {
        background-color: var(--color2);
        border: 2px solid black;
        max-width: 26rem;
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
        padding: 2rem;
    }

    label {
        color: white;
    }
</style>