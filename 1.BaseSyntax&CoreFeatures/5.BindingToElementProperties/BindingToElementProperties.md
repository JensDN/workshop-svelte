# Binding to element properties

In the previous examples have we used hard-coded properties in our code. But how can we use for example an user input and link it to our script.

Again we could  use the on:event directive. Let's try.

First lets create in our HTML section an input

```html
<input type='text'>
```

We can give this element an value of our variable name, like so. But this flow of data is only on direction.

```html
<input type='text' value={name}>
```

To make this flow of data two directional we can use the inbuilt event object from JavaScript in your browser.

First we write some logic in our script section.

```html
<script>
...
function nameInput(event){
        // we use the event.target feature to see which element got changed
        const enteredValue = event.target.value;
        name = enteredValue;
    }
</script>
```

And finally we add our on:event directive in the HTML section.

```html
<input type='text' value={name} on:input={nameInput}>
```

We see that in the parameter of nameInput we write the global event object. Together with the target feature,  JavaScript knows from which element he need to pull the properties. 

So now we have a 2 directional data flow. When you play around you'll see the changes done to our name variable.