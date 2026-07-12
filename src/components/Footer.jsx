import React, { useState } from 'react';

function Footer() {
  const [modalType, setModalType] = useState(null); // 'terms' | 'privacy' | null

  const closeModal = () => setModalType(null);

  return (
    <>
      <footer className="footer-saas animate-reveal">
        <div className="footer-saas-container">
          <div className="footer-saas-grid">
            {/* Brand Column */}
            <div className="footer-saas-brand">
              <div className="footer-saas-logo">
                <span className="footer-saas-logo-icon">&lt;/&gt;</span> Aman Mishra
              </div>
              <p className="footer-saas-desc">
                Full stack developer and software engineer building high-performance web applications, unified CP dashboards, and interactive AI interview coaches.
              </p>
              <div className="footer-saas-badge">
                <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: '#10B981', borderRadius: '50%', marginRight: '6px' }}></span>
                Available for opportunities
              </div>
            </div>

            {/* Navigation Column */}
            <div className="footer-saas-column">
              <h4 className="footer-saas-title font-display">Navigation</h4>
              <ul className="footer-saas-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#resume">Resume</a></li>
              </ul>
            </div>

            {/* Projects/Tech Column */}
            <div className="footer-saas-column">
              <h4 className="footer-saas-title font-display">Projects</h4>
              <ul className="footer-saas-links">
                <li><a href="https://github.com/amanmishra2005/Podium_AI_Interview_Coach" target="_blank" rel="noopener noreferrer">Podium</a></li>
                <li><a href="https://github.com/amanmishra2005/CodeMerge" target="_blank" rel="noopener noreferrer">CodeMerge</a></li>
                <li><a href="https://github.com/amanmishra2005" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="footer-saas-column">
              <h4 className="footer-saas-title font-display">Legal</h4>
              <ul className="footer-saas-links">
                <li>
                  <button type="button" onClick={() => setModalType('terms')}>
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => setModalType('privacy')}>
                    Privacy Policy
                  </button>
                </li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-saas-bottom">
            <p>&copy; {new Date().getFullYear()} Aman Mishra. All rights reserved.</p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Built with <span style={{ color: '#FF5A1F' }}>&hearts;</span> and Vite
            </p>
          </div>
        </div>
      </footer>

      {/* Modal Overlays */}
      {modalType && (
        <div className="legal-modal-overlay" onClick={closeModal}>
          <div className="legal-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="legal-modal-header">
              <h3 className="legal-modal-title">
                {modalType === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
              </h3>
              <button className="legal-modal-close" onClick={closeModal}>
                &times;
              </button>
            </div>
            
            <div className="legal-modal-body">
              {modalType === 'terms' ? (
                <div>
                  <section>
                    <h4>1. Acceptance of Terms</h4>
                    <p>
                      By accessing this portfolio website or reviewing code representations hosted here, you acknowledge and agree to respect intellectual property licenses, copy restrictions, and general acceptable usage limits.
                    </p>
                  </section>
                  <section>
                    <h4>2. Project Licenses & Code Usage</h4>
                    <p>
                      All hosted source code, designs, and platform visual identities (such as CodeMerge or Podium) are owned by Aman Mishra. Personal learning review is encouraged, but any redistribution or commercialization requires explicit consent.
                    </p>
                  </section>
                  <section>
                    <h4>3. Third-Party Links</h4>
                    <p>
                      This site contains links to other web pages (such as GitHub or LinkedIn). We do not control these sites, and are not liable for any content, policies, or activities on those third-party hubs.
                    </p>
                  </section>
                  <section>
                    <h4>4. Liability Limitations</h4>
                    <p>
                      This portfolio and all showcased projects are provided on an "as-is" basis for informational and recruitment assessment purposes. No guarantee of uptime or performance is made.
                    </p>
                  </section>
                </div>
              ) : (
                <div>
                  <section>
                    <h4>1. Information Collection</h4>
                    <p>
                      This portfolio is a static representation site. We do not track personal identifying information, sell cookies to advertisers, or require registration.
                    </p>
                  </section>
                  <section>
                    <h4>2. Contact Forms</h4>
                    <p>
                      If you submit a message through the contact form, the details you enter (name, email, subject, message) are routed solely to deliver the message to Aman Mishra for communication and hiring opportunities.
                    </p>
                  </section>
                  <section>
                    <h4>3. Security</h4>
                    <p>
                      All submissions are sent over secured, encrypted HTTPS tunnels to prevent snooping or interception of contact data.
                    </p>
                  </section>
                  <section>
                    <h4>4. Data Deletion</h4>
                    <p>
                      If you have submitted a contact request and would like your message deleted from private record logs, you can reach out directly to request immediate removal.
                    </p>
                  </section>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
