import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Natalio R.</h1>
      <div className="menu">
        <nav>
          <ul>
            <li>
              <a href="#">Proyectos</a>
              <a href="#">Habilidades</a>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
