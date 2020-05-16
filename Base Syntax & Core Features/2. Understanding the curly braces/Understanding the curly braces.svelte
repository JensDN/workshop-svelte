<script>
    // The first steps
    let name = 'Jens';
    let age = 25;
    function incrementAge() {
        age += 1;
        // age = age +1;
    }
</script>
<style>
    h1 {
        color:blue;
    }
</style>

<!-- curly brace are recognised in the svelte compiler, you can have any simple javascript expression between them -->
<h1>
    Hello, my name is {name} and my age is {age}!
</h1>

<!-- on:click = Element directives [link] -->
<button on:click={incrementAge}> <!-- or on:click="{incrementAge}" -->
    Bday of {name}
</button>
