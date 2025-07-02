import React, { useState } from 'react';
import AnishPic from '../assets/Anish_Choudhary_Pic.jpg';
import Resume from '../assets/Anish_Choudhary_Resume.pdf';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Header */}
      <header>
        <div className="logo">Anish Choudhary</div>
        <nav>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="mobile-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-flex">
          <div className="hero-text">
            <p className="greet">Hello!</p>
            <h1>I’m Anish Choudhary</h1>
            <p className="subtitle">Senior DevOps Engineer</p>
            <p>I help build and maintain scalable CI/CD pipelines and cloud-native infrastructure for embedded and enterprise environments.</p>
            <div className="buttons">
              <a href={Resume} className="btn primary" download>Download Resume</a>
              <a href="#contact" className="btn secondary">Hire Me</a>
            </div>
          </div>
          <div className="hero-img">
            <img src={AnishPic} alt="Anish Choudhary" className="avatar" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3><i className="fas fa-code-branch"></i> CI/CD & DevOps</h3>
              <div className="skill-tags">
                <span>Jenkins</span>
                <span>GitLab CI</span>
                <span>Docker</span>
                <span>Kubernetes</span>
              </div>
            </div>
            <div className="skill-card">
              <h3><i className="fas fa-cogs"></i> Configuration</h3>
              <div className="skill-tags">
                <span>Ansible</span>
                <span>CMake</span>
                <span>Bazel</span>
              </div>
            </div>
            <div className="skill-card">
              <h3><i className="fas fa-cloud"></i> Cloud & Infra</h3>
              <div className="skill-tags">
                <span>AWS</span>
                <span>Azure</span>
                <span>Terraform</span>
              </div>
            </div>
            <div className="skill-card">
              <h3><i className="fas fa-code"></i> Scripting</h3>
              <div className="skill-tags">
                <span>Shell</span>
                <span>Python</span>
                <span>Groovy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <p style={{ textAlign: 'center', color: '#cbd5e1' }}>
            Senior Engineer at Landis+Gyr, Noida (Oct 2021 – May 2023)<br />
            <br />
            • Developed GitLab CI & Jenkins scripted pipelines for embedded builds.<br />
            • Managed DevOps tools: Jenkins, Git, Gerrit, Docker, Artifactory.<br />
            • Automated infrastructure setup using Ansible and Shell/Python scripts.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog">
        <div className="container">
          <h2 className="section-title">Blog</h2>
          <p style={{ textAlign: 'center', color: '#cbd5e1' }}>
            Stay tuned! I’ll be publishing cheat sheets and DevOps tutorials soon.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <p style={{ textAlign: 'center', color: '#cbd5e1' }}>
            Want to collaborate or have a question? Reach out at <a href="mailto:anish.devops@gmail.com" style={{ color: '#0ea5e9' }}>anish.devops@gmail.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          &copy; {new Date().getFullYear()} Anish Choudhary. All Rights Reserved.
        </div>
      </footer>

      {/* Buy Me a Coffee */}
      <div className="coffee">
        <a href="https://www.buymeacoffee.com/anishdevops" target="_blank" rel="noreferrer">
          <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" />
        </a>
      </div>
    </>
  );
}

export default App;

