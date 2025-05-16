import React, { useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../Header/Header'; // importa el header del dashboard
import '../../styles/Evaluation/Evaluation.css';

function Evaluation() {
  const navigate = useNavigate();
  const location = useLocation();
  const nivel = location.state?.nivel || 'Nivel';

  const videoRef = useRef(null);

  useEffect(() => {
    async function startCamera() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (err) {
          // Manejo de error de cámara
        }
      }
    }
    startCamera();
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="evaluation-container">
      <Header />
      <button className="volver-btn" onClick={() => navigate(-1)}>
        &lt; Volver
      </button>
      <div className="evaluation-content">
        <div className="evaluation-camera-box">
          <video ref={videoRef} autoPlay playsInline className="evaluation-video" />
        </div>
        <div className="evaluation-info">
          <h1>Evaluación {nivel}</h1>
          <div className="evaluation-progress">
            <span className="evaluation-percent">## %</span>
            <div className="evaluation-bar"></div>
          </div>
          <button className="evaluation-start-btn">Iniciar Evaluación</button>
        </div>
      </div>
    </div>
  );
}

export default Evaluation;