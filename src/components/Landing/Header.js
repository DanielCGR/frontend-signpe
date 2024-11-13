import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Landing/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>SIGNPE</h1>
        <p className="intro-text">
          <strong>¿Alguna vez has querido aprender el lenguaje de señas, pero no encuentras una forma fácil y accesible de empezar?</strong>
        </p>
        <p className="description-text">
          SIGNPE es más que una aplicación; es tu aliado en el camino hacia la inclusión y la comunicación efectiva. Nuestra plataforma emplea tecnología de machine learning de última generación para que puedas aprender el lenguaje de señas peruano desde la comodidad de tu hogar y sin restricciones de horario.
        </p>
        <p className="highlight-text">
          <strong><em>❝ Lleva la Inclusión a Otro Nivel con SIGNPE: Tu Puerta a la Comunicación Sin Barreras ❞</em></strong>
        </p>
        <div className="header-buttons">
          <Link to="/login" className="login-button">Login</Link>
          <Link to="/register" className="register-button">Registro</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;