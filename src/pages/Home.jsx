import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import Timeline from './Timeline'
import '../App.css';
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import leftArrow from '../assets/left_arrow.jpg';
import rightArrow from '../assets/right_arrow.jpg';
import hamburgImg from '../assets/HamburgPicture.jpg';
import animalTinderImg from '../assets/animalTinder.png';

window.onload = () => { //Skrolle til toppen automatisk
  window.scrollTo(0, 0);
};


document.addEventListener('mousemove', function (event) { //Kode for hero-tittel animasjon basert på mus-bevegelse
  const text = document.querySelector('.rotating-container');
  if (!text) return;

  const textRect = text.getBoundingClientRect(); //Henter størrelse og posisjon

  //Beregner musens posisjon relativt til midten av hero-tittel
  const mouseX = event.clientX - textRect.left - textRect.width / 2;
  const mouseY = event.clientY - textRect.top - textRect.height / 2;

  //Regner rotasjon på x- og y-aksen basert på musens posisjon
  const rotateX = (mouseY / textRect.height) * 2;
  const rotateY = -(mouseX / textRect.width) * 0.5;

  text.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`; //Setter rotasjonen på hero-tittel
});


const ProjectContainer = ({ name }) => {
    const imageMap = {
    Hamburg: hamburgImg,
    PetTinder: animalTinderImg,
    Interactive_Story: "https://media.istockphoto.com/id/452773845/photo/dark-old-room.jpg?s=612x612&w=0&k=20&c=lmIZpSbheSMkyAJVq822iNcMZaFq0vKA-SL4Qvbnz_k="
  };

  const projectLinks = {
    Hamburg: "https://stigmikalmj-kp.github.io/hamburg-tourism-site/",
    PetTinder: "https://www.figma.com/proto/FvifKtO1w4HF2llj2Dbdt2/KjæledyrApp?node-id=7-5&t=wZPZKR2pwXPlQgvt-1&starting-point-node-id=7%3A5",
    Interactive_Story: "https://stigmikalmj-kp.github.io/Twine-Knekt-I-Natten/",
  }

  //Tilstand for å sjekke om musen er over "overlay"
  const [overlayHovered, setOverlayHovered] = useState(false)

  //Henter inn bilde og lenke basert på navn
  const image = imageMap[name];
  const projectLink = projectLinks[name];

  // Funksjoner for å håndtere mus-over og mus-ut
  const handleMouseEnter = () => setOverlayHovered(true);
  const handleMouseLeave = () => setOverlayHovered(false);

  return (
    <div className="project-container">
      <h1
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ 
          color: overlayHovered ? 'white' : 'black',
          textShadow: overlayHovered
            ? '2px 2px 4px rgba(0, 0, 0, 0.5)'
            : '2px 2px 4px rgba(255, 255, 255, 0.5)', //Bytter farge hvis hover
          transition: 'all 0.3s ease',
        }}
      >{name}</h1>
      
      <img className="project-image" src={image} alt={name} />
      <div className="project-overlay" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

        <button 
          onClick={() => window.open(projectLink, '_blank') //Åpner lenke til prosjektet når knappen er trykket på
          }
        >Take me to this project</button></div>
    
    </div>
  );
};

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectAmount = 3

  useEffect(() => {
    const scrollToSection = location.state?.scrollTo;
    if (scrollToSection) {
      const section = document.getElementById(scrollToSection);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectAmount); //Går til neste prosjekt
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectAmount) % projectAmount); //Går til forrige prosjekt
  };

  return (
    <div>
      <section id="hero-Section">
        <div id="hero-container">
          <div className="rotating-container">
            <h1 id="hero-name">Stig Mikal</h1>
            <h2 id="software-developer">Software Developer</h2>
          </div>
        </div>
      </section>

      <section id='about-section'>
        <div id='about-container'>
          <div id='about-header'>
            <h2 className='sub-titles'>About Me</h2>
            <p>
              Hi, I'm Mikal, a 17-year-old software developer passionate about building interactive, user-focused experiences. I first got into coding by making simple text games in Python, and from there, my curiosity took off. Whether scriptin for Roblox in Lua or crafting dynamic web apps with React, I love turning ideas into clean functional code.
            </p>

            <button id='timeline-shortcut' onClick={() => navigate('/timeline')}>
              How I got here
            </button>
          </div>

          <div className="skills-grid">
            <div className='scroll-track'>
              <li className="item item1">
                <i className="devicon-react-original colored skill-image"></i>
                <span>ReactJS</span>
              </li>
              <li className="item item2">
                <i className="devicon-html5-plain colored skill-image"></i>
                  <span>HTML</span>
              </li>
              <li className="item item3">
                <i className="devicon-css3-plain colored skill-image"></i>
                  <span>CSS</span>
              </li>
              <li className="item item4">
                <i className="devicon-javascript-plain colored skill-image"></i>
                  <span>JavaScript</span>
              </li>
              <li className="item item5">
                <i className="devicon-python-plain colored skill-image"></i>
                  <span>Python</span>
              </li>
              <li className="item item6">
                <i className="devicon-vscode-plain colored skill-image"></i>
                  <span>VS Code</span>
              </li>
              <li className="item item7">
                <i className="devicon-github-original skill-image"></i>
                  <span>GitHub</span>
              </li>
              <li className="item item8">
                <i className="devicon-lua-plain skill-image"></i>
                  <span>Lua</span>
              </li>


              <li className="item item1">
                <i className="devicon-react-original colored skill-image"></i>
                <span>ReactJS</span>
              </li>
              <li className="item item2">
                <i className="devicon-html5-plain colored skill-image"></i>
                  <span>HTML</span>
              </li>
              <li className="item item3">
                <i className="devicon-css3-plain colored skill-image"></i>
                  <span>CSS</span>
              </li>
              <li className="item item4">
                <i className="devicon-javascript-plain colored skill-image"></i>
                  <span>JavaScript</span>
              </li>
              <li className="item item5">
                <i className="devicon-python-plain colored skill-image"></i>
                  <span>Python</span>
              </li>
              <li className="item item6">
                <i className="devicon-vscode-plain colored skill-image"></i>
                  <span>VS Code</span>
              </li>
              <li className="item item7">
                <i className="devicon-github-original skill-image"></i>
                  <span>GitHub</span>
              </li>
              <li className="item item8">
                <i className="devicon-lua-plain skill-image"></i>
                  <span>Lua</span>
              </li>

            </div>
            
       
          </div>  
        </div>
      </section>

      <section id="projects-section">
        <h1 style={{ color: 'white' }} className='sub-titles'>Past projects</h1>
        <div id="projects-dep">
          <button className="project-buttons" onClick={handlePrev} style={{ visibility: currentIndex === 0 ? 'hidden' : 'visible' }}>
            <img className="project-button-image" src={leftArrow} alt="Previous" />
          </button>

          <div id="project-viewport">
            <div id="projects-track" style={{transform: `translateX(-${currentIndex * 100}%)`,}}>
              <ProjectContainer name="Hamburg" />
              <ProjectContainer name="PetTinder" />
              <ProjectContainer name="Interactive_Story" />

              
            </div>
          </div>

          <button className="project-buttons" onClick={handleNext} style={{ visibility: currentIndex === 3 ? 'hidden' : 'visible' }}>
            <img className="project-button-image" src={rightArrow} alt="Next" />
          </button>
        </div>
      </section>

      <ContactSection/>

      <Footer/>
    </div>
  );
}
