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

const featuredSpeakers = [
    {
        pattern: 'images/assets/transparent.jpeg',
        picture: 'images/assets/YochaiBenklerJI6.jpg',
        name: 'Yochai Benkler',
        presentation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        bar: '___',
        description: 'Benkler studies commons-based peer productions, and published his seminal book The Wealth of Network in 2006.'
    },
    {
        pattern: 'images/assets/transparent.jpeg',
        picture: 'images/assets/Noh.jpg',
        name: 'SohYeong Noh',
        presentation: 'Director of Art Centre Nabi and a board member of CC Korea',
        bar: '___',
        description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities and the arts.'
    },
    {
        pattern: 'images/assets/transparent.jpeg',
        picture: './images/assets/lilaTratikov.jpg',
        name: 'Lila Tretikov',
        presentation: 'Executive Director of the Wikimedia Foundation',
        bar: '___',
        description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.'
    },
    {
        pattern: 'images/assets/transparent.jpeg',
        picture: './images/assets/Chon_Kilnam.jpg',
        name: 'Kilnam Chon',
        presentation: '',
        bar: '___',
        description: "Kilnam Chon is help to bring the internet to Asia and is an outspoken advocate for the open web and digital commons. in 2012 he was inducted into the inaugural class of the Internet Society's (ISOC) Internet Hall of Fame",
    },
    {
        pattern: 'images/assets/transparent.jpeg',
        picture: './images/assets/Julia.jpg',
        name: 'Julia Leda',
        presentation: 'President of Young Pirates of Europe',
        bar: '___',
        description: "European integration, political democracy and participation of youth trough online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July."
    },
    {
        pattern: 'images/assets/transparent.jpeg',
        picture: './images/assets/ryanMerkley.jpg',
        name: 'Ryan Merkley',
        presentation: 'CEO of Creative Commons, ex COO of the Mozilla foundation',
        bar: '___',
        description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.'
    }
];

const featured_speakers = document.getElementById('featuredSpeakers');

featuredSpeakers.forEach((speaker) => {
    featured_speakers.innerHTML += `<div class="speakers-container">
                <div class="card">
                    <div>
                        <img class="speaker-pattern" src="${speaker.pattern}" alt="${speaker.name}">
                        <img class="speaker-img" src="${speaker.picture}" alt="${speaker.name}">
                    </div>
                    <div class="description-container">
                        <h2 class="speakerName">${speaker.name}</h2>
                        <p class="speakerPresentation">${speaker.presentation}</p>
                        <div class="presentationBorderBottom">${speaker.bar}</div>
                        <p class="speakerDescription">${speaker.description}</p>
                    </div>
                </div>

            </div>
    `;
});


