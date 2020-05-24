<script>
  import Header from "./UI/Header.svelte";
  import MeetupItem from "./Workshops/MeetupItem.svelte";

  const meetups = [
    {
      id: "m1",
      title: "Workshop Svelte.js",
      subtitle: "Learn to svelte in 4 hours",
      description:
        "In this workshop , we will have some experts that teach you how to svelte!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG/800px-Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "code@test.com"
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Let's go for some swimming",
      description: "We will simply swim some rounds!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Olympic_swimming_pool_%28Tbilisi%29.jpg/800px-Olympic_swimming_pool_%28Tbilisi%29.jpg",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "swim@test.com"
    }
  ];
</script>

<Header />

{#each meetups as meetup}
	<MeetupItem />
{/each}
