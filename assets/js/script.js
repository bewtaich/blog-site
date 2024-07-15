const body = document.querySelector('body');
const modes = document.getElementById('btn');
const view = document.getElementById('view')

// Light/Dark mode toggle

const toggle = function (event) {
    const blog = document.getElementById('entries')
    const title = document.getElementsByClassName('title')
    const user = document.getElementsByClassName('user')
    const content = document.getElementsByClassName('content')
    

    if (modes.className === 'light') {
        event.preventDefault();
        modes.className = 'dark'
        body.className = 'dark'
        blog.className = 'dark'
        modes.innerHTML = '<img src="./assets/images/dark-mode.svg" alt="A Moon">'

        for (i=0;i<title.length;i++) {

            const title2=title[i];
            const user2=user[i];
            const content2=content[i];

            title2.className = 'title dark'
            user2.className = 'user dark'
            content2.className = 'content dark'
        }

    } else {
        event.preventDefault();
        modes.className = 'light'
        body.className = 'light'
        blog.className = 'light'
        modes.innerHTML = '<img src="./assets/images/light-mode.svg" alt="A Sun">'

        for (i=0;i<title.length;i++) {

            const title2=title[i];
            const user2=user[i];
            const content2=content[i];

            title2.className = 'title light'
            user2.className = 'user light'
            content2.className = 'content light'
        }
}
}
modes.addEventListener('click', toggle);




view.addEventListener('click', function () {
    location.href='blog.html'
})