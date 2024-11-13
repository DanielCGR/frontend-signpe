import React from 'react';
import '../../styles/Landing/ContactForm.css';

function ContactForm() {
  return (
    <section className="contact" id="contact">
      <h2>Contacto</h2>
      <form className="contact-form">
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Nombre" />
        <textarea placeholder="Mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;