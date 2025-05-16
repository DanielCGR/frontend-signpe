import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/SelectCategory/SelectCategory.css';

function SelectCategory() {
  const navigate = useNavigate();
  const location = useLocation();
  const nivel = location.state?.nivel || 'Seleccionar Categoría';

  // Manejar click en cualquier categoría
  const handleCategoryClick = (categoria) => {
    navigate('/select-sign', { state: { categoria, nivel } });
  };

  // Manejar click en el botón de evaluación de nivel
  const handleEvaluationClick = () => {
    navigate('/evaluation', { state: { nivel } });
  };

  return (
    <div className="select-category">
      <div className="select-category-content">
        {/* Botón de volver */}
        <button className="back-button" onClick={() => navigate('/select-level')}>
          &lt; Volver
        </button>

        {/* Título dinámico */}
        <h1>{nivel}</h1>

        {/* Categorías en cuadrícula */}
        <div className="category-grid">
          <div className="category-item" onClick={() => handleCategoryClick('Abecedario')}>Abecedario</div>
          <div className="category-item" onClick={() => handleCategoryClick('Números')}>Números</div>
          <div className="category-item" onClick={() => handleCategoryClick('Relaciones familiares')}>Relaciones familiares</div>
          <div className="category-item" onClick={() => handleCategoryClick('Preguntas')}>Preguntas</div>
          <div className="category-item" onClick={() => handleCategoryClick('Colores')}>Colores</div>
          <div className="category-item" onClick={() => handleCategoryClick('Saludos')}>Saludos</div>
        </div>

        {/* Botón de evaluación de nivel */}
        <button className="start-evaluation-button" onClick={handleEvaluationClick}>
          Evalúa tu nivel
        </button>
      </div>
    </div>
  );
}

export default SelectCategory;
