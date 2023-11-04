<script lang="ts">


    interface NavLink {
        name: string;
        path: string;
        enabled?: boolean;
        children?: NavLink[];
    }

    const nav: NavLink[] = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Contact",
            path: "/contact",
        },
        {
            name: "Admin",
            path: "/admin",
            children: [
                {
                    name: "Dashboard",
                    path: "/admin/dashboard",
                },
                {
                    name: "New Post",
                    path: "/admin/new-post"
                },
            ]
        }
    ]
    
</script>


<nav>
    {#each nav as link}
        {#if link.children}
            <div class="nav-link dropdown">
                <a href={link.path}>{link.name}</a>
                <div class="dropdown-content">
                    {#each link.children as child}
                        <div class="nav-link">
                            <a href={child.path}>{child.name}</a> <br/>
                        </div>
                    {/each}
                </div>
            </div>
            
        {:else}
            <div class="nav-link">
                <a href={link.path}>{link.name}</a>
            </div>
        {/if}
    {/each}
</nav>

<style>

    .dropdown-content {
        display: none;
        position: absolute;
        translate: -1rem 1rem;
        z-index: 5;
    }

    .dropdown:hover .dropdown-content {
        display: block;
        box-sizing: content-box;
    }

    nav {
        background-color: var(--color6);
        display: flex;
    }

    a {
        margin: 0px;
        margin-top: auto;
        margin-bottom: auto;
        color: var(--color3);
        text-decoration: none;
    }

    .nav-link {
        padding: 1rem;
        background-color: var(--color6);
    }

    .nav-link:hover {
        background-color: var(--color2);
    }

    .nav-link:hover a {
        text-decoration: underline;
    }

    a:hover {
        text-decoration: underline;
        background-color: var(--color2);
    }
</style>