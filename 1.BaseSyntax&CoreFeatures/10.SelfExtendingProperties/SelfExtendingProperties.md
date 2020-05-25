# Self extending properties

If the property of an svelte component and the variable that you assign to it have the same name, Svelte will allow you to use an shortcut. In modern JavaScript will call this object destructuring.

```html
...
<ContactCard
        userName="{name}"
        userImg="{image}"
        {description}  
        title="{title}"
/>
<!-- previous 
<ContactCard
        userName="{name}"
        userImg="{image}"
        description="{description}" 
        title="{title}" 
/> 
-->
```

