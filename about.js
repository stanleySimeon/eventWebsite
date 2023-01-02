const menuToggle = document.querySelectorAll('.item');
const menu = document.getElementById('menu');
const openToggle = document.querySelector('.open-btn');
const closeToggle = document.querySelector('.close-btn');

openToggle.addEventListener('click', () => {
  menu.classList.remove('hidden');
  menu.classList.add('flex');
  menu.classList.add('flex-col');
  menu.classList.add('justify-center');
  menu.classList.add('items-center');
  closeToggle.classList.remove('hidden');
  openToggle.classList.add('hidden');
});

closeToggle.addEventListener('click', () => {
  menu.classList.add('hidden');
  closeToggle.classList.add('hidden');
  openToggle.classList.remove('hidden');

  menuToggle.forEach((item) => {
    item.addEventListener('click', () => {
      menu.classList.add('hidden');
      closeToggle.classList.add('hidden');
      openToggle.classList.remove('hidden');
    });
  });
});

const link = document.querySelectorAll('.item');

for (let i = 0; i < link.length; i += 1) {
  link[i].addEventListener('click', () => {
    link.forEach((item) => {
      item.classList.remove('active');
      item.style.color = '#272A31';
    });
    link[i].classList.add('active');
    if (link[i].classList.contains('active')) {
      link[i].style.color = '#EC5242';
    }
  });
  if (window.screenX < 768) {
    link[i].addEventListener('click', () => {
      link.forEach((item) => {
        item.classList.remove('active');
        item.style.color = '#FFFFFF';
      });
      link[i].classList.add('active');
      if (link[i].classList.contains('active')) {
        link[i].style.color = '#EC5242';
      }
    });
  }
}
