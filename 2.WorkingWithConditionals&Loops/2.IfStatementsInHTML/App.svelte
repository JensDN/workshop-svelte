<script>
    import ContactCard from "./ContactCard.svelte";

    let name = "";
    let title = "";
    let image = "";
    let description = "";
    // We add a variable boolean;
    let done = false;
    // We add a the onEventHandler AddContact for our button;
    function addContact() {
        done = true;
    }
</script>

<style>
    #form {
        width: 30rem;
        max-width: 100%;
    }
</style>

<div id="form">
    <div class="form-control">
        <label for="userName">User Name</label>
        <input type="text" bind:value={name} id="userName"/>
    </div>
    <div class="form-control">
        <label for="jobTitle">Job Title</label>
        <input type="text" bind:value={title} id="jobTitle"/>
    </div>
    <div class="form-control">
        <label for="image">Image URL</label>
        <input type="text" bind:value={image} id="image"/>
    </div>
    <div class="form-control">
        <label for="desc">Description</label>
        <textarea rows="3" bind:value={description} id="desc"/>
    </div>
</div>

<!--We add a button that the user needs to press-->
<!--We add a listener  on:click with the function AddContact-->

<button on:click={addContact}>Add Contact Card</button>

<!--We want to only view ContactCard when our Button is clicked/let done is true. -->
<!--Svelte has some great syntax for that.-->

<!--We use curly braces with a hashtag in the beginning, this create a lock statement-->
<!--When we add if after we create an if-block statement.-->
{#if done}
<ContactCard
        userName="{name}"
        userImg="{image}"
        {description}
        title="{title}"
/>
{/if}
<!--Only when done is true we see this block-->
