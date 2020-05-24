<script>
    import ContactCard from "./ContactCard.svelte";

    let name = "";
    let title = "";
    let image = "";
    let description = "";
    let formState = 'empty'
    let createdContact = {name: null,jobTitle: null, imageURL: null, desc: null};
    let createdContacts = [];


    function addContact() {
        if (name.trim().length === 0 || title.trim().length === 0 || image.trim()/length === 0 || description.trim().length === 0) {
            formState = 'invalid';
            return;
        }

        createdContact = {name: name, jobTitle: title, imageURL: image, desc :description }
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

{#if formState === 'invalid'}
    <p> Invalid input.</p>
{:else}
    <p>Please enter some data and hit the button</p>
{/if}
<!--you can add the index of the array to your syntax, it can have a name of your choice.-->
{#each createdContacts as createdContact, index}
<h2># {index +1}</h2>
    <ContactCard
            userName="{createdContact.name}"
            userImg="{createdContact.imageURL}"
            description="{createdContact.desc}"
        title="{createdContact.jobTitle}"
    />
<!--    or a else case for when there isn't no initial data in our app.-->
{:else}
    <p>Please start adding some contacts plz</p>
{/each}
