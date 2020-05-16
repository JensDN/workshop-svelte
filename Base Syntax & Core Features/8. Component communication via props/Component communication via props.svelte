<script>
    import ContactCard from "./ContactCard.svelte";

    let name = 'Jens';
    let age = 25;

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

<input type='text' bind:value={name} >

<ContactCard userName="{name}"/>

