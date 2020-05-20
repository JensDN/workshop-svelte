# More Bindings

Where you successful? Well, let's try this together. 

### ContactCard.svelte

Let's first prepare our ContactCard.svelte. We add the logic to our script.

```html
<script>
    export let userName;
    export let title;
    export let description;
    export let userImg;
</script>
```

And afterwards we use the curly brackets to trickle down our data to the HTML section.

```html
<div class="contact-card">
    <header>
        <div class="thumb">
            <img alt={userName} src={userImg}/>
        </div>
        <div class="user-data">
            <h1>{userName}</h1>
            <h2>{title}</h2>
        </div>
    </header>
    <div class="description">
        <p>{description}</p>
    </div>
</div>
```

### App.svelte

Then we define our variables in the script tag of App.svelte

```html
<script>
...
    let name = 'Jens';
    let age = 25;
    // Let's define our properties in the root component as follows.
    let image="";
    let description ="";
    let title="";
...
</script>
```

After this we want to create some input where we bind our new variables to. (You can also add some labels to make things a little more readable )
```Html
<!--We want more inputs for our props in the App component-->
<!--We want more labels for our input in the App component-->
<!--We use the bind:property={variable} to link our input with the variable-->

<label for="name">Name</label>
<input  type='text' id="name" bind:value={name} >
<label for="img">Image-url</label>
<input  type='text' id="img" bind:value={image} >
<label for="title">Title</label>
<input  type='text' id="name" bind:value={title} >
<label for="description">Job description</label>
<textarea id="description" rows="4" bind:value={description}></textarea>
```

Finally we can change our ContactCard to link our variables to the component properties.

```html
<ContactCard
        userName="{name}"
        userImg="{image}"
        description="{description}"
        title="{title}"
/>
```

