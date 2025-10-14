// src/components/about.jsx
import React from "react";
import "./about.css";
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaDatabase, FaGitAlt,
  FaStar, FaStarHalfAlt, FaRegStar
} from "react-icons/fa";
import { SiFlask } from "react-icons/si";

function renderStars(level) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= level) stars.push(<FaStar key={i} className="star full" />);
    else if (i - level === 0.5) stars.push(<FaStarHalfAlt key={i} className="star half" />);
    else stars.push(<FaRegStar key={i} className="star empty" />);
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

  return (
    <section id="about" className="about-section d-flex align-items-center justify-content-center">
      <div className="container py-5">
        <div className="row align-items-center">
          
          {/* Texto principal */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-text text-center text-lg-start">
              <h2 className="fw-bold mb-3">Sobre mí</h2>
              <p>
                Desde pequeño me ha fascinado descubrir cómo funcionan las cosas, y esa curiosidad fue el inicio de mi camino en la tecnología.
                Hoy soy estudiante de <strong>7.º semestre de Ingeniería de Software</strong> en el <strong>Universidad CIAF, Pereira (Risaralda, Colombia)</strong>,
                enfocado en el <strong>desarrollo de software colaborativo</strong> y la mejora continua.
              </p>
              <p>
                Me defino como una persona <strong>proactiva, adaptable y apasionada por aprender</strong>, siempre buscando nuevos retos que impulsen
                mi crecimiento profesional. Actualmente, me encuentro en la búsqueda de <strong>prácticas o una oportunidad laboral</strong> donde pueda
                aplicar mis conocimientos, seguir aprendiendo y contribuir con ideas que generen impacto real.
              </p>
            </div>
          </div>

          {/* Sección de habilidades */}
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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;