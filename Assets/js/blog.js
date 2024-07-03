
const postBody = document.querySelector('main');

// function: pull parsed data from localStore function, loop through the array and render out the individual posts
const renderBlog = function(){

const blogData = localStore();

for (let blog of blogData) {
    // create parent div element
const divEl = document.createElement('div');
divEl.classList.add('blog-post');
postBody.appendChild(divEl);

// create h3 element within div
const postHeader = document.createElement('h3');
postHeader.textContent = blog.username;
divEl.appendChild(postHeader);

const postTitle = document.createElement('h4');
postTitle.textContent = blog.title;
divEl.appendChild(postTitle);

const postContent = document.createElement('article');
postContent.textContent = blog.content;
divEl.appendChild(postContent);
    
}
}
renderBlog();