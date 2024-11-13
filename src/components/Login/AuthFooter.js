import React from 'react';
import '../../styles/Login/AuthFooter.css';

function AuthFooter() {
  return (
    <footer className="auth-footer">
      <p>
        Se aplican <a href="/terms" className="terms-link">Términos y Condiciones</a>.
      </p>
      <p>S I G N P E ®</p>
    </footer>
  );
}

export default AuthFooter;