<script>
    let name = 'Jens';
    let age = 25;
    // labelled statement $: or anything: (from vanilla js, you don't really use them)
    // svelte picks up this $: statement, and hijacks this for another meaning
    $: uppercaseName = name.toUpperCase();
    // you could've used --> let uppercaseName = name.toUpperCase(); but svelte does this automaticlly
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
<!-- on:click changeName, reruns everything with $: -->
<button on:click={changeName}>
    Change Name
</button>
