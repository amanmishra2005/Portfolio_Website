import React, { useState } from 'react';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status === 200) {
          alert('Thank you for reaching out! Aman will get back to you shortly.');
          form.reset();
        } else {
          alert(json.message || 'Something went wrong. Please check your access key or try again later.');
        }
      })
      .catch((error) => {
        console.error('Submission error:', error);
        alert('Failed to send message. Please check your internet connection.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section reveal">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">CONTACT</span>
          <h2 className="heading">Get In Touch</h2>
          <div className="line line-centered"></div>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-box">
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="fa53b00f-3cb3-462a-b234-e7f5812ccd5e" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Project Collaboration" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
