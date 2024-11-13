import React from 'react';
import { Link } from 'react-router-dom';
import AuthFooter from '../Login/AuthFooter';
import '../../styles/ForgotPassword/ForgotPassword.css';

function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      <h1>SIGNPE</h1>
      <h2>Recupera tu Contraseña</h2>
      <p>Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.</p>

      <div className="forgot-password-form">
        <form>
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" required />

          <button type="submit" className="send-button">Enviar Enlace</button>
        </form>

        {/* Enlace para regresar al inicio de sesión */}
        <div className="back-to-login">
          <Link to="/login">Volver al Inicio de Sesión</Link>
        </div>
      </div>
      <AuthFooter />
    </div>
  );
}

export default ForgotPassword;