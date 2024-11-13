import React from 'react';
import '../../styles/Landing/Features.css';
import featureImage1 from '../../assets/Landing/feature-1.jpg'; // Asegúrate de tener estas imágenes en tu carpeta de assets
import featureImage2 from '../../assets/Landing/feature-2.webp';
import featureImage3 from '../../assets/Landing/feature-3.webp';

function Features() {
  return (
    <section className="features" id="features">
      <h2>Funciones</h2>
      <div className="features-list">
        <div className="feature-item">
          <img src={featureImage1} alt="Función 1" className="feature-image" />
          <div className="feature-text"><strong><p>Reconocimiento en Tiempo Real de Lengua de Señas</p></strong></div>
        </div>
        <div className="feature-item">
          <img src={featureImage2} alt="Función 2" className="feature-image" />
          <div className="feature-text"><strong><p>Evaluación y Progreso Personalizado</p></strong></div>
        </div>
        <div className="feature-item">
          <img src={featureImage3} alt="Función 3" className="feature-image" />
          <div className="feature-text"><strong><p>Acceso Libre e Ilimitado, disponible 24/7</p></strong></div>
        </div>
      </div>
    </section>
  );
}

export default Features;