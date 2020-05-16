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
    function nameInput(event){
        // we use the event.target feature to see which element got changed
        const enteredValue = event.target.value;
        name = enteredValue;
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

<!-- <button on:click={changeName}>
	Change Name
</button> -->

<!-- What if we want to change the name with an input -->
<input type='text' value={name} on:input={nameInput}>

