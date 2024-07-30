import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Venta Autos</Link>
      </div>
      <nav className="nav" role="navigation" aria-label="Principal">
        <ul>
          <li>
            <Link to="/" aria-current="page">Inicio</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};