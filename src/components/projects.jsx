// src/components/Projects.jsx
import React from "react";
import "./projects.css";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-shell">
        <header className="projects-header">
          <span className="projects-eyebrow">Repos y builds</span>
          <h2>Proyectos destacados</h2>
          <p>
            Estos son los proyectos que mejor representan mi forma de trabajar:
            desarrollo fullstack, interes por la calidad y soluciones pensadas
            para seguir evolucionando. Dos de ellos siguen en proceso y el
            portafolio funciona como mi vitrina principal.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <div className="project-top">
                <h3>{project.title}</h3>
                <span className="project-status">{project.status}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech" aria-label={`Tecnologias de ${project.title}`}>
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  className="project-link primary"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver GitHub
                </a>
                <a
                  className={`project-link secondary ${
                    project.demo === "#" ? "is-disabled" : ""
                  }`}
                  href={project.demo}
                  target={project.demo === "#" ? undefined : "_blank"}
                  rel={project.demo === "#" ? undefined : "noreferrer"}
                  aria-disabled={project.demo === "#"}
                  onClick={(event) => {
                    if (project.demo === "#") {
                      event.preventDefault();
                    }
                  }}
                >
                  {project.demo === "#" ? "Proximamente" : "Ver demo"}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
