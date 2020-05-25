<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Workshops/MeetupGrid.svelte";

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
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />

<main>
  <MeetupGrid {meetups} />
</main>
