// src/App.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Intro from "./components/intro";
import Menu from "./components/menu";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Card from "./components/cards";

function App() {
  const [currentView, setCurrentView] = useState("home");

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="app-container">
      {/* === Mostrar menú solo si NO estamos en la intro === */}
      {currentView !== "home" && (
        <Menu onNavigate={handleNavigate} currentView={currentView} />
      )}

      {/* === Pantalla de inicio === */}
      {currentView === "home" && (
        <div className="home-layout">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center w-100">
            <div className="intro-content text-center text-md-start mb-4 mb-md-0 me-md-5">
              <Intro />
            </div>
            <div className="cards-grid">
              <Card title="Sobre mí" onClick={() => handleNavigate("about")} />
              <Card title="Hoja de vida (CV)" onClick={() => handleNavigate("cv")} />
              <Card title="Proyectos" onClick={() => handleNavigate("projects")} />
              <Card title="Contacto" onClick={() => handleNavigate("contact")} />
            </div>
          </div>
        </div>
      )}

      {/* === Secciones === */}
      {currentView === "about" && <About />}

      {currentView === "cv" && (
        <section className="section-view with-navbar">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mb-4">Hoja de vida</h2>
                <p className="lead">
                  Próximamente se mostrará mi CV aquí.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {currentView === "projects" && <Projects />}

      {currentView === "contact" && <Contact />}
    </div>
  );
}

export default App;