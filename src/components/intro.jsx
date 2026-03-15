// src/components/Intro.jsx
import React, { useState, useEffect } from "react";
import "./intro.css";

function Intro() {
  const defaultTerminalGroups = [
    [
      "> role: Fullstack Jr / QA Junior",
      "> focus: web apps + automatizaciones",
      "> status: construyendo proyectos reales",
    ],
    [
      "> stack: React + Flask + MySQL",
      "> testing: APIs, flujos y validacion",
      "> goal: practicas y primer rol tech",
    ],
    [
      "> plus: git, despliegues y mejora continua",
      "> mode: aprendiendo, construyendo, iterando",
      "> ready: frontend, backend y calidad",
    ],
  ];
  const compactTerminalGroups = [
    [
      "> role: Fullstack / QA Jr",
      "> focus: apps + automatizacion",
      "> status: proyectos reales",
    ],
    [
      "> stack: React + Flask",
      "> testing: APIs y flujos",
      "> goal: practicas y 1er rol",
    ],
    [
      "> plus: git y despliegues",
      "> mode: aprender e iterar",
      "> ready: dev + calidad",
    ],
  ];

  const [displayedLines, setDisplayedLines] = useState(["", "", ""]);
  const [isCompact, setIsCompact] = useState(() =>
    window.matchMedia("(max-width: 375px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 375px)");
    const handleMediaChange = (event) => {
      setIsCompact(event.matches);
    };

    setIsCompact(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const terminalGroups = isCompact
      ? compactTerminalGroups
      : defaultTerminalGroups;

    const wait = (ms) =>
      new Promise((resolve) => {
        window.setTimeout(resolve, ms);
      });

    const typeLine = async (lineIndex, text) => {
      for (let charIndex = 0; charIndex <= text.length; charIndex += 1) {
        if (cancelled) {
          return;
        }

        setDisplayedLines((prev) => {
          const next = [...prev];
          next[lineIndex] = text.slice(0, charIndex);
          return next;
        });

        await wait(34);
      }
    };

    const eraseLine = async (lineIndex, text) => {
      for (let charIndex = text.length; charIndex >= 0; charIndex -= 1) {
        if (cancelled) {
          return;
        }

        setDisplayedLines((prev) => {
          const next = [...prev];
          next[lineIndex] = text.slice(0, charIndex);
          return next;
        });

        await wait(16);
      }
    };

    const runTerminalLoop = async () => {
      let groupIndex = 0;

      while (!cancelled) {
        const currentGroup = terminalGroups[groupIndex];

        setDisplayedLines(["", "", ""]);

        for (let lineIndex = 0; lineIndex < currentGroup.length; lineIndex += 1) {
          await typeLine(lineIndex, currentGroup[lineIndex]);
          await wait(120);
        }

        await wait(1600);

        for (let lineIndex = currentGroup.length - 1; lineIndex >= 0; lineIndex -= 1) {
          await eraseLine(lineIndex, currentGroup[lineIndex]);
          await wait(80);
        }

        groupIndex = (groupIndex + 1) % terminalGroups.length;
        await wait(220);
      }
    };

    runTerminalLoop();

    return () => {
      cancelled = true;
    };
  }, [isCompact]);

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
          <div key={i} className="terminal-line">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Intro;
