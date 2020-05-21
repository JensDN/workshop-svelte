# Multiple components 

Our App.svelte file is getting rather big. You can imagine that when you want the add more HTML,Javascript and styling it gets really messy.

Luckley Svelte Apps are built form multiple "Components" - UI building blocks. It's the same philosophy as in React, Angular & Vue.

In this exercise we will try making a new component and adding that to our root App.svelte file.

------

### ContactCard.svelte

First lets create a new file called ContactCard.svelte --Use PascalCase in the naming of each component--, after we add  some basic HTML markup in this file. 

```html
<div>
    <header>
        <div>
            <img src='' alt=''>
        </div>
        <div>
            <h1>User Name</h1>
            <h2>Jobtitle</h2>
        </div>
    </header>
    <div>
        <p>
            A short description
        </p>
    </div>
</div>
```

We want to use this UI-block in our Svelte root App-component. To do that we go back to our app.svelte and use the 'import' syntax in our script section.

```html
<script>
    import ContactCard from "./ContactCard.svelte";
    // Be sure your naming is right. 
    //Use PascalCase for the name and link to the right path.
...
</script>
```

After this import we can add this ContactCard everywhere we want in the HTML of our App.sevelte. Be sure to start the tag with PascalCase, otherwise the compiler will think your using basic HTML-tags.

```html
<script>
    import ContactCard from "./ContactCard.svelte";
...
</script>
<style>
...
</style>
...
<ContactCard/>
<!-- Make sure that the casing is right, lower case will be seen as normal html elements, Pascal Case will be picked up by the Svelte compiler -->
```

Easy right? If everything works we can now see the HTML from our nested component called  ContactCard.svelte inside our App.svelte cmponent.

------

### Styling

Finally we want to add some styling, remember that styling is Component scoped, so css written in this file will have no effects on our other components in our Svelte App.

```HTML
<style>
  .contact-card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    max-width: 30rem;
    border-radius: 5px;
    margin: 1rem 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
  }

  .thumb {
    width: 33%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .user-data {
    width: 67%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
  }

  h1 {
    font-size: 1.25rem;
    font-family: "Roboto Slab", sans-serif;
    margin: 0.5rem 0;
  }

  h2 {
    font-size: 1rem;
    font-weight: normal;
    color: #5a5a5a;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .description {
    border-top: 1px solid #ccc;
    padding: 1rem;
  }
</style>

<div class="contact-card">
  <header>
    <div class="thumb">
      <img src="" alt="" />
    </div>
    <div class="user-data">
      <h1>User Name</h1>
      <h2>Job Title</h2>
    </div>
  </header>
  <div class="description">
    <p>A short description</p>
  </div>
</div>

```

[<|]()|[INDEX](workshop-svelte/1.BaseSyntax&CoreFeatures/)|[|>]()