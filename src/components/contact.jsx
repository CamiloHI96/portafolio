// src/components/Contact.jsx
import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import './contact.css'; // ✅ Importa el nuevo CSS

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contacto</h2>
        <p>
          Puedes contactarme a través del siguiente correo o mis redes sociales.
        </p>

        <div className="d-flex justify-content-center gap-4 mb-4 flex-wrap">
          <a
            href="https://www.linkedin.com/in/juan-camilo-hernandez-ibarguen-08ba1a1a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link d-flex align-items-center"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={28} className="me-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/CamiloHI96"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link d-flex align-items-center"
            aria-label="GitHub"
          >
            <FaGithub size={28} className="me-2" />
            GitHub
          </a>
        </div>

        <div className="text-center">
          <a
            href="camilohi.1196@gmail.com"
            className="btn-contact d-inline-flex align-items-center"
          >
            <FaEnvelope className="me-2" />
            Envíame un mensaje
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;