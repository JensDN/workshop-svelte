# If Else, Else If

*UserCase : Now in the previous exercise we didn't really check of our user had given an input, lets check this and only provide an markup when all our values have an input. If our input isn't complete we'll add an error message.* 

First of all let change the `done` variable to `formState` with the string 'empty' as starter value.

```html
<script>
...
 // Let change the variable $done to $formState with string 'empty'
    let formState = 'empty'
</script>
```

Then add some simple logic to check if our input have any value. If it does/doesn't we change our `formState` accordingly.

```HTML
<script>
...
// change the function of add contact
// with an quick if condition we provide an check on our inputs
function addContact() {
        if (name.trim().length == 0 || title.trim().length == 0 || image.trim().length == 0 || description.trim().length == 0) {
            formState = 'invalid';
            return;
        }
        formState = 'done'
    }
</script>
```

In our markup we change the #if block to check on our new variable.

```html
<!--We rename done to our new variable fromState and give it some logic-->
{#if formState === 'done'}
<ContactCard
        userName="{name}"
        userImg="{image}"
        {description}
        title="{title}"
/>
<!--We want to add an error message when our input is incorrect, we can use another if check or the if else-block-->
{:else if formState === 'invalid'}
    <p> Invalid input.</p>
{:else}
    <p>Please enter some data and hit the button</p>
{/if}
```

And for the last we want to write and else/if section to change the view when we have some user errors by adding :else between curly brackets. Now if we check we our userCase is fullfilled, but ofcourse we want to add some more...