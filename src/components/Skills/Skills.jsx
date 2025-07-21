// src/components/Skills/Skills.jsx
import React from 'react';
import './Skills.css';

// Importing necessary icons
// CHANGED: SiAmazonaws removed from SiTypescript import, FaAws added to FaHtml5 import
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws,  FaPython } from 'react-icons/fa'; // FaAws added here
import { SiTypescript, SiRedux, SiFirebase, SiMongodb, SiPostman, SiVite, SiNextdotjs, SiKubernetes } from 'react-icons/si'; // SiAmazonaws removed from here
import { RiTailwindCssFill } from "react-icons/ri";

// Define your skills data here
const skillsData = [
    {
        category: 'Frontend Languages',
        items: [
            { name: 'HTML5', icon: <FaHtml5 /> },
            { name: 'CSS3', icon: <FaCss3Alt /> },
            { name: 'JavaScript (ES6+)', icon: <FaJsSquare /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
        ],
    },
    {
        category: 'Frameworks & Libraries',
        items: [
            { name: 'React.js', icon: <FaReact /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'Redux', icon: <SiRedux /> },
            { name: 'Tailwind CSS', icon: <RiTailwindCssFill />
 },
        ],
    },
    // Deployment & DevOps
    {
        category: 'Deployment & DevOps',
        items: [
            { name: 'AWS (Frontend Deployment)', icon: <FaAws /> }, // CHANGED: Now using FaAws
            { name: 'Docker', icon: <FaDocker /> },
            { name: 'Kubernetes', icon: <SiKubernetes /> },
            { name: 'python', icon: <FaPython />},
            {},
        ],
    },
    {
        category: 'Tools & Version Control',
        items: [
            { name: 'Git & GitHub', icon: <FaGitAlt /> },
            { name: 'Postman', icon: <SiPostman /> },
            { name: 'Vite', icon: <SiVite /> },
            { name: 'npm /Bun /Yarn', icon: null },
            { name: 'VS Code', icon: null },

        ],
    },
];

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <h2 className="skills-title">My Skills</h2>
                <p className="skills-intro-text">
                    A quick overview of the technologies and tools I excel with.
                </p>

                <div className="skills-grid">
                    {skillsData.map((skillCategory, index) => (
                        <div className="skill-category" key={index}>
                            <h3 className="category-title">{skillCategory.category}</h3>
                            <ul className="skill-list">
                                {skillCategory.items.map((skill, itemIndex) => (
                                    <li className="skill-item" key={itemIndex}>
                                        {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                                        <span className="skill-name highlight-skill">{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;