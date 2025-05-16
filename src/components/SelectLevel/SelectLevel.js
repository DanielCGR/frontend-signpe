import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import '../../styles/SelectLevel/SelectLevel.css';

function SelectLevel() {
  const navigate = useNavigate();

  return (
    <div className="select-level">

      <div className="select-level-content">
        {/* Botón de volver */}
        <button className="back-button" onClick={() => navigate('/dashboard')}>
          &lt; Volver
        </button>

        {/* Título */}
        <h1>Selecciona tu nivel</h1>

        {/* Botón Básico habilitado */}
        <div className="level-button enabled" onClick={() => navigate('/select-category', { state: { nivel: 'Básico' } })}>
          <span>Básico</span>
          <FontAwesomeIcon icon={faLockOpen} className="icon-enable" />
        </div>

        {/* Botón Intermedio deshabilitado */}
        <div className="level-button disabled">
          <span>Intermedio</span>
          <FontAwesomeIcon icon={faLock} className="icon-disabled" />
        </div>

        {/* Botón Avanzado deshabilitado */}
        <div className="level-button disabled">
          <span>Avanzado</span>
          <FontAwesomeIcon icon={faLock} className="icon-disabled" />
        </div>
      </div>
    </div>
  );
}

export default SelectLevel;
