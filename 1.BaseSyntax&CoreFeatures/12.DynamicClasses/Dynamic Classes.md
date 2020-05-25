# Dynamic Classes

Before concluding the Base Syntax & Core Features, i want to dive very quick into dynamic styles. 

### ContactCard.svelte

We can add different classes to or style section and let it only be used when some properties are defined/undefined

```html
<style>
...
    .thumb-placeholder {
        background: #ccc;
    }
</style>
```

After we added our class, we can make this class dynamic with some small logic.

```html
<!--        We can add dynamic classes with this little logic we write in between the curly brackets, if userImg is true-ish only the thumb class is used,etc -->
...
        <div class={userImg ? 'thumb' : 'thumb thumb-placeholder'}>
            <img alt={userName} src={userImg}/>
        </div>
...
```

And you guessed it right, also for this small logic we can use some shortcut made by Svelte. A `class:` directive provides a shorter way of toggling a class on an element.

```
class:name={value}
class:name
```

So if we write our code it would look something like this.

```html
...
        <div class="thumb" class:thumb-placeholder={!userImg}>
            <img alt={userName} src={userImg}/>
        </div>
...
```

And we get the same behaviour ;D

