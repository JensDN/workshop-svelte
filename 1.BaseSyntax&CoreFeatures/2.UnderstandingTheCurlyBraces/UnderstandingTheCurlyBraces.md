# Understanding the curly braces

Every svelte-file has 3 main sections:
- The Script Section `<script></script>`
- The Style  Section `<style></style>`
- The HTML Section `every html tag`

In this workshop i will teach how svelte implements those section in the final bundle.js .

## Script

Let us first setup our first section,
the Script section: 
`<script> 
</script>`

In this section we use all the JavaScript logic to make our component flexible.

For this exercise  we add two new variables to our script.

```js
let name = 'Jens'; // your name
let age = 25; // your age
```

## Style 

After that we make our  second section,
the Style section: `<style> 
</style>`

Every style section is component scoped, what a component exactly is you will learn later in this workshop. 

Let's quickly add a colour for our h1 tag.

```css
h1 {
    color:blue;
}
```
## HTML 

And finally the last section, the HTML section. 
You can just use normal HTML tags for this one.

```html
<h1>
    Hello, my name is ... and my age is ...!!
</h1>
```

### Curly braces {}

One of the backbone functionality in Svelte is curly braces. Curly braces are recognised by the Svelte compiler, which will translate every simple JavaScript expression between them. 

So in practice we can do following:

```jsx
<h1>
    Hello, my name is {name} and my age is {age}!
</h1>
```

### Element directives

Before we go to the next part of this workshop, we take a quick look at [Element directives](https://svelte.dev/docs#Element_directives). 

Elements in Svelte can have directives, one example is the [on:eventname](https://svelte.dev/docs#on_element_event) directive. This on: directive listens to DOM events.

```
on:eventname={handler}

on:eventname|modifiers={handler}
```

Lets bring this theory to practice. Under our h1 tag we make a button tag. 

```html
<h1> ... </h2>
<button>
    Bday of {name}
</button>
```

I want every time i click on this button to increase the age by 1. So lets first write the logic inside our script tag.

```html
<script>
    let name = 'Jens'; // your name
	let age = 25; // your age
    function incrementAge() {
        age += 1;
        // age = age +1;
    }
</script>
```

We want to listen to an event:click of this button. To do so we can add the on: directive as follows. 

```jsx
<button on:click> Bday of {name} </button>
```

After that we make a link to the function incrementAge with the functionality of Sveltes curly brackets.

```jsx
<button on:click={incrementAge}> Bday of {name} </button>
// or 
<button on:click="{incrementAge}"> Bday of {name} </button>
```

Now when we click on the button we should see the age increase.

