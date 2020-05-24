# List and keys

*UserCase we want to have buttons to remove the first and the last contact card.*

## Exercise

Try to provide two buttons. One to remove the first element ffrom our ContactCard and the other one removes the last. I'll give around 5 minutes and than we look together to the solution. 

### Solution

### [slice](https://javascript.info/array-methods#slice)

The syntax is:

```javascript
arr.slice([start], [end])
```

It returns a new array copying to it all items from index `start` to `end` (not including `end`). Both `start` and `end` can be negative, in that case position from array end is assumed.

It’s similar to a string method `str.slice`, but instead of substrings it makes subarrays.

With this method we can define 2 new functions.

```js
function deleteFirst() {
        // slice is a inbuild function for js. It created a new array form the first element in this case.
        createdContacts = createdContacts.slice(1);
    }
    function deleteLast() {
        // When negative used numbers in slice, It counts form the last elements
        createdContacts = createdContacts.slice(0,-1);
    }
```

Then we just have to add or on:event binding and normally everything should work.

```html
<!--Here we added just the two buttons, don't forget to add our bind:directives.-->
<button on:click={deleteFirst}>Delete first</button>
<button on:click={deleteLast}>Delete last</button>
```

### Hmmm, Funny

This you don't have to follow. Lets quickly change the ContactCard and add an initialName, now we see when we delete parts of our array some things don't add up. This is of the way svelte decides to render. That's th eproblem with svelte, it can't keep the different contactCards apart. 

If we change the list, we need to let svelte know which part of the list to update.   Which part of the dom that needs to change. This solution is ez, we just have to give a unique id to every component we make, so svelte can conect all data to the riht markup.

```
 // as a unique id we give our object a quick and dirty randon number,
        createdContact = {name: name, jobTitle: title, imageURL: image, desc :description, id: Math.random()}
        
<!--we pass our id this down in the each block between bracket-->
{#each createdContacts as createdContact, index (createdContact.id)}
```

