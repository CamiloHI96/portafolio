// src/components/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-white text-center d-flex flex-column justify-content-center">
      <div className="container">
        <h2 className="display-4 fw-bold mb-3">Contacto</h2>
        <p className="lead mb-4">
          Puedes contactarme a través del siguiente correo o mis redes sociales.
        </p>
        <a href="mailto:tuemail@correo.com" className="btn btn-primary btn-lg">
          Envíame un mensaje
        </a>
      </div>
    </section>
  );
}

export default Contact;
