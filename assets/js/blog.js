const posts = JSON.parse(localStorage.getItem('posts'));
const main = document.querySelector('main');
const blogArea = document.createElement('div')
const back = document.getElementById ('back')

blogArea.setAttribute('class', 'light')
blogArea.setAttribute('id', 'entries')



for (let i=0; i < posts.length; i++){

    main.appendChild(blogArea);

    const blogTitle = document.createElement('h2')
    const blogUser = document.createElement('p')
    const blogContent = document.createElement('p') 
    blogTitle.setAttribute('class', 'title')
    blogUser.setAttribute('class', 'user')
    blogContent.setAttribute('class', 'content')



    blogArea.appendChild(blogTitle);
    blogArea.appendChild(blogContent);
    blogArea.appendChild(blogUser);

    blogTitle.innerHTML=posts[i].title

    blogUser.innerHTML=`- ${posts[i].user}`
    blogContent.innerHTML=posts[i].content
}

const goBack = function (event) {
    location.href = 'index.html'
}

back.addEventListener('click', goBack)