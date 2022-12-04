import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => (
  <nav className="navbar">
    <NavLink
      exact
      style={({ isActive }) =>
        isActive
          ? {
              color: "#fff",
              background: "#7600dc",
            }
          : { color: "#545e6f", background: "#f0f0f0" }
      }
      to="/"
    >
      Inicio
    </NavLink>
    <NavLink
      style={({ isActive }) =>
        isActive
          ? {
              color: "#0000FF",
              textDecoration: "inline",
            }
          : { color: "#545e6f", background: "#f0f0f0", textDecoration: "none",
          
         }
      }
      to="/enviar"
    >
      Enviar
    </NavLink>
    <NavLink
      style={({ isActive }) =>
        isActive
          ? {
              color: "#fff",
              background: "#7600dc",
            }
          : { color: "#545e6f", background: "#f0f0f0" }
      }
      to="/sobre"
    >
      Sobre
    </NavLink>
    <NavLink
      style={({ isActive }) =>
        isActive
          ? {
              color: "#fff",
              background: "#7600dc",
            }
          : { color: "#545e6f", background: "#f0f0f0" }
      }
      to="/contato"
    >
      contato
    </NavLink>
  </nav>
);

export default Navbar;
