// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p className="footer-copyright">
          &copy; {currentYear} <span className="highlight-footer-name">Zain Ul Abedin</span>. All rights reserved.
        </p>
        <p className="footer-attribute">
          Designed and Developed with <span className="highlight-heart">&hearts;</span> by Zain.
        </p>
        {/* Optional: Add quick navigation links or social media icons if you want them repeated here */}
        {/* <div className="footer-links">
          <a href="#about">About</a> | <a href="#projects">Projects</a> | <a href="#contact">Contact</a>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;