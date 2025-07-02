import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>Anish Choudhary</h1>
          <h2>Senior DevOps Engineer</h2>
          <p>Building bridges between development and operations</p>
          <div className="header-contact">
            <a href="tel:+91-XXXXXXXXXX"><BsTelephoneFill /> +91-XXXXXXXXXX</a>
            <a href="mailto:anish@gmail.com"><HiMail /> anish@gmail.com</a>
            <a href="https://linkedin.com/in/anish" target="_blank" rel="noopener noreferrer"><FaLinkedin /> linkedin.com/in/anish</a>
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer"><FaGithub /> github.com/username</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
