import React from 'react';
import CozyCottage from '../assets/CozyCottage.jpg';
import Deskology from '../assets/Deskology.jpg';
import Blog from '../assets/Blog.jpg';
import './projects.css';

const projects = [
  {
    title: "Cozy Cottage",
    description: "Concept for a Bed n' Breakfast located in Aspen Colorado.",
    image: CozyCottage,
    link: "https://www.figma.com/proto/jnz42IV6g228rR1kco7a9b/Pritchard-High-Fidelity?node-id=5-432&starting-point-node-id=5%3A432&t=g7GrX4GleAmLFQIZ-1"
  },
  {
    title: "Deskology",
    description: "An E-Commerce for desk related gear like headphone stands, desk trays, and more.",
    image: Deskology,
    link: "https://wcet.waketech.edu/bzpritchard/WEB260/wordpress/"
  },
  {
    title: "Web Blog",
    description: "A blog about my journey through Web Developement.",
    image: Blog,
    link: "https://wcet.waketech.edu/bzpritchard/WEB250/wordpress/"
  }
];

const Projects = () => {
    return (
        <section className="projects-section">
            <h2>Projects</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                <a className="project-card" key={index} href={project.link} target='_blank' rel="noopener noreferrer" >
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;