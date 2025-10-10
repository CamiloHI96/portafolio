// src/components/Projects.jsx
import React from 'react';

function Projects() {
  return (
    <section id="projects" className="bg-light text-center d-flex flex-column justify-content-center">
      <div className="container">
        <h2 className="display-4 fw-bold mb-3">Proyectos</h2>
        <p className="lead">
          Aquí encontrarás algunos de mis proyectos más recientes, creados con tecnologías
          como React, Flask y Python.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
          <div className="card p-3 shadow-sm" style={{ width: '18rem' }}>
            <h5>Proyecto 1</h5>
            <p>Descripción breve del proyecto.</p>
          </div>
          <div className="card p-3 shadow-sm" style={{ width: '18rem' }}>
            <h5>Proyecto 2</h5>
            <p>Descripción breve del proyecto.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
