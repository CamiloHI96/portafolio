// App.jsx
import './App.css';
import Menu from './components/menu';
import Intro from './components/intro';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
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