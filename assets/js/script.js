

const mode = ['light'];
const darkmode = document.getElementById('darkmode');


// Light/Dark mode toggle

const toggle = function () {
    if (mode[0] === 'light') {
         mode[0] = 'dark'
        darkmode.innerHTML = '<img src="./images/dark-mode.svg" alt="A Moon">'

    } else {
        mode[0] = 'light'
        darkmode.innerHTML = '<img src="./images/light-mode.svg" alt="A Sun">'
}
}
darkmode.addEventListener('click', toggle);