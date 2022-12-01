import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => (
  <nav className="navbar">
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      
      to="/"
    >
      Inicio
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/enviar"
    >
      Enviar
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/sobre"
    >
      Sobre
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/contato"
    >
      contato
    </NavLink>
  </nav>
);

export default Navbar;
