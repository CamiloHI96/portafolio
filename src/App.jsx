// src/App.jsx
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Intro from "./components/intro";
import Menu from "./components/menu";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Card from "./components/cards";

function getViewFromHash(hash) {
  const normalizedHash = hash.replace(/^#\/?/, "");
  const allowedViews = new Set(["home", "about", "cv", "projects", "contact"]);

  if (!normalizedHash) {
    return "home";
  }

  return allowedViews.has(normalizedHash) ? normalizedHash : "home";
}

function App() {
  const [currentView, setCurrentView] = useState(() =>
    getViewFromHash(window.location.hash)
  );
  const cvUrl = `${import.meta.env.BASE_URL}Camilo-Hernandez-CV.pdf`;

  useEffect(() => {
    const syncViewWithHash = () => {
      setCurrentView(getViewFromHash(window.location.hash));
    };

    window.addEventListener("hashchange", syncViewWithHash);
    syncViewWithHash();

    return () => window.removeEventListener("hashchange", syncViewWithHash);
  }, []);

  const handleNavigate = (view) => {
    const nextHash = view === "home" ? "#/" : `#/${view}`;

    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
      return;
    }

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
        <section className="section-view with-navbar cv-section">
          <div className="cv-shell">
            <div className="cv-copy">
              <span className="section-chip">Hoja de vida</span>
              <h2>CV y perfil profesional</h2>
              <p>
                Perfil enfocado en desarrollo web fullstack, automatizaciones y
                QA Junior, con interes en aportar desde practicas o primeros
                roles de desarrollo.
              </p>
              <div className="cv-actions">
                <a
                  className="cv-button primary"
                  href={cvUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver CV
                </a>
                <a className="cv-button secondary" href={cvUrl} download>
                  Descargar PDF
                </a>
              </div>
              <p className="cv-mobile-note">
                En moviles y tablets compactas te recomiendo abrir el PDF en una
                pestaña nueva para verlo con mas comodidad.
              </p>
            </div>

            <div className="cv-preview">
              <iframe
                title="Hoja de vida de Camilo Hernandez"
                src={cvUrl}
                loading="lazy"
              />
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
