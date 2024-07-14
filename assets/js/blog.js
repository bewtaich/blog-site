const posts = JSON.parse(localStorage.getItem('posts'));
const main = document.querySelector('main');
const blogArea = document.createElement('div')


main.appendChild(blogArea);

for (let i=0; i < posts.length; i++){


const blogTitle = document.createElement('h2');
const blogUser = document.createElement('p');
const blogContent = document.createElement('p');
    blogArea.appendChild(blogUser);
    blogArea.appendChild(blogTitle);
    blogArea.appendChild(blogContent);

    blogTitle.innerHTML=posts[i].title
    blogUser.innerHTML=posts[i].user
    blogContent.innerHTML=posts[i].content
}
