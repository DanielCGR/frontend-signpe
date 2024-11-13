import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileModal from './ProfileModal';
import '../../styles/Dashboard/DashboardNavbar.css';
import { faUser } from "@fortawesome/free-solid-svg-icons"; // Asegúrate de tener una imagen de perfil
import logoImage from '../../assets/Dashboard/lsp.png'; // Asegúrate de tener el logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DashboardNavbar() {
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleProfileModal = () => {
    setProfileModalOpen(!isProfileModalOpen);
  };

  const handleLogout = () => {
    // Aquí podrías limpiar cualquier dato de autenticación (por ejemplo, eliminar el token)
    navigate('/login'); // Redirige al login
  };

  return (
    <nav className="dashboard-navbar">
      {/* Botón de perfil a la izquierda */}
      <button className="profile-button" onClick={toggleProfileModal}>
        <FontAwesomeIcon icon={faUser} alt="Perfil" className="profile-image" />
      </button>

      {/* Logo en el centro */}
      <div className="app-logo">
        <img src={logoImage} alt="Logo" className="logo-image" />
        <span>SIGNPE</span>
      </div>

      {/* Botón de cerrar sesión a la derecha */}
      <button className="logout-button" onClick={handleLogout}>
        Cerrar sesión
      </button>

      {/* Modal de perfil, solo visible cuando isProfileModalOpen es true */}
      {isProfileModalOpen && <ProfileModal onClose={toggleProfileModal} />}
    </nav>
  );
}

export default DashboardNavbar;