// App.jsx
import React, { useEffect } from 'react';
import './App.css';
import Menu from './components/Menu';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(section => observer.observe(section));
  }, []);

  return (
    <>
      <Menu />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;