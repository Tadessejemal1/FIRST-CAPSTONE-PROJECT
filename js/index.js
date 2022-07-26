(() => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("overlay");
    let open = false;
  
    const change = () => {
      if (!open) {
        hamburger.classList.add("open");
        menu.classList.add("menu");
      } else {
        hamburger.classList.remove("open");
        menu.classList.remove("menu");
      }
      open = !open;
    };
  
    hamburger.addEventListener("click", change);
})();

const speakers = [
    {
      name: 'Yonas Fissaha',
      title: 'Chief Scientist SABIC Technology, USA',
      image: '../images/person1.jpeg',
      biography: 'Yonas had been leading research group, was adviser for many Ph.D studies. Published more than 160 papers on mechanism, kinetic and mathematic models of chemical processes.',
    },
   {
      name: 'Yonas Fissaha',
      title: 'Chief Scientist SABIC Technology, USA',
      image: '../images/person1.jpeg',
      biography: 'Yonas had been leading research group, was adviser for many Ph.D studies. Published more than 160 papers on mechanism, kinetic and mathematic models of chemical processes.',
    },
    {
      name: 'Samuel Abayneh',
      title: 'Theoretical physicist @VORTEX|INSTITUTE',
      image: '../images/person1.jpeg',
      biography: 'Samuel Abayneh is a theoretical physicist, a philosopher of physics, the inspiration behind the New York Times best seller Sex on the Moon.',
    },
    {
      name: 'Selam Teshome',
      title: 'Wageningen University & Research , Netherlands',
      image: '../images/person1.jpeg',
      biography: 'Selam Teshome has received a major grant to study very strong chemical bonds. The title of the project is: "Synthetic Catch Bonds."',
    },
    {
      name: 'Tizta Seyoum',
      title: 'Aalto University , Finland',
      image: '../images/person1.jpeg',
      biography: 'Research topics include solar long-term variability and effects within projects ReSoLVE Center of Excellence and G-EPOS infrastructure in FIRI road map.',
    },
    {
      name: 'Tewodros Abebaw',
      title: 'IBM Research USA, USA',
      image: '../images/person1.jpeg',
      biography: 'Dr. Tewodros Ababaw is currently in the Quantum Applications group in IBM Quantum at IBM Research Almaden in San Jose, California.',
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