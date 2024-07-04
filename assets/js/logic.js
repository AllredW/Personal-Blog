// light/dark mode toggle
// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});

// function: unpacks posts array from localStorage
const localStore = function () {
  // pull posts from LocalStorage
  const storeData = localStorage.getItem("posts");

  // check for blank values, creates a blank array if one is not already in localStorage
  if (storeData) {
    // parse data from string
    const parseArray = JSON.parse(storeData);

    // display parseArray on page
    return parseArray;
  } else {
    return [];
  }
};
