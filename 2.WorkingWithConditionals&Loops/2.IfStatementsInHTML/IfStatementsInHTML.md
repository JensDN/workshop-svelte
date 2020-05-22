# If statements in HTML 

`UserCase :We want to display Contact card only when we have valid data in our App or maybe by pressing a button.`

For this feature we need to output  our content <u>Conditionally</u> 

## Conditionally output

###### What does this mean?

*In our project we are working on, it really only make sense to output our ContactCard after we filed in all our inputs or pressed some button.* 

*Now to tackle this, we could add an reactive variable that returns only a true when every input is filled in. or just add the button to our markup. Each approach is fine, but i will take the route of the button, because who doesn't like a satisfying 'click' .*

### Preparations

First lets add our button in the HTML section. We want to handle the click-event so we add the on:click directive from the syntax from Svelte.js 

```html
...
<!--We add a button that the user needs to press-->
<!--We add a listener  on:click with the function AddContact-->
<button on:click={addContact}>Add Contact Card</button>
<ContactCard
        ...
/>
```

After we go to our Script-section an add a new variable boolean 'done' and a handler function to change the value of this variable.

```html
<script>
...
let description = "";
    // We add a variable boolean;
    let done = false;
    // We add a the onEventHandler AddContact for our button;
    function addContact() {
        done = true;
    }
</script>
```

If everything works correctly we now can change 'done' every time  we click our newly created button.

### If block-statement

Svelte has this handy feature where you can add lock-statements by instead of passing variable or string between curly brackets we add an hash tag # to indicate to the compiler we want display this content conditionally. By adding if after the the # we make an If-block statement.

```html
<!--We use curly braces with a hashtag in the beginning, this create a lock-statement-->
<!--When we add if after we create an if-block statement.-->
{#if done}
<ContactCard
        userName="{name}"
        userImg="{image}"
        {description}
        title="{title}"
/>
{/if}
<!--Only when done is true we see this block-->
```

If everything works correctly we now have made an conditional statement and a different markup every time we click our button.