
const form=document.querySelector('form');
const title = document.getElementById("title");
const user = document.getElementById('user');
const content = document.getElementById('content');



const post = function (event) {
    event.preventDefault();

    if (title.value || user.value || content.value ==="") {
        alert('Please fill out all fields');
    } else {

    const postData = {
        user:user.value, 
        title:title.value,
        contenet:content.value
    }     

    localStorage.setItem('postData', JSON.stringify(postData))

    location.href = 'blog.html'
    }
}

form.addEventListener('submit', post);

