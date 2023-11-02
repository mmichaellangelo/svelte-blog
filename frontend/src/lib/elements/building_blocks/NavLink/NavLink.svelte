<script lang="ts">
    export let props: {
        name: string,
        path: string,
    }
</script>

<div class="navlink-container">
    <a href={props.path}>{props.name}</a>
</div>