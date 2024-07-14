const form=document.querySelector('form');
const title = document.getElementById("title");
const user = document.getElementById('user');
const content = document.getElementById('content');
const mode = ['light'];
const darkmode = document.getElementById('darkmode');



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





























// Light/Dark mode toggle

const toggle = function () {
    if (mode[0] === 'light') {
         mode[0] = 'dark'
        console.log(mode[0])
    } else {
        mode[0] = 'light'
        console.log(mode[0])
    }
}

darkmode.addEventListener('click', toggle);