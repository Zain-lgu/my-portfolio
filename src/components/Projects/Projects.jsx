// src/components/Projects/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

// Import project images
// Replace with your actual image paths
import pestControlERPImage from '../../assets/pest-control.png'; // Example image path
import pocofyWebAppImage from '../../assets/pocofy-logo.webp';   // Example image path
// import yourOtherProjectImage from '../../assets/your-other-project.jpg';

// Define your projects data here
const projectsData = [
  {
    id: 1,
    title: 'Pest Control ERP System',
    description: "A comprehensive Enterprise Resource Planning (ERP) web application developed for Accurate SAP Company. This system manages client and employee data, task assignments, and detailed product inventory (in/out), providing a robust solution for business operations.",
    image: pestControlERPImage, // Use the imported image
    technologies: ['React.js', 'Context Api', 'Next.js', 'tailwind', 'Gitlab'], // Add more as needed
    liveDemoLink: 'https://accuratepestcontrol.ae/', // Updated link
    githubRepoLink: 'https://github.com/yourusername/pest-control-erp', // Replace with actual link or remove
  },
  {
    id: 2,
    title: 'POCOFY Web Application',
    description: "Developed from scratch for international clients in the USA, POCOFY is a dynamic web application built with TypeScript. As the lead Front-End Developer, I focused on core pillars like Artists, MOVIES, Users, Feeds, and Lists, delivering a versatile platform for global users.",
    image: pocofyWebAppImage, // Use the imported image
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Github'], // Add more as needed
    liveDemoLink: 'https://your-pocofy-demo.com', // Replace with actual link or remove
    githubRepoLink: 'https://github.com/yourusername/pocofy-webapp', // Replace with actual link or remove
  },
  // Add more projects here
];

function Projects() {
  return (
    // IMPORTANT: This ID matches the navigation link in the Header
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="projects-intro-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          A selection of personal and professional projects showcasing my skills.
        </motion.p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              {project.image && (
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                </div>
              )}
              <div className="project-info">
                <h3 className="project-name highlight-project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveDemoLink && (
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button project-button demo-button"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubRepoLink && (
                    <a
                      href={project.githubRepoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button project-button github-button"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;