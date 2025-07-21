// src/components/About/About.jsx
import React from 'react';
import './About.css'; // Link to its specific CSS file

// Import your professional headshot here (optional)
import ProfileImage from '../../assets/my-profile.jpg'; // Make sure this path is correct!

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Column: Heading and Image */}
        <div className="about-image-wrapper">
          <h2 className="about-title">About Me</h2> 
          {ProfileImage && (
            <img 
              src={ProfileImage} 
              alt="Zain Ul Abedin Profile" 
              className="profile-img" 
            />
          )}
        </div>

        {/* Right Column: Text Content */}
        <div className="about-content">
          <p className="about-description animated-description" style={{ animationDelay: '0.1s' }}>
            Hello! I'm <span className="highlight">Zain Ul Abedin</span>, a dedicated <span className="highlight">Front-End Developer</span> with a passion for building intuitive and high-performance web applications. I currently contribute to the <span className="highlight">Pest Control ERP system</span> at <span className="highlight">Accurate SAP Company</span>. This extensive web application manages client and employee data, along with comprehensive product inflow and outflow, utilizing vast libraries like <span className="highlight">Redux</span> for robust state management.
          </p>
          <p className="about-description animated-description" style={{ animationDelay: '0.2s' }}>
            Beyond my corporate role, I actively partner with <span className="highlight">international clients from the USA</span>. As the primary Front-End Developer in a dynamic team, I notably developed the <span className="highlight">POCOFY web application</span> using <span className="highlight">TypeScript</span>. POCOFY is built around five core pillars: <span className="highlight">Artists, MOVIES, Users, Feeds, and Lists</span>, showcasing my versatility in delivering complex, global solutions.
          </p>
          <p className="about-description animated-description" style={{ animationDelay: '0.3s' }}>
            Driven by new challenges, I'm constantly expanding my skillset to stay at the forefront of the industry. My goal is to become a <span className="highlight">leading expert and a star in the front-end development field</span>, consistently delivering exceptional user experiences and innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;