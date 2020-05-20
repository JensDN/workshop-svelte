<script>
    let name = 'Jens';
    let age = 25;

    $: uppercaseName = name.toUpperCase();

    // $: this labeled statement can also be used outside of variables
    $: console.log(name);
    $: if (name === 'Jensio') {
        console.log('It runs')
        age = 69;
    }

    function incrementAge() {
        age += 1;
    }

    function changeName() {
        name = 'Jensio'
    }
</script>
<style>
    h1 {
        color: blue;
    }
</style>


<h1>
    Hello, my name is {uppercaseName} and my age is {age}!
</h1>

<button on:click={incrementAge}>
    Bday of {name}
</button>

<button on:click={changeName}>
    Change Name
</button>
