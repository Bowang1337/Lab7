// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

// Make sure you register your service worker here too

const settings = document.querySelector("header img")
const title = document.querySelector("header h1")

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach((entry, id) => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        document.querySelector('main').appendChild(newPost);
        newPost.addEventListener('click', () => {
          setState("#entry" + parseInt(id + 1), true);
        })
      });
    });
});

settings.addEventListener('click', () => {
  setState("#settings", true);
})

title.addEventListener('click', () => {
  setState("./", true);
})
