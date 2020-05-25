import { writable } from 'svelte/store';

const meetups = writable([
  {
    id: "m1",
    title: "Workshop Svelte.js",
    subtitle: "Learn to svelte in 4 hours",
    description:
        "In this workshop , we will have an first class expert that teach you how to svelte!",
    imageUrl:
        "https://beeproger.com/app/uploads/2019/05/svelte-logo-horizontal.png",
    address: "@becode",
    contactEmail: "code@test.com",
    isFavorite:false
  },
  {
    id: "m2",
    title: "Sicko BDAY",
    subtitle: "Let's go, Party!!!",
    description: "Dansen, dansen!",
    imageUrl:
        "https://cdn.pixabay.com/photo/2018/01/08/15/41/beer-pong-3069601_1280.png",
    address: "Sicko Place",
    contactEmail: "swim@test.com",
    isFavorite:false
  }
]);

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  addMeetup: meetupData => {
    const newMeetup = {
      ...meetupData,
      id: Math.random().toString(),
      isFavorite: false
    };
    meetups.update(items => {
      return [newMeetup, ...items];
    });
  },
  toggleFavorite: id => {
    meetups.update(items => {
      const updatedMeetup = { ...items.find(m => m.id === id) };
      updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
      const meetupIndex = items.findIndex(m => m.id === id);
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  }
};

export default customMeetupsStore;
