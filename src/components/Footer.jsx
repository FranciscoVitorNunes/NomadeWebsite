import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'; // Importa o arquivo de estilos CSS

function Footer() {
  const log = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png';
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <img src={log} alt="Logo da Empresa" className="logo" />
        </div>
        <div className="links-section">
          <a href="https://www.instagram.com/nomade_corporation" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram size={24} /> Instagram
          </a>
          <a href="https://wa.me/5585998348005" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaWhatsapp size={24} /> WhatsApp
          </a>
        </div>
        <div className="location-section">
          <p>Caririaçu, Ceará</p>
          <p>CEP: 63220-000</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;