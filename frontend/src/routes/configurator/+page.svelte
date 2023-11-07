<script lang="ts">
    let link_color_inactive: string;
    let link_decoration_inactive: string;
    $: link_preview_style = `
    {
        color: ${link_color_inactive};
        text-decoration: ${link_decoration_inactive};
    }
    :active {
        color: green;
    }
    `
</script>

<div id="wrapper">
    <h2>Configuration</h2>
    <div id="link_config_wrapper">
        <h3>Link Configuration</h3>
        <a href="#" id="link_preview" style={link_preview_style}>Link</a> <br/> <br/>
        <label for="link_color_inactive">Inactive Color:</label> <br/>
        <input type="color" name="link_color_inactive" bind:value={link_color_inactive}> <br/>
        <label for="link_decoration_inactive">Inactive Decoration</label> <br/>
        <select name="link_decoration_inactive" bind:value={link_decoration_inactive}>
            <option value="none">None</option>
            <option value="underline">Underline</option>
        </select>
        
    </div>
    <div id="button_config_wrapper">
        <h3>Button Configuration</h3>
        <button>Button</button>
    </div>
</div>

<style>
    #wrapper {
        background-color: var(--color3);
        padding: 1rem;
        translate: 0 1rem;
    }

</style>