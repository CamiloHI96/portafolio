// src/components/about.jsx
import React from "react";
import "./about.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaBug,
  FaRobot,
} from "react-icons/fa";
import { SiFlask, SiPostman } from "react-icons/si";

// Función mejorada para manejar niveles con decimales (ej. 3.5)
function renderStars(level) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= level) {
      stars.push(<FaStar key={i} className="star full" />);
    } else if (i - 0.5 <= level) {
      stars.push(<FaStarHalfAlt key={i} className="star half" />);
    } else {
      stars.push(<FaRegStar key={i} className="star empty" />);
    }
  }
  return stars;
}

function About() {
  const frontendSkills = [
    { icon: <FaHtml5 className="skill-icon text-danger" />, name: "HTML", level: 4 },
    { icon: <FaCss3Alt className="skill-icon text-primary" />, name: "CSS", level: 3 },
    { icon: <FaJs className="skill-icon text-warning" />, name: "JavaScript", level: 3 },
    { icon: <FaReact className="skill-icon text-info" />, name: "React", level: 3 },
  ];

  const backendSkills = [
    { icon: <FaPython className="skill-icon text-info" />, name: "Python", level: 4 },
    { icon: <SiFlask className="skill-icon text-dark" />, name: "Flask", level: 4 },
    { icon: <FaDatabase className="skill-icon text-success" />, name: "MySQL", level: 3 },
    { icon: <FaGitAlt className="skill-icon text-danger" />, name: "Git / GitHub", level: 4 },
  ];

  const qualitySkills = [
    { icon: <FaBug className="skill-icon text-warning" />, name: "QA Junior", level: 3 },
    { icon: <FaRobot className="skill-icon text-primary" />, name: "Automatizaciones", level: 3 },
    { icon: <SiPostman className="skill-icon text-danger" />, name: "Postman", level: 4 },
    { icon: <FaJs className="skill-icon text-warning" />, name: "Testing JS", level: 3 },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-text text-center text-lg-start">
              <span className="section-chip">Perfil profesional</span>
              <h2 className="fw-bold mb-3">Sobre mí</h2>
              <p>
                Soy <strong>Fullstack Jr</strong> y actualmente curso el
                <strong> 8vo semestre de Ingenieria de Software</strong> en la
                <strong> Universidad CIAF</strong>. Me gusta construir
                soluciones completas, desde la interfaz hasta la logica del
                backend, con especial interes en productos web utiles y bien
                estructurados.
              </p>
              <p>
                Tambien vengo fortaleciendo un perfil de <strong>QA Junior</strong>,
                con experiencia en pruebas, validacion de APIs y
                <strong> automatizaciones</strong>. Me interesa aportar en
                equipos donde pueda combinar desarrollo, calidad y mejora
                continua mientras sigo creciendo profesionalmente.
              </p>
              <div className="about-highlights">
                <span>Fullstack Jr</span>
                <span>QA Junior</span>
                <span>Automatizaciones</span>
                <span>Practicas profesionales</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="skills text-center text-lg-start">
              <h4 className="fw-semibold mb-3">Competencias Profesionales</h4>

              <div className="skill-category mb-4">
                <h5 className="text-primary fw-bold mb-2">Frontend</h5>
                <div className="row g-3">
                  {frontendSkills.map((s, i) => (
                    <div key={i} className="col-6 d-flex flex-column align-items-center">
                      {s.icon}
                      <span className="fw-semibold">{s.name}</span>
                      <div className="stars">{renderStars(s.level)}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h5 className="text-success fw-bold mb-2">Backend</h5>
                <div className="row g-3">
                  {backendSkills.map((s, i) => (
                    <div key={i} className="col-6 d-flex flex-column align-items-center">
                      {s.icon}
                      <span className="fw-semibold">{s.name}</span>
                      <div className="stars">{renderStars(s.level)}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-category mt-4">
                <h5 className="fw-bold mb-2">Automation & QA</h5>
                <div className="row g-3">
                  {qualitySkills.map((s, i) => (
                    <div key={i} className="col-6 d-flex flex-column align-items-center">
                      {s.icon}
                      <span className="fw-semibold">{s.name}</span>
                      <div className="stars">{renderStars(s.level)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
