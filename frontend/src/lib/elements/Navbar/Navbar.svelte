<script lang="ts">


    interface NavLink {
        name: string;
        link: string;
        enabled?: boolean;
        child?: NavLink[];
    }

    const nav: NavLink[] = [
        {
            name: "Home",
            link: "/",
            child: [{
                name: "Hello",
                link: "/hello"
            }]
        },
    ]
    
</script>


<nav>
    <a href="/">Home</a>
    <a href="#">About</a>
    <a href="#">Posts</a>
    <a href="/contact">Contact</a>
</nav>

<style>

    nav {
        background-color: var(--color6);
        display: flex;
    }

    a {
        margin: 0px;
        color: var(--color3);
        text-decoration: none;
        padding: 1rem;
    }

    a:hover {
        text-decoration: underline;
        background-color: var(--color2);
    }
</style>