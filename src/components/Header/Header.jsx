import React from "react";
import Typewriter from "typewriter-effect";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="circle c-1"></div>
      <div className="circle c-2"></div>
      <div className="circle c-3"></div>
      <div className="circle c-4"></div>
      <h2>Hola, encantado de conocerte</h2>
      <h1>
        Soy <span className="name">Natalio Rabasco</span>,
        <Typewriter
          className="work"
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("desarrollador web")
              .pauseFor(1000)
              .deleteAll()
              .typeString("diseñador grafico")
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
      </h1>
      <button className="btn btn-proyects">Ver proyectos</button>
    </header>
  );
};

export default Header;
