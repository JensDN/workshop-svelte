<script>
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

<!-- What if we want to change the name with an input -->
<!-- We coud also use two way binding by Svelte by one of  the element directives bind:property -->
<input type='text' bind:value={name} >
