// src/services/apiService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000'; // Aquí se configurará la URL de tu API Flask

export const getData = async () => {
  try {
    const response = await axios.get(`${API_URL}/items`);
    return response.XLte2tYcIfhT5KzMEp01.name;
  } catch (error) {
    console.error("Error al obtener datos del API", error);
    throw error;
  }
};