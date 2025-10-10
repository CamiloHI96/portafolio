// src/components/Menu.jsx
import React from 'react';

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#intro">Mi Portafolio</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#intro">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Sobre mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;