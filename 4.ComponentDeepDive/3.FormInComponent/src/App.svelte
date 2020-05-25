<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Workshops/MeetupGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";
  import EditMeetup from "./Workshops/EditMeetup.svelte";

  let meetups = [
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

  let editMode;

  function addMeetup(event) {
    const newMeetup = {
      id: Math.random().toString(),
      title: event.detail.title,
      subtitle: event.detail.subtitle,
      description: event.detail.description,
      imageUrl: event.detail.imageUrl,
      contactEmail: event.detail.email,
      address: event.detail.address
    };

    // meetups.push(newMeetup); // DOES NOT WORK!
    meetups = [newMeetup, ...meetups];
    editMode = null;
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

  .meetup-controls {
    margin: 1rem;
  }
</style>

<Header />

<main>
  <div class="meetup-controls">
    <Button caption="New Meetup" on:click={() => (editMode = 'add')} />
  </div>
  {#if editMode === 'add'}
    <EditMeetup on:save="{addMeetup}" />
  {/if}
  <MeetupGrid {meetups} on:togglefavorite={toggleFavorite} />
</main>
