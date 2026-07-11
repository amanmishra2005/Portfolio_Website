import React from 'react';

function Services() {
  return (
    <section id="services" className="services-section reveal">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">SERVICES</span>
          <h2 className="heading">What I Offer</h2>
          <div className="line line-centered"></div>
        </div>
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>Full-Stack Web Dev</h3>
            <p>
              Designing modern end-to-end applications. Crafting structured layouts with React and building
              reliable backend API logic in Node/Express.
            </p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
              </svg>
            </div>
            <h3>Backend & API Design</h3>
            <p>
              Constructing scalable databases and secure middleware solutions, employing Mongoose, MONGODB
              databases, and tokenized JWT authentication.
            </p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <h3>Frontend Engineering</h3>
            <p>
              Developing user-centric web layouts using optimized React configurations, flexible grid
              structures, dynamic transitions, and cross-browser responsiveness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
