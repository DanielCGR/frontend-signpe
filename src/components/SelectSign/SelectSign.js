import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/SelectSign/SelectSign.css';

function SelectSign() {
  const navigate = useNavigate();

  // Lista de colores y sus nombres
  const colors = [
    "Colores", "Claro", "Oscuro", "Amarillo", "Celeste",
    "Marron", "Plomo", "Anaranjado", "Morado",
    "Rojo", "Azul", "Negro", "Rosado",
    "Blanco", "Guinda", "Verde"
  ];

  return (
    <div className="select-sign">

      <div className="select-sign-content">
        {/* Botón de volver */}
        <button className="back-button" onClick={() => navigate('/select-category')}>
          &lt; Volver
        </button>

        {/* Título */}
        <h1>Seleccionar Seña</h1>

        {/* Cuadrícula de señas */}
        <div className="sign-grid">
          {colors.map((color, index) => (
            <div key={index} className="sign-item" onClick={() => navigate('/practice-sign')}>
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