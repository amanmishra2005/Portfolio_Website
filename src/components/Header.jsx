import React from 'react';

function Header({ activeSection, handleNavClick, isScrolled }) {
  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
          <span className="logo-accent">AM</span>
        </a>
        <nav className="desktop-nav">
          <a
            href="#home"
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, '#home')}
          >
            Home
          </a>
          <a
            href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, '#about')}
          >
            About
          </a>
          <a
            href="#services"
            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, '#services')}
          >
            Services
          </a>
          <a
            href="#resume"
            className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, '#resume')}
          >
            Resume
          </a>
          <a
            href="#portfolio"
            className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, '#portfolio')}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact
          </a>
        </nav>
        <div className="nav-right">
          <a href="#contact" className="btn-hire" onClick={(e) => handleNavClick(e, '#contact')}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="btn-icon"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
