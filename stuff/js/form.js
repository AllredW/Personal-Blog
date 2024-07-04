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
  location.href="./blog.html";
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

  // push stringArray to localStorage
  localStorage.setItem("posts", stringArray);

  // test command: confirm blogPost object is inside posts array
  // console.log(posts);
};


