const menuToggle = document.querySelector('.items');
const openToggle = document.querySelector('.open-btn');
const closeToggle = document.querySelector('.close-btn');


openToggle.addEventListener('click', show);
closeToggle.addEventListener('click', close);

function show() {
    menuToggle.style.display = 'flex';
    menuToggle.style.right = '0';
}

function close() {
    menuToggle.style.right = '100%';
}

document.querySelectorAll('.item');
menuToggle.addEventListener('click', () => {
    menuToggle.style.right = '100%';
})




