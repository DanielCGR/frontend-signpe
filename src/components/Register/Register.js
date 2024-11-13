import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthFooter from '../Login/AuthFooter';
import '../../styles/Register/Register.css';
import googleIcon from '../../assets/Register/google.png'

function Register() {
  const navigate = useNavigate();

  // Función de manejo de envío del formulario
  const handleRegister = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para el registro (por ejemplo, envío de datos a una API)
    // Simularemos el registro exitoso con un simple delay

    // Simulación de éxito en el registro y redirección al login
    setTimeout(() => {
      alert("Registro exitoso");
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="register-container">
      <h1>SIGNPE</h1>
      <h2>Crear una Cuenta</h2>

      <div className="register-form">
        {/* Botón de Registro con Google */}
        <label className="google-label">Regístrate con Google</label>
        <button className="google-button">
          <img src={googleIcon} alt="Google Icon" className="google-icon" />
          Google
        </button>

        <div className="separator">
          <hr className="line" />
          <span>o</span>
          <hr className="line" />
        </div>

        {/* Formulario de Registro */}
        <form onSubmit={handleRegister}>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirm-password">Confirmar Contraseña</label>
          <input type="password" id="confirm-password" name="confirm-password" required />

          <button type="submit" className="register-button">¡Regístrate!</button>
        </form>

        {/* Enlace para regresar al inicio de sesión */}
        <div className="back-to-login">
          <p>¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link></p>
        </div>
      </div>

      <AuthFooter />
    </div>
  );
}

export default Register;