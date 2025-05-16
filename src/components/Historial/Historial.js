import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header'; // importa el header del dashboard
import '../../styles/Historial/Historial.css';

function Historial() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <button className="volver-btn" onClick={() => navigate(-1)}>
        &lt; Volver
      </button>
      <div className="historial">
        <h1 className="history-title">Historial</h1>
        <p>No cuentas con resultados</p>
      </div>
    </>
  );
}

export default Historial;