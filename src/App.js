import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="portfolio-container">
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Anish Choudhary - DevOps Engineer</p>
      </footer>
    </div>
  );
}

export default App;
