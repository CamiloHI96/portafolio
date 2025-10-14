// src/components/about.jsx
import React from "react";
import "./about.css";
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaDatabase, FaGitAlt,
  FaStar, FaStarHalfAlt, FaRegStar
} from "react-icons/fa";
import { SiFlask } from "react-icons/si";

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

  return (
    <section id="about" className="about-section">
      <div className="container py-5">
        <div className="row align-items-center">
          
          {/* Texto principal */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-text text-center text-lg-start">
              <h2 className="fw-bold mb-3">Sobre mí</h2>
              <p>
                Desde pequeño me ha fascinado descubrir cómo funcionan las cosas, y esa curiosidad se convirtió en mi motor para adentrarme en el mundo de la tecnología.
                Hoy curso el <strong>séptimo semestre de Ingeniería de Software</strong> en la <strong>Universidad CIAF, Pereira (Risaralda, Colombia)</strong>,
                donde no solo aprendo conceptos, sino que cultivo una pasión que crece cada día: <strong>crear soluciones reales con código</strong>.
              </p>
              <p>
                Me encanta aprender, enfrentar desafíos que me sacan de mi zona de confort y descubrir nuevas formas de resolver problemas. 
                Para mí, cada bug, cada proyecto y cada línea de código son una oportunidad para <strong>mejorar como programador y como persona</strong>.
                Actualmente, busco una oportunidad para realizar mis <strong>prácticas profesionales o mi primera experiencia laboral</strong>, 
                donde pueda aportar con entusiasmo, seguir aprendiendo sin parar y crecer junto a un equipo que comparta la misma pasión por construir algo significativo.
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