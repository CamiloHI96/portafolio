// src/components/Menu.jsx
import React from "react";

function Menu({ onNavigate, currentView }) {
  const links = [
    { id: "about", label: "Sobre mí" },
    { id: "cv", label: "Hoja de vida (CV)" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm portfolio-navbar">
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
          }}
        >
          CAMILO.EXE
        </a>

        <button
          className="navbar-toggler custom-toggler"
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
            {links.map((link) => (
              <li className="nav-item" key={link.id}>
                <button
                  className={`btn nav-link nav-link-custom ${
                    currentView === link.id ? "active" : ""
                  }`}
                  onClick={() => onNavigate(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
