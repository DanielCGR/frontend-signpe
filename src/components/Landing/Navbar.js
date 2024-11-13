import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Landing/Navbar.css';
import logoImage from '../../assets/Landing/lsp.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoImage} alt="Logo" className="logo-image" />
        <span className="logo-text">SIGNPE</span>
      </div>
      <div className="navbar-right">
        <div className="nav-links">
          <a href="#features">Funciones</a>
          <a href="#contact">Contacto</a>
        </div>
        <Link to="/login" className="access-button">Acceso</Link>
      </div>
    </nav>
  );
}

export default Navbar;