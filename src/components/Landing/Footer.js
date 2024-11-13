import React from 'react';
import '../../styles/Landing/Footer.css';
import yt from '../../assets/Landing/yt.webp';
import fb from '../../assets/Landing/fb.png';
import ig from '../../assets/Landing/ig.webp';

function Footer() {
  return (
    <footer className="footer">
      <p></p>
      <div className="social-icons">
      <img src={yt} alt="YouTube" className="yt-image" />
      <img src={fb} alt="Facebook" className="fb-image" />
      <img src={ig} alt="Instagram" className="ig-image" />
      </div>
    </footer>
  );
}

export default Footer;