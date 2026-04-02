import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Projects.css";
import projectsData from "../../data/projectsData";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Featured work: <span className="typewriter-text"><Typewriter words={["Web Apps", "MERN Builds", "UI Design"]} loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={40} delaySpeed={1500} /></span></p>
<br />
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.techStack.map((tech, techIndex) => (
                  <span className="tech-badge" key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>

                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;