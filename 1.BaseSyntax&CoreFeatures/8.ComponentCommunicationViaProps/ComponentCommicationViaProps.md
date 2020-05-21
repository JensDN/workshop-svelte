# Component communication via props

We want to connect our App.svelte with our ContactCard.svelte.

To do this we definitely need to add some script logic. To use a variable outside the component we use 'export'. Again this is svelte sort of hijacking the export feature from vanilla-JavaScript.  

With 'export' Svelte recognises that we want to access the userName variable outside the component. (In Svelte-terms we make userName a property of ContactCard.svelte)

```html
<script>
    // Svelte sort of hijacks the export 
    export let userName;
</script>
<style>
    ...
</style>

<div class="contact-card">
    <header>
        ...
        <div class="user-data">
<!-- Again we use curly brackets to pass down the data-->
            <h1>{userName}</h1>
            <h2>Job Title</h2>
        </div>
    </header>
    ...
</div>
```

To now use our newly made property outside ContactCard.svelte, we go back to the place where we use our UI-component. In our case the App.svelte file.

```html
...
// In Svelt we can just use the propertyName and add a value to it.
<ContactCard userName="Sicko"/>
// Ofcourse also curly Brackets work 
<ContactCard userName={name}/>
```

If everything works correctly we can now change the userName prop of our ContactCard.svelte with the input from our root App.svelte file.

This is the way that we can communicate between different components. 

------

## Challenge

As a little challenge, lets try binding our Job Title, Job description (in a textarea-input) and a imageUrl. 

*I will give some time to finish this, if you are done sooer, add some nice labels for each input*

[<|]()|[INDEX](workshop-svelte/1.BaseSyntax&CoreFeatures/)|[|>]()