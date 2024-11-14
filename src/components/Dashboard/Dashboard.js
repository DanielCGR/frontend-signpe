import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Dashboard/Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      
      <div className="dashboard-buttons">
        {/* Botón Aprendizaje */}
        <div className="dashboard-button" onClick={() => navigate('/select-level')}>
          <h3>Aprendizaje</h3>
          <FontAwesomeIcon icon={faBookOpen} className="icon-right" />
        </div>

        {/* Botón Evaluaciones */}
        <div className="dashboard-button">
          <h3>Evaluaciones</h3>
          <FontAwesomeIcon icon={faClipboardCheck} className="icon-right" />
        </div>
      </div>

      <h2 className="history-title">Historial</h2>
      <div className="history">
        <div className="history-item">Evaluación 1</div>
        <div className="history-item">Evaluación 2</div>
        <div className="history-item">Evaluación 3</div>
      </div>
    </div>
  );
}

export default Dashboard;