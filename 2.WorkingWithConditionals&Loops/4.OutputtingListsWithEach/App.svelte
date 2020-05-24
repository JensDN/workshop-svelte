<script>
    import ContactCard from "./ContactCard.svelte";

    let name = "";
    let title = "";
    let image = "";
    let description = "";
    let formState = 'empty'
    // we need to change how we store our data, so firs lets create a new variable 'createdContact'
    let createdContact = {name: null,jobTitle: null, imageURL: null, desc: null};
    // to have multiple cards on the button click lets make an array 'createdContacts'
    let createdContacts = [];


    function addContact() {
        if (name.trim().length === 0 || title.trim().length === 0 || image.trim()/length === 0 || description.trim().length === 0) {
            formState = 'invalid';
            return;
        }
        // when we have a valid submit we store the values in this new variable
        createdContact = {name: name, jobTitle: title, imageURL: image, desc :description }
        // when we want to add multiple objects we add the createdContact to our new array.
        createdContacts = [...createdContacts, createdContact]
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


<!--{#if formState === 'done'}-->
<!--&lt;!&ndash;Now we use the new object that is formed to use the values in our card, because it hasn't the same name anymore we cant use just 'description anymore'&ndash;&gt;-->
<!--<ContactCard-->
<!--        userName="{createdContact.name}"-->
<!--        userImg="{createdContact.imageURL}"-->
<!--        description="{createdContact.desc}"-->
<!--        title="{createdContact.jobTitle}"-->
<!--/>-->
<!--when we test this we see we don't live update the text of contactcard anymore-->
{#if formState === 'invalid'}
    <p> Invalid input.</p>
{:else}
    <p>Please enter some data and hit the button</p>
{/if}

{#each createdContacts as createdContact}
    <ContactCard
            userName="{createdContact.name}"
            userImg="{createdContact.imageURL}"
            description="{createdContact.desc}"
        title="{createdContact.jobTitle}"
    />
{/each}
