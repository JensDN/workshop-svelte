<script>
    import ContactCard from "./ContactCard.svelte";
    let name = 'Jens';
    let age = 25;
    // Let's define our properties in the root component as follows.
    let image="";
    let description = "";
    let title="";

    $: uppercaseName = name.toUpperCase();

    $: console.log(name);
    $: if (name === 'Jensio') {
        age = 69;
    }

    function incrementAge() {
        age += 1;
    }
    function changeName(){
        name = 'Jensio'
    }

</script>
<style>
    h1 {
        color:blue;
    }
</style>


<h1>
    Hello, my name is {uppercaseName} and my age is {age}!
</h1>

<button on:click={incrementAge}>
    Bday of {name}
</button>
<!--We want more inputs for our props in the App component-->
<!--We want more labels for our input in the App component-->
<!--We use the bind:property={variable} to link our input with the variable-->

<label for="name">Name</label>
<input  type='text' id="name" bind:value={name} >
<label for="img">Image-url</label>
<input  type='text' id="img" bind:value={image} >
<label for="title">Title</label>
<input  type='text' id="name" bind:value={title} >
<label for="description">Job description</label>
<textarea id="description" rows="4" bind:value={description}></textarea>

<ContactCard
        userName="{name}"
        userImg="{image}"
        description="{description}"
        title="{title}"
/>
