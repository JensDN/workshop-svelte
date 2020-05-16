# Reactive variable

There is a special JavaScript syntax you may or may not know. The reason is that its not used very often. That is a labelled statement.

```js
$:  or AnyWord:
```

Because it's rarely used , Svelte hijacks this $: to use in his compilerand give a different meaning to it.

When you use $: and there after add a dynamic calculation you can do some pretty nifty stuff.

Lets for example add this to our script.

```html
<script>
    let name = 'Jens';
    let age = 25;
    $: uppercaseName = name.toUpperCase();
    // you could've used --> let uppercaseName = name.toUpperCase(); but svelte does this automaticlly
    function incrementAge() {
        age += 1;
    }
</script>
```

And afterwards this to our HTML section.

```html
<h1>
    Hello, my name is {uppercaseName} and my age is {age}!
</h1>
```

We'll see that the name will be uppercase. But that is also possible without this $: functionality. So what is the difference?

Well let's say we want to change our name with an extra button. So first we add that functionality in our script section. 

```html
<script>
    ...
    function changeName(){
        name = 'Jensio'
    }
</script>
```

And again we add a second button and use again the  element: directive on:eventname.

```html
<button on:click={incrementAge}>
    Bday of {name}
</button>
<button on:click={changeName}>
    Change Name
</button>
```

Now we click the button of Change Name will see that in our H1 tag also uppercaseName is changed. The reason for that is that svelte re-renders everything after the $: syntax if there is something changed. uppercaseName is now called a reactive variable.