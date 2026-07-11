import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // 1. Scroll Reveal Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px -50px -100px -50px',
      threshold: 0.05,
    };

    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Trigger once
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, observerOptions);

    // Watch reveal items
    const elementsToReveal = document.querySelectorAll(
      '.reveal, .service-card, .timeline-item, .project-card, .grid-container .item'
    );
    elementsToReveal.forEach((el) => {
      revealObserver.observe(el);
    });

    // 2. Scroll event listener for header styling and active links
    const handleScroll = () => {
      // Toggle sticky header styling
      setIsScrolled(window.scrollY > 50);

      // Track active nav section
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      const scrollPos = window.scrollY || window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollPos >= sectionTop - 220) {
          currentSection = section.getAttribute('id');
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Run once initially to set correct states
    handleScroll();

    // Clean up
    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll click handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Header
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        isScrolled={isScrolled}
      />
      <main className="page-wrapper">
        <Hero handleNavClick={handleNavClick} />
        <About />
        <Services />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
