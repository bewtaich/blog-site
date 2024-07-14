
const form=document.querySelector('form');
const title = document.getElementById("title");
const user = document.getElementById('user');
const content = document.getElementById('content');
const posts =[];


const post = function (event) {
    event.preventDefault();

    if (title.value =="" || user.value=="" || content.value === "") {
        alert('Please fill out all fields');
        console.log(`${title.value},${user.value},${content.value}`)
    } else {

    const postData = {
        user:user.value, 
        title:title.value,
        content:content.value
    }     


    posts.push(postData);

    localStorage.setItem('posts', JSON.stringify(posts))

    location.href = 'blog.html'
    }
}

form.addEventListener('submit', post);

