# More reactivity

In our previous example we have only had a look at a reactive variable but you can also add small JavaScript statement if you want to recall them if a variable is changed. For example.

```html
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
```

Svelte only will run the code after the $:  if the variable in your statement is changed. 

[<|]()|[INDEX](workshop-svelte/1.BaseSyntax&CoreFeatures/)|[|>]()