import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import '../App.css';
import Home from './Home'

// Definerer navigasjonsseksjonene og ruter som skal vises i menyen
const sections = [
  { id: 'hero-Section', label: 'Home', type: 'section' },
  { id: 'about-section', label: 'About', type: 'section' },
  { id: 'projects-section', label: 'Projects', type: 'section' },
  { id: 'contact-section', label: 'Contact', type: 'section' },
  { id: 'timeline', label: 'Timeline', type: 'route', path: '/timeline' }
];

const Layout = () => {
  // Holde styr for hvilken seksjon er aktiv
  const [activeSection, setActiveSection] = useState('hero-Section');
  const location = useLocation();

  useEffect(() => {
    // Oppdatere aktiv seksjon basert på scroll-posisjon
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Hvor langt ned brukeren har scrollet
      const windowHeight = window.innerHeight; 
      const documentHeight = document.documentElement.scrollHeight;

      let current = 'hero-Section'; //Standard seksjon

      // Hvis brukeren er helt nederst på siden
      if (scrollTop + windowHeight >= documentHeight - 1) {
        current = 'contact-section';
      } else {
        // Går gjennom alle seksjoner og sjekker om de er synlige
        sections.forEach(({ id, type }) => {
          if (type === 'section') {
            const section = document.getElementById(id);
            if (section) {
              const top = section.offsetTop - 80;
              if (scrollTop >= top) {
                current = id; // Oppdaterer hvilken seksjon som er aktiv
              }
            }
          }
        });
      }

      setActiveSection(current); //Oppdaterer 
    };

    if (location.pathname === '/') { //Kun sjekke scrollingen hvis brukeren er på forsiden
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll); //Fjerne event-lytteren 
    }
  }, [location]);

  return (
    <>
      <nav className="navBar">
        <ul className="nav-list">
          {sections.map(({ id, label, type, path }) => (
            <li key={id}>
              {/* Link til seksjon på samme side */}
              {type === 'section' ? (
                <Link
                  to="/"
                  state={{ scrollTo: id }}
                  className={activeSection === id && location.pathname === '/' ? 'active-link' : ''}
                >
                  {label}
                </Link>
              ) : (
                // Link til annen rute (timeline)
                <Link
                  to={path}
                  className={location.pathname === path ? 'active-link' : ''}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
