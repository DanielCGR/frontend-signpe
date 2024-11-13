// src/components/DataComponent.js
import React, { useEffect, useState } from 'react';
import { getData } from '../services/apiService';

function DataComponent() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setMensaje(data.mensaje);
      } catch (error) {
        console.error("Error al cargar datos", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Datos desde el API:</h2>
      <p>{mensaje}</p>
    </div>
  );
}

export default DataComponent;