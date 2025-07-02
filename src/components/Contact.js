import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <BsTelephoneFill size={20} />
          <a href="tel:+91-XXXXXXXXXX">+91-XXXXXXXXXX</a>
        </div>
        <div className="contact-item">
          <HiMail size={20} />
          <a href="mailto:anish@gmail.com">anish@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaLinkedin size={20} />
          <a href="https://linkedin.com/in/anish" target="_blank" rel="noopener noreferrer">linkedin.com/in/anish</a>
        </div>
        <div className="contact-item">
          <FaGithub size={20} />
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">github.com/username</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
