import React from 'react';
import '../../styles/Dashboard/ProfileModal.css';
import profileImage from '../../assets/Dashboard/profile.png'

function ProfileModal({ onClose }) {
    return (
        <div className="profile-modal">
      <div className="profile-modal-header">
        <button onClick={onClose} className="close-modal-button">&times;</button>
      </div>
      
      {/* Contenido del perfil con la imagen de perfil */}
      <div className="profile-content">
        <div className="profile-image-large">
          <img src={profileImage} alt="Foto de perfil" />
        </div>
        <h2>Nombre Completo</h2>
        <p>correo@ejemplo.com</p>
      </div>

      {/* Botones de acciones en la parte inferior */}
      <div className="profile-actions">
        <button>Cambiar Foto de perfil</button>
        <button>Cambiar Contraseña</button>
        <button className="delete-account-button">Eliminar cuenta</button>
      </div>
    </div>
    );
  }
  
  export default ProfileModal;