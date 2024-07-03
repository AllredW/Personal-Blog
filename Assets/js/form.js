// define variables
const postForm = document.querySelector("form");
const nameInput = document.querySelector("#username");
const titleInput = document.querySelector("#post-title");
const contentInput = document.querySelector("#post-content");

// function: convert form inputs into an object
const postSubmit = function (event) {
  event.preventDefault();
  //   empty fields = alert message
  if (
    nameInput.value == "" ||
    titleInput.value == "" ||
    contentInput.value == ""
  ) {
    alert("Please complete all fields to submit");
    return;
  }

  const blogPost = {
    username: nameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

  postStore(blogPost);

  //   test commands: confirm blogPost object
  //   console.log(blogPost.username);
  //   console.log(blogPost.title);
  //   console.log(blogPost.content);
};

postForm.addEventListener("submit", postSubmit);

// storage array
const posts = [];

// testcommand: confirm posts array exists
// console.log(posts);

// function: push the object into an array
const postStore = function (data) {
  const blogs = localStore();
  // push object to array

  // console.log(blogs)

  blogs.push(data);

  // stringify array for storage
  const stringArray = JSON.stringify(blogs);

  // test
  console.log(stringArray);

  // push stringArray to localStorage
  localStorage.setItem("posts", stringArray);

  // test command: confirm blogPost object is inside posts array
  // console.log(posts);
};

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
