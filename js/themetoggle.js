// theme toggle

const body = document.querySelector('body');
const toggle = document.getElementById('theme-toggle');

toggle.onclick = function() {
    toggle.classList.toggle('toggle');
    body.classList.toggle('toggle');

}