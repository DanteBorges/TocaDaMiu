import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import Alcatea from "../../img/mainALCA.png";

const Navbar = () => (
  <nav className="navbar">
    <a href="/"a><img src={Alcatea} alt={"Loba cinza uivando"} /></a>
   
    <NavLink
      exact
      style={({ isActive }) =>
        isActive
          ? {
              color: "#010119",
              background: "whitesmoke",
              padding: "10px", 
              borderRadius: "10px",
            }
          : { color: "white", background: "#010119" }
      }
      to="/"
    >
      Inicio
    </NavLink>

    <NavLink
      style={({ isActive }) =>
        isActive
          ? {
              color: "whitesmoke",
              background: "red",
              padding: "10px", 
              borderRadius: "10px",
            }
          : { color: "red", background: "#010119", textDecoration: "none",
          
         }
      }
      to="/enviar"
    >
      Nova ferramenta
    </NavLink>
    <NavLink
      style={({ isActive }) =>
        isActive
          ? {
              color: "whitesmoke",
              background: "green",
              padding: "10px", 
              borderRadius: "10px",
            }
          : { color: "green", background: "#010119" }
      }
      to="/sobre"
    >
      Sobre o projeto
    </NavLink>
    <NavLink
      style={({ isActive }) =>
        isActive
          ? {
              color: "#010119",
              background: "yellow",
              padding: "10px", 
              borderRadius: "10px",
            }
          : { color: "yellow", background: "#010119" }
      }
      to="/contato"
    >
      Contato
    </NavLink>
  </nav>
);

export default Navbar;
