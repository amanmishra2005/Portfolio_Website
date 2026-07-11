import React from 'react';

function Hero({ handleNavClick }) {
  return (
    <section id="home" className="hero-section reveal">
      <div className="section-container hero-grid">
        <div className="hero-left">
          <div className="opportunity-badge">
            <span className="pulse-dot"></span>
            Available for Opportunities
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-text">Aman Mishra</span>
          </h1>
          <h2 className="hero-subtitle">Full-Stack Software Engineer</h2>
          <p className="hero-desc">
            Specializing in the MERN Stack. I engineer scalable, high-performance web applications, build
            secure RESTful backend APIs, and design robust database architectures optimized for user
            experience.
          </p>
          <div className="hero-actions">
            <a href="#portfolio" className="btn-primary" onClick={(e) => handleNavClick(e, '#portfolio')}>
              My Portfolio
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow-icon"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="./Aman_Mishra_Resume.html" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              View CV
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="doc-icon"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/amanmishra2005" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="https://simpleicons.org/icons/github.svg" alt="GitHub icon" />
            </a>
            <a href="https://x.com/AmanMishra_2005" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
              <img src="https://simpleicons.org/icons/x.svg" alt="X / Twitter icon" />
            </a>
            <a href="https://www.linkedin.com/in/amanmishra2005/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="https://www.svgrepo.com/show/204944/linkedin.svg" alt="LinkedIn icon" />
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h3 className="stat-number">2+</h3>
              <p className="stat-label">Projects</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">8.22</h3>
              <p className="stat-label">B.Tech CGPA</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Tech Stacks</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="avatar-glow-wrapper">
            <div className="rotating-border border-outer"></div>
            <div className="rotating-border border-inner"></div>
            <div className="avatar-image-box">
              <img src="./Aman.png" alt="Aman Mishra Portrait" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
