<script>
    import ContactCard from "./ContactCard.svelte";

    let name = "";
    let title = "";
    let image = "";
    let description = "";
    // Let change the variable $done to $formState with string 'empty'
    let formState = 'empty'

    // change the function of add contact
    // with an quick if condition we provide an check on our inputs
    function addContact() {
        if (name.trim().length == 0 || title.trim().length == 0 || image.trim().length == 0 || description.trim().length == 0) {
            formState = 'invalid';
            return;
        }
        formState = 'done'
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


<button on:click={addContact}>Add Contact Card</button>

    <!--We rename done to our new variable fromState and give it some logic-->
    {#if formState === 'done'}
    <ContactCard
            userName="{name}"
            userImg="{image}"
            {description}
            title="{title}"
    />
    <!--We want to add an error message when our input is incorrect, we can use another if check or the if else-block-->
    {:else if formState === 'invalid'}
        <p> Invalid input.</p>
    {:else}
        <p>Please enter some data and hit the button</p>
    {/if}
