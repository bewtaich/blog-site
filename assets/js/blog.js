const posts = JSON.parse(localStorage.getItem('posts'));
const main = document.querySelector('main');
const blogArea = document.createElement('div')
blogArea.setAttribute('class', 'light')



for (let i=0; i < posts.length; i++){

    main.appendChild(blogArea);

    const blogTitle = document.createElement('h2');
    const blogUser = document.createElement('p');
    const blogContent = document.createElement('p');
 
    blogArea.appendChild(blogTitle);
    blogArea.appendChild(blogContent);
    blogArea.appendChild(blogUser);

    blogTitle.innerHTML=posts[i].title
    blogUser.innerHTML=posts[i].user
    blogContent.innerHTML=posts[i].content
}
