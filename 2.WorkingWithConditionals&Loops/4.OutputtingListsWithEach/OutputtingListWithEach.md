# Outputting List With Each 

*UserCase:We want a new card with every button click, and save them in a list.*

To tackle this problem we want to maybe take a look at objects.  Objects are used to store keyed collections of various data and more complex entities. So i is a great way to group ore data together and give a proper key for every property. 

So, lets make a new empty object called createdContact.

```html
 <script>
 ...
 // we need to change how we store our data, so firs lets create a new variable 'createdContact'
    let createdContact = {name: null,jobTitle: null, imageURL: null, desc: null};
    </script>
```

We want to past the data  to this object when we have a valid input. So in our if logic we write following.

```html
<script>
 ...
function addContact() {
        if (name.trim().length == 0 || title.trim().length == 0 || image.trim()/length == 0 || description.trim().length == 0) {
            formState = 'invalid';
            return;
        }
        // when we have a valid submit we store the values in this new variable
        createdContact = {name: name, jobTitle: title, imageURL: image, desc :description }
        ...
    }
  </script>
```

Afterwards we use this object  createdContact with his keys  as the primary value we pass down to our component Contactcard.

```html
...
<!--Now we use the new object that is formed to use the values in our card, because it hasn't the same name anymore we can't use the shortcut just 'description anymore'-->
<ContactCard
        userName="{createdContact.name}"
        userImg="{createdContact.imageURL}"
        description="{createdContact.desc}"
        title="{createdContact.jobTitle}"
/>
```

Now if we type after we pressed the button, there isn't an live update anymore.

### Multiple Cards 

The idea was to add multiple cards, to store this data we add a new variable array called createdContacts. And maybe use the inbuilt .push method to add everytime we click the button and our input is valid.

```html
<script>
...
let createdContacs = [];
function addContact() {
        ...
        // when we want to add multiple objects we add the createdContact to our new array.
        createdContacts.push(createdContact);
        ...
    }

</script>
```

Now, in our markup we want to change some logic, first of all, lets put our if statements on top and rewrite or case if formState = 'done'.

We want it that case to repeat our view for every object in our the array createdContacts

```html
{#if formState === 'invalid'}
    <p> Invalid input.</p>
{:else}
    <p>Please enter some data and hit the button</p>
{/if}
{#each createdContacts as createdContact}
    <ContactCard
            userName="{createdContact.name}"
            userImg="{createdContact.imageURL}"
            description="{createdContact.desc}"
        title="{createdContact.jobTitle}"
    />
{/each}
```

Now if we push on our buuton, we'll see nothing happens?! Strange? Where is our card.

The reason has something to do with reactivity, because arrays are refference types svelte can't detect those. We'll dive into this later.

To solve this problem, we need to overwrite createdContacts with a new value, so it triggers svelte to update our new dom.

```html
<script> 
...
// to do this we can use a javascript feature called the spread operator.
        createdContact = {name: name, jobTitle: title, imageURL: image, desc :description }
        // when we want to add multiple objects we add the createdContact to our new array.
        createdContacts = [...createdContacts, createdContact]
        formState = 'done'
</script>
```

