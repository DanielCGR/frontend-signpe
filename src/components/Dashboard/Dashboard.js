import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faHistory } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Dashboard/Dashboard.css';
import learn from '../../assets/Dashboard/learn.jpeg';
import history from '../../assets/Dashboard/history.png';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      
      <div className="dashboard-cards horizontal">
        {/* Card Aprendizaje */}
        <div className="dashboard-card medium" onClick={() => navigate('/select-level')}>
          <img
            src={learn}
            alt="Aprendizaje"
            className="dashboard-card-img"
          />
          <h3>Aprendizaje</h3>
          <FontAwesomeIcon icon={faClipboardCheck} className="icon-right" />
        </div>

        {/* Card Historial */}
        <div className="dashboard-card medium" onClick={() => navigate('/historial')}>
          <img
            src={history}
            alt="Historial"
            className="dashboard-card-img"
          />
          <h3>Historial</h3>
          <FontAwesomeIcon icon={faHistory} className="icon-right" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;