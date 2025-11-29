// src/components/Skills/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

// Importing necessary icons
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaPython, FaVuejs } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiFirebase, SiMongodb, SiPostman, SiVite, SiNextdotjs, SiKubernetes, SiExpress } from 'react-icons/si';
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
            { name: 'Vue.js', icon: <FaVuejs /> },
        ],
    },
    {
        category: 'Frameworks & Libraries',
        items: [
            { name: 'React.js', icon: <FaReact /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'Vue.js', icon: <FaVuejs /> },
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Express.js', icon: <SiExpress /> },
            { name: 'Redux', icon: <SiRedux /> },
            { name: 'Tailwind CSS', icon: <RiTailwindCssFill /> },
        ],
    },
    // Deployment & DevOps
    {
        category: 'Deployment & DevOps',
        items: [
            { name: 'AWS (Frontend Deployment)', icon: <FaAws /> },
            { name: 'Docker', icon: <FaDocker /> },
            { name: 'Kubernetes', icon: <SiKubernetes /> },
            { name: 'Python', icon: <FaPython /> },
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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <motion.h2
                    className="skills-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My Skills
                </motion.h2>
                <motion.p
                    className="skills-intro-text"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    A quick overview of the technologies and tools I excel with.
                </motion.p>

                <div className="skills-grid">
                    {skillsData.map((skillCategory, index) => (
                        <motion.div
                            className="skill-category"
                            key={index}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <h3 className="category-title">{skillCategory.category}</h3>
                            <ul className="skill-list">
                                {skillCategory.items.map((skill, itemIndex) => (
                                    <motion.li
                                        className="skill-item"
                                        key={itemIndex}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, color: 'var(--primary-accent)' }}
                                    >
                                        {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                                        <span className="skill-name highlight-skill">{skill.name}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;