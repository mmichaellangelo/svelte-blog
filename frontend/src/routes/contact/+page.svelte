<script lang="ts">
    let textBoxValue: string = "";
    const textBoxCharLimit = 430;
    $: charsRemaining = textBoxCharLimit - textBoxValue.length;
</script>

<div id="contact_wrapper">
    <h2 id="contact_title">Contact</h2>
    <form method="POST" action="/send-contact-info">
        <div class="label_input_combo">
            <label>Name:</label> <br>
            <input type="text"> <br>
        </div>
        <div class="label_input_combo">
            <label>Email:</label> <br>
            <input type="email"> <br>
        </div>
        <div class="label_input_combo">
            <label>Message:</label> <br>
            <textarea bind:value={textBoxValue} maxlength={textBoxCharLimit}></textarea>
        </div>
        <p id="chars_remaining">{charsRemaining}</p>
        <button type="submit">Submit</button>
    </form>
</div>

<style>
    #contact_wrapper {
        background-color: var(--color2);
        border: 2px solid black;
        max-width: 26rem;
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
        padding: 2rem;
    }

    .label_input_combo {
        display: block;
        flex-direction: column;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding: 0px;
        margin-bottom: 0px;
    }

    #contact_title {
        color: var(--color4);
    }

    label {
        color: var(--color4);
    }

    input, textarea {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        background-color: var(--color3);
        border: 2px solid var(--color6);
        padding: 0.5rem;
        margin-top: 0.25rem;
        margin-bottom: 0.5rem;
        margin-left: auto;
        margin-right: auto;;
    }

    input:focus, textarea:focus {
        outline: none;
        background-color: var(--color4);
    }

    textarea {
        resize: none;
        height: 10rem;
        margin-bottom: 0px;
    }

    #chars_remaining {
        color: var(--color4);
        margin-top: 0px;
        text-align: right;
    }

    button {
        background-color: var(--color3);
        padding: 0.5rem;
        border: 2px solid var(--color6);
    }

    button:focus {
        outline: none;
        background-color: var(--color4);
    }
</style>