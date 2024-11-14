import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/SelectCategory/SelectCategory.css';

function SelectCategory() {
  const navigate = useNavigate();

  return (
    <div className="select-category">

      <div className="select-category-content">
        {/* Botón de volver */}
        <button className="back-button" onClick={() => navigate('/select-level')}>
          &lt; Volver
        </button>

        {/* Título */}
        <h1>Seleccionar Categoría</h1>

        {/* Categorías en cuadrícula */}
        <div className="category-grid">
          <div className="category-item">Abecedario</div>
          <div className="category-item">Números</div>
          <div className="category-item">Relaciones familiares</div>
          <div className="category-item">Preguntas</div>
          <div className="category-item">Verduras</div>
          <div className="category-item" onClick={() => navigate('/select-sign')}>Colores</div>
          <div className="category-item">Saludos</div>
          <div className="category-item">Pronombres</div>
          <div className="category-item">Verbos</div>
        </div>
      </div>
    </div>
  );
}

export default SelectCategory;
