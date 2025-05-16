import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/SelectSign/SelectSign.css';

function SelectSign() {
  const navigate = useNavigate();
  const location = useLocation();
  const { categoria, nivel } = location.state || {};

  // Si no hay categoría, redirige de vuelta a categorías
  React.useEffect(() => {
    if (!categoria) {
      navigate('/select-category', { state: { nivel } });
    }
  }, [categoria, nivel, navigate]);

  // Lista de colores y sus nombres
  const colors = [
    "Amarillo", "Rojo", "Azul", "Negro", "Blanco"
  ];

  return (
    <div className="select-sign">
      <div className="select-sign-content">
        {/* Botón de volver */}
        <button
          className="back-button"
          onClick={() => navigate('/select-category', { state: { nivel } })}
        >
          &lt; Volver
        </button>

        {/* Título */}
        <h1>{nivel} - {categoria}</h1>

        {/* Cuadrícula de señas */}
        <div className="sign-grid">
          {colors.map((color, index) => (
            <div
              key={index}
              className="sign-item"
              onClick={() => navigate('/practice-sign', { state: { nivel, categoria, senia: color } })}
            >
              <div className="sign-thumbnail">
                {/* Aquí puedes colocar una imagen de miniatura */}
              </div>
              <span>{color}</span>
            </div>
          ))}
        </div>

        {/* Botón Iniciar Evaluación */}
        <button className="start-evaluation-button">
          Iniciar Evaluación
        </button>
      </div>
    </div>
  );
}

export default SelectSign;