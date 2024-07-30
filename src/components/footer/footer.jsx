import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Venta Autos. Todos los derechos reservados.</p>
      <nav className="footer-nav">
        <ul>
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#privacy">Política de Privacidad</a></li>
          <li><a href="#terms">Términos y Condiciones</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
