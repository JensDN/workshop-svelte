# Each Else And Extracting 

On this newly made each-block there are a couple of features.

Like the {:else} for when there is a empty array or adding the index of the array to the syntax, so we can give the postion of every card in  the each loop. We use +1 because every index starts with 0.

```html
<!--you can add the index of the array to your syntax, it can have a name of your choice.-->
{#each createdContacts as createdContact, index}
<h2># {index +1}</h2>
    <ContactCard
            userName="{createdContact.name}"
            userImg="{createdContact.imageURL}"
            description="{createdContact.desc}"
        title="{createdContact.jobTitle}"
    />
<!--    or a else case for when there isn't no initial data in our app.-->
{:else}
    <p>Please start adding some contacts plz</p>
{/each}

```

