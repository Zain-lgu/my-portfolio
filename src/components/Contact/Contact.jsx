// src/components/Contact/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

// Import icons for social media links
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Contact() {
  // State to manage form inputs (optional, but good practice for controlled components)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this formData to a backend API
    // or a service like Formspree, Netlify Forms, EmailJS, etc.

    // For now, let's just log the data to the console
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (Form submission is not active yet)');

    // Optionally clear the form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-intro-text">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Regarding a project opportunity..."
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Zain, I'd like to discuss a potential collaboration."
                  required
                ></textarea>
              </div>
              <button type="submit" className="cta-button submit-button">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-wrapper">
            <h3 className="info-heading">Connect with me directly</h3>
            <p className="info-text">
              Feel free to send me an email or connect on my social platforms.
            </p>
            <div className="social-links">
              {/* CORRECTED EMAIL LINK: Added "mailto:" prefix */}
              <a href="mailto:zainjutt68@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaEnvelope />
              </a>
              {/* These links are already correct for opening in a new tab */}
              <a href="https://www.linkedin.com/in/zain-ul-abedin-b94b15349/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Zain-lgu" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaGithub />
              </a>
              {/* Add more social links as needed */}
              {/* <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaTwitter />
              </a> */}
            </div>
            <p className="location-text">
                Currently based in Ārifwāla, Punjab, Pakistan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;