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
        <div className="home-layout container-fluid d-flex flex-column flex-md-row align-items-center justify-content-center min-vh-100">
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
      )}

      {/* === Secciones === */}
      {currentView === "about" && (
        <section className="section-view d-flex align-items-center justify-content-center">
          <About />
        </section>
      )}

      {currentView === "cv" && (
      <section className="section-view d-flex align-items-center justify-content-center">
        {/* Aquí luego importas y colocas tu componente CV */}
        <div className="text-center">
          <h2>Hoja de vida</h2>
          <p>Próximamente se mostrará mi CV aquí.</p>
        </div>
      </section>
      )}

      {currentView === "projects" && (
        <section className="section-view d-flex align-items-center justify-content-center">
          <Projects />
        </section>
      )}

      {currentView === "contact" && (
        <section className="section-view d-flex align-items-center justify-content-center">
          <Contact />
        </section>
      )}
    </div>
  );
}

export default App;