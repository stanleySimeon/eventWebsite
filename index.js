const menuToggle = document.querySelectorAll('.item');
const menu = document.getElementById('menu');
const openToggle = document.querySelector('.open-btn');
const closeToggle = document.querySelector('.close-btn');

if (openToggle) {
  openToggle.addEventListener('click', () => {
    menu.classList.remove('hidden');
    menu.classList.add('flex');
    menu.classList.add('flex-col');
    menu.classList.add('justify-center');
    menu.classList.add('items-center');
    closeToggle.classList.remove('hidden');
    openToggle.classList.add('hidden');
  });
}

if (closeToggle) {
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
}

const program = [
  {
    id: 1,
    title: 'Lecture',
    Image: 'images/lecture.png',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.',
  },
  {
    id: 2,
    title: 'CC Exhibition',
    Image: 'images/exhibition.png',
    description: 'You can see various creations that share the spirit of Creative Commons at the exhibition.',
  },
  {
    id: 3,
    title: 'Forum',
    Image: 'images/forum.png',
    description: 'You can share your thoughts and ideas with other participants in the forum.',
  },
  {
    id: 4,
    title: 'Workshop',
    Image: 'images/workshop.png',
    description: 'You can learn how to use Creative Commons licenses and how to create your own work.',
  },
  {
    id: 5,
    title: 'CC Ignite',
    Image: 'images/ignite.png',
    description: 'You can listen to the speakers from various countries about the messages of sharing and opening.',
  },
];

const programs = document.getElementById('mainProgram');

programs.innerHTML = program.map((prog) => `
    <div class="w-full md:w-96 md:h-72 flex md:flex-col justify-center items-center text-center bg-[#c5c5c5] bg-opacity-10 space-x-4 md:space-x-0 md:space-y-2 px-2 md:px-4 py-2 hover:border-2 border-[#ffffff]">
      <span class=""><img class="w-16 md:w-auto" src="${prog.Image}" alt="${prog.title}"></span>
      <span class="w-32 md:w-auto"><h2 class="text-start md:text-center text-xl text-[#EC5242] font-bold">${prog.title}</h2></span>
      <span class="w-1/2 md:w-auto"><p class="text-start md:text-center text-sm text-[#ffffff]">${prog.description}</p></span>
    </div>
  `).join('');

const featuredSpeakers = [
  {
    id: 1,
    pattern: 'images/assets/transparent.jpeg',
    picture: 'images/assets/YochaiBenklerJI6.jpg',
    name: 'Yochai Benkler',
    presentation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer productions, and published his seminal book The Wealth of Network in 2006.',
  },
  {
    id: 2,
    pattern: 'images/assets/transparent.jpeg',
    picture: './images/assets/Chon_Kilnam.jpg',
    name: 'Kilnam Chon',
    presentation: '',
    description: "Kilnam Chon is help to bring the internet to Asia and is an outspoken advocate for the open web and digital commons. in 2012 he was inducted into the inaugural class of the Internet Society's (ISOC) Internet Hall of Fame",
  },
  {
    id: 3,
    class: 'to_hide',
    pattern: 'images/assets/transparent.jpeg',
    picture: 'images/assets/Noh.jpg',
    name: 'SohYeong Noh',
    presentation: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities and the arts.',
  },
  {
    id: 4,
    class: 'to_hide',
    pattern: 'images/assets/transparent.jpeg',
    picture: './images/assets/Julia.jpg',
    name: 'Julia Leda',
    presentation: 'President of Young Pirates of Europe',
    description: "European integration, political democracy and participation of youth trough online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
  },
  {
    id: 5,
    class: 'to_hide',
    pattern: 'images/assets/transparent.jpeg',
    picture: './images/assets/lilaTratikov.jpg',
    name: 'Lila Tretikov',
    presentation: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },
  {
    id: 6,
    class: 'to_hide',
    pattern: 'images/assets/transparent.jpeg',
    picture: './images/assets/ryanMerkley.jpg',
    name: 'Ryan Merkley',
    presentation: 'CEO of Creative Commons, ex COO of the Mozilla foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },
];

const speakers = document.getElementById('featuredSpeakers');

speakers.innerHTML = featuredSpeakers.map((speaker) => `
  <div class="${speaker.class} w-full h-auto flex space-x-2 md:space-x-12 mt-8 md:mt-0">
    <div class="w-48 md:w-72 relative">
      <span class="absolute top-0 left-0 w-16 md:w-28">
        <img class="" src="${speaker.pattern}" alt="${speaker.name}">
      </span>
      <span class="absolute top-3 md:top-6 left-3 md:left-6 w-24 h-20 md:w-36 md:h-32 z-10">
        <img class="" src="${speaker.picture}" alt="${speaker.name}">
      </span>
    </div>
    <div class="w-full relative flex flex-col space-y-2">
      <h2 class="text-xl font-bold">${speaker.name}</h2>
      <p class="italic text-[#EC5242]">${speaker.presentation}</p>
      <div class="border-b border-[#D3D3D3] w-8"></div>
      <p class="text-[#272A31]">${speaker.description}</p>
    </div>
  </div>
`).join('');

// Activate the showMore btn when the screenX is lower than 768px

const speaker = document.querySelectorAll('.to_hide');
const showMore = document.getElementById('show-more-btn');
const faChevronDown = document.createElement('i');
const faChevronUp = document.createElement('i');

faChevronDown.classList = ('fa fa-chevron-down text-[#EC5242] pl-2');
faChevronUp.classList = ('fa fa-chevron-up text-[#EC5242] pl-2');

showMore.textContent = 'SHOW LESS';
showMore.style.display = 'md:hidden';
showMore.style.justifyContent = 'center';
showMore.style.alignItems = 'center';
showMore.style.gap = '10px';
showMore.style.margin = '20px 0 0 0';
showMore.style.padding = '1rem 1rem';
showMore.style.border = '1px solid #D3D3D3';
showMore.appendChild(faChevronUp);

showMore.addEventListener('click', () => {
  if (window.screenX < 768) {
    speaker.forEach((speaker) => {
      speaker.classList.toggle('hidden');
    });

    if (showMore.textContent === 'MORE') {
      showMore.textContent = 'SHOW LESS';
      showMore.appendChild(faChevronUp);
    } else {
      showMore.textContent = 'MORE';
      showMore.appendChild(faChevronDown);
    }
  }
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
