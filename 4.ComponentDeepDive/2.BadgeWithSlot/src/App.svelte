<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Workshops/MeetupGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from './UI/Button.svelte';

  let title = "";
  let subtitle = "";
  let address = "";
  let email = "";
  let description = "";
  let imageUrl = "";

  const meetups = [
    {
      id: "m1",
      title: "Workshop Svelte.js",
      subtitle: "Learn to svelte in 4 hours",
      description:
              "In this workshop , we will have an first class expert that teach you how to svelte!",
      imageUrl:
              "https://beeproger.com/app/uploads/2019/05/svelte-logo-horizontal.png",
      address: "@becode",
      contactEmail: "code@test.com"
    },
    {
      id: "m2",
      title: "Sicko BDAY",
      subtitle: "Let's go, Party!!!",
      description: "Dansen, dansen!",
      imageUrl:
              "https://cdn.pixabay.com/photo/2018/01/08/15/41/beer-pong-3069601_1280.png",
      address: "Sicko Place",
      contactEmail: "swim@test.com"
    }
  ];


  function addMeetup() {
    const newMeetup = {
      id: Math.random().toString(),
      title: title,
      subtitle: subtitle,
      description: description,
      imageUrl: imageUrl,
      contactEmail: email,
      address: address
    };

    // meetups.push(newMeetup); // DOES NOT WORK!
    meetups = [newMeetup, ...meetups];
  }

  function toggleFavorite(event) {
    const id = event.detail;
    const updatedMeetup = { ...meetups.find(m => m.id === id) };
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    const meetupIndex = meetups.findIndex(m => m.id === id);
    const updatedMeetups = [...meetups];
    updatedMeetups[meetupIndex] = updatedMeetup;
    meetups = updatedMeetups;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
    <TextInput
      id="title"
      label="Title"
      value={title}
      on:input={event => (title = event.target.value)} />
    <TextInput
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      on:input={event => (subtitle = event.target.value)} />
    <TextInput
      id="address"
      label="Address"
      value={address}
      on:input={event => (address = event.target.value)} />
    <TextInput
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
      on:input={event => (imageUrl = event.target.value)} />
    <TextInput
      id="email"
      label="E-Mail"
      type="email"
      value={email}
      on:input={event => (email = event.target.value)} />
    <TextInput
      id="description"
      label="Description"
      controlType="textarea"
      value={description}
      on:input={event => (description = event.target.value)} />
    <Button type="submit" caption="Save" />
  </form>
  <MeetupGrid {meetups} on:togglefavorite="{toggleFavorite}" />
</main>
