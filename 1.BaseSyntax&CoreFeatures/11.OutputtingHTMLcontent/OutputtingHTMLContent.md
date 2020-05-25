# Outputting HTML content

Something you should now about bindings is that if you when you decide to output some HTML code. Svelte will default not translate that content as the output.

This is a good default behaviour. This way it protects you against [XSS](https://www.acunetix.com/websitesecurity/cross-site-scripting/) attacks. 

If you are in a certain scenario that you want your string as HTML content. First be sure that you content is off a safe source. And than you can just at '@HTML' before your string.

```html
<ContactCard
        userName="{name}"
        userImg="{image}"
        {@html description}  
        title="{title}"
/>
```

 Now you could use HTML tags in your variable description and Svelte will display it with HTML functionality into your App.

