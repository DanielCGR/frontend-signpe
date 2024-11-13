import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Login/LoginNavbar.css';
import logoImage from '../../assets/Login/lsp.png';

function LoginNavbar() {
  return (
    <nav className="login-navbar">
      <Link to="/" className="back-button">{"< Volver"}</Link>
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo-image" />
      </div>
    </nav>
  );
}

export default LoginNavbar;