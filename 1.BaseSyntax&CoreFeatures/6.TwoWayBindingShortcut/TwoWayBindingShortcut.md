# Two way binding shortcut

If you have a situation like this.

```html
<input type='text' value={name} on:input={nameInput}>
```

Svelte has an shortcut called the bind:property directive. 

```
bind:property={variable}
```

Data ordinarily flows down, from parent to child. The `bind:` directive allows data to flow the other way, from child to parent. Most bindings are specific to particular elements.

The simplest bindings reflect the value of a property, such as `input.value`.

In our example we can rewrite our input like this
```html
<input type='text' bind:value={name}>
```

This sets up two way dataflow, technically you could use this feature for any binding of html properties. But it's not recommended without a good reason. Text input in a form is a valid reason but sometimes its better to use event: handlers.

[<|]()|[INDEX](workshop-svelte/1.BaseSyntax&CoreFeatures/)|[|>]()