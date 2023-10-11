<div id="login_container">
    <h2>Login</h2>
    <form method="post">
        <label for="username">Username</label> <br>
        <input type="text"> <br>
        <label for="password">Password</label> <br>
        <input type="password"> <br>
        <button>Log In</button>
    </form>
</div>

<style>
    h2, label {
        color: var(--color4);
    }
    #login_container {
        border: 2px solid black;
        padding: 1rem;
        background-color: var(--color2);
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0.5rem;
    }
</style>