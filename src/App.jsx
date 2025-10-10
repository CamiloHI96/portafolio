// App.jsx
import React, { useEffect } from 'react';
import './App.css';
import Menu from './components/menu';
import Intro from './components/intro';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

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