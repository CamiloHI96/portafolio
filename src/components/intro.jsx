// src/components/Intro.jsx
import React, { useState, useEffect } from "react";
import "./intro.css";

function Intro() {
  const terminalLines = [
    "> role: Fullstack Jr / QA Junior",
    "> focus: web apps + automatizaciones",
    "> status: construyendo proyectos reales",
  ];

  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    const currentLineChars = [];

    const timer = setInterval(() => {
      if (lineIndex < terminalLines.length) {
        const currentLine = terminalLines[lineIndex];
        if (charIndex < currentLine.length) {
          currentLineChars[charIndex] = currentLine[charIndex];
          setDisplayedLines([
            ...terminalLines.slice(0, lineIndex),
            currentLineChars.join('')
          ]);
          charIndex++;
        } else {
          // Línea completa → pasar a la siguiente
          setDisplayedLines(terminalLines.slice(0, lineIndex + 1));
          lineIndex++;
          charIndex = 0;
          currentLineChars.length = 0;
        }
      } else {
        clearInterval(timer);
      }
    }, 80); // Velocidad de escritura

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="intro-content">
      <h1>
        Hola, soy <br />
        Camilo Hernandez
        <span className="cursor">█</span>
      </h1>
      <p className="intro-kicker">
        Desarrollador Fullstack Jr en formacion, cursando 8vo semestre de
        Ingenieria de Software.
      </p>
      <div className="terminal-text">
        {displayedLines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}

export default Intro;
