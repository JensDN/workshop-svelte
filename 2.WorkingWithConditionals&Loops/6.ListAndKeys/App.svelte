<script>
    import ContactCard from "./ContactCard.svelte";

    let name = "";
    let title = "";
    let image = "";
    let description = "";
    let formState = 'empty'
    let createdContact = {name: null,jobTitle: null, imageURL: null, desc: null, id:null};
    let createdContacts = [];


    function addContact() {
        if (name.trim().length === 0 || title.trim().length === 0 || image.trim()/length === 0 || description.trim().length === 0) {
            formState = 'invalid';
            return;
        }
        // as a unique id we give our object a quick and dirty randon number,
        createdContact = {name: name, jobTitle: title, imageURL: image, desc :description, id: Math.random()}
        createdContacts = [...createdContacts, createdContact]
        formState = 'done'
    }
    function deleteFirst() {
        // slice is a inbuild function for js. It created a new array from the first element in this case.
        createdContacts = createdContacts.slice(1);
    }
    function deleteLast() {
        // When negative used numbers in slice, It counts form the last elements
        createdContacts = createdContacts.slice(0,-1);
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
        <textarea rows="3" bind:value={description} id="desc"></textarea>
    </div>
</div>


<button on:click={addContact}>Add Contact Card</button>
<!--Here we added just the two buttons, don't forget to add our bind:directives.-->
<button on:click={deleteFirst}>Delete first</button>
<button on:click={deleteLast}>Delete last</button>
{#if formState === 'invalid'}
    <p> Invalid input.</p>
{:else}
    <p>Please enter some data and hit the button</p>
{/if}
<!--we pass our id this down in the each block between bracket-->
{#each createdContacts as createdContact, index (createdContact.id)}
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
