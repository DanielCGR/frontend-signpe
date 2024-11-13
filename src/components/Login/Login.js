import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import '../../styles/Login/Login.css';
import AuthFooter from '../Login/AuthFooter';
import googleIcon from '../../assets/Login/google.png';

function Login() {
  const navigate = useNavigate();

  // Función de manejo de inicio de sesión
  const handleLogin = (event) => {
    event.preventDefault();
    
    // Aquí iría la lógica de autenticación real (por ejemplo, llamada a una API)
    // Para efectos de demostración, simularemos un inicio de sesión exitoso
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Simulación de verificación de credenciales
    if (email === "usuario@ejemplo.com" && password === "contraseña") {
      navigate('/dashboard'); // Redirige al Dashboard
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <div className="login-container">
        <h1>SIGNPE</h1>
        <h2>Iniciar Sesión</h2>
        <div className="login-form">
          {/* Accede con Google */}
          <label className="google-label">Accede con Google</label>
          <button className="google-button">
            <img src={googleIcon} alt="Google Icon" className="google-icon" />
            Google
          </button>
          
          {/* Línea de separación */}
          <div className="separator">
            <hr className="line" />
            <span>○</span>
            <hr className="line" />
          </div>

          {/* Formulario de inicio de sesión regular */}
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />

            <button type="submit" className="login-button">¡Acceder!</button>
          </form>

          <div className="login-links">
            <a href="/forgot-password" className="forgot-password">¿Olvidó su contraseña?</a>
            <p>¿No cuentas con una cuenta? <a href="/register" className="register-link">Regístrate</a></p>
          </div>
        </div>
      </div>
      <AuthFooter />
    </div>
  );
}

export default Login;