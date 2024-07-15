
const form=document.querySelector('form');
const title = document.getElementById("title");
const user = document.getElementById('user');
const content = document.getElementById('content');
const empty = [];






const post = function (event) {
    event.preventDefault();

    if (title.value =="" || user.value=="" || content.value === "") {
        alert('Please fill out all fields');
    } else {

        const postData = {
                user:user.value, 
                title:title.value,
                content:content.value
                };

        const storage=localStorage.getItem('posts');

        if (storage === null) {
            empty.push(postData);
            localStorage.setItem('posts', JSON.stringify(empty));      
            location.href = 'blog.html';    
        } else {

            const posts = JSON.parse(storage);

                posts.push(postData);
                localStorage.setItem('posts', JSON.stringify(posts));

                location.href = 'blog.html';
        
        }   
    }
}

form.addEventListener('submit', post);

