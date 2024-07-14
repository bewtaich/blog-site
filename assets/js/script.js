const body = document.querySelector('body');
const modes = document.getElementById('btn');


// Light/Dark mode toggle

const toggle = function (event) {
    if (modes.className === 'light') {
        event.preventDefault();
        modes.className = 'dark'
        body.className = 'dark'
        modes.innerHTML = '<img src="./assets/images/dark-mode.svg" alt="A Moon">'

    } else {
        event.preventDefault();
        modes.className = 'light'
        body.className = 'light'
        modes.innerHTML = '<img src="./assets/images/light-mode.svg" alt="A Sun">'
}
}
modes.addEventListener('click', toggle);