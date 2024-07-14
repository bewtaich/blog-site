const form=document.querySelector('form');
const title = document.getElementById("title");
const user = document.getElementById('user');
const content = document.getElementById('content');

const post = function (event) {

    event.preventDefault();

    const postData = {
        user:user.value, 
        title:title.value,
        contenet:content.value
    }     

    localStorage.setItem('postData', JSON.stringify(postData))
}


form.addEventListener('submit', post);

