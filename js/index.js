const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const speakers = [
  {
    name: 'Merid Nigussie',
    title: 'Head of Artificial Intelligence,Addis Ababa',
    image: '../images/person-1.jpg',
    biography: 'Merid is Deputy head of Artificial Intelligence and Robotics Engineering.',
  },
  {
    name: 'Tesema Fissaha',
    title: 'Sr.Automation Control Engineer, USA',
    image: '../images/person-2.jpg',
    biography: 'Tesema had been leading research group, was adviser for many Ph.D studies. Published more than 160 papers on Robotics.',
  },
  {
    name: 'Abebe Abayneh',
    title: 'Mechanical Project Engineer, INSTITUTE',
    image: '../images/person-3.jpg',
    biography: 'Abebe Abayneh is Mechatronics and Robotics Engineer, a philosopher of mechatronics.',
  },
  {
    name: 'Zhen Jie Chow',
    title: 'Senior Robotics Engineer, Netherlands',
    image: '../images/person-4.jpg',
    biography: 'Zhen Jie Chow has received a major grant to study very strong Robotics Control Mechanisms."',
  },
  {
    name: 'Rahul Saini',
    title: 'Aalto University , Finland',
    image: '../images/person-5.jpg',
    biography: 'Research topics include software enginnering and text automation.',
  },
  {
    name: 'Tewodros Abebaw',
    title: 'IBM Research USA, USA',
    image: '../images/person-6.jpg',
    biography: 'Dr. Tewodros Ababaw is currently in the Robotics Applications group in IBM Quantum.',
  },
];

const keynoteSpeakersDetail = document.querySelector('.keynote-speakers .speaker-persons');

speakers.forEach((speaker, index) => {
  keynoteSpeakersDetail.innerHTML += `
    <div class="speaker-person ${index > 1 ? 'bury' : ''}">
      <div class="speaker-image">
        <img src="./images/${speaker.image}" alt="image-speaker" />
      </div>
      <div class="speaker-info">
        <h4 class="speaker-name">${speaker.name}</h4>
        <p class="speaker-title"><em>${speaker.title}</em></p>
        <p class="speaker-biography">${speaker.biography}</p>
      </div>
    </div>
    `;
});

// show more speakers
const moreSpeakerButton = document.querySelector('.more-speakers');
moreSpeakerButton.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelectorAll('.bury').forEach((elements) => {
    elements.classList.toggle('bury');
  });
  moreSpeakerButton.style.display = 'none';
});