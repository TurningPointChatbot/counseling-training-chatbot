import { writable } from "svelte/store";

let defaultEmployee = {
    name: 'Davos Sand',
    progress: 50,
    profile_image: 'https://picsum.photos/id/426/400/600.jpg',
    position: "Junior Counsellor"
  };

export const selectedCounsellor = writable(defaultEmployee);