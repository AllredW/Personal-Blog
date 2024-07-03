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
  console.log(blogPost.username);
  console.log(blogPost.title);
  console.log(blogPost.content);
};

postForm.addEventListener("submit", postSubmit);

// storage array
const posts = [];

// function: push the object into an array
const postStore = function (){


// push object to array
    posts.push(blogPost);

    console.log(posts);

        // condenses array into a string
        localStorage.setItem('posts', JSON.stringify(posts));
}



