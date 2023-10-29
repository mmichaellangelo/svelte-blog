<script lang="ts">
    import "$lib/styles/global.css";
    import Header from "$lib/elements/Header/Header.svelte";
    import type { UserData } from "$lib/types/types";

    let SAMPLE_USER_DATA: UserData = {
        logged_in: true,
        username: "chickensalad",
    }
</script>

<Header site_title="Michael's Stuff" site_tagline="A blog about stuff and things" user_data={SAMPLE_USER_DATA} />
<slot />
