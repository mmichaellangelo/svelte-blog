<script lang="ts">
    import Markdown from "svelte-exmarkdown";
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<h1>{data.post.title}</h1>
<Markdown md={data.post.body} />