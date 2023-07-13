import React from "react";
import "../Styles/project.css";
import clickProf from "../assets/clickProf.png";
import emmi from "../assets/emmi.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const navegar = useNavigate();
  const navegarProject = () => {
    navegar("/home");
  };
  const navegarHome = () => {
    navegar("/contact");
  };
  return (
    <div className="project">
      <div className="cajaArrow">
        <ArrowBackIosIcon onClick={navegarHome} className="arrow" />
      </div>
      <div className="caja caja1">
        <img src={clickProf} alt="clickProf" />
        <div className="parrafos">
          <h3>CLICK-PROF</h3>
          <p>Projecto de examenes en segunda lengua.</p>
          <p>
            Tecnologías: React, Node, Express, CSS, HTML, Git, GitHub,
            Trello,Heroku, Postman, entre otras herramientas.
          </p>
          <a
            href="https://master.d1ie4jvzhxyf59.amplifyapp.com/"
            target="blank"
          >
            <button>Ver Proyecto</button>
          </a>
        </div>
      </div>

      <div className="caja caja1">
        <img src={clickProf} alt="clickProf" />
        <div className="parrafos">
          <h3>CLICK-PROF</h3>
          <p>Projecto de examenes en segunda lengua.</p>
          <p>
            Tecnologías: React, Node, Express, CSS, HTML, Git, GitHub,
            Trello,Heroku, Postman, entre otras herramientas.
          </p>
          <a
            href="https://master.d1ie4jvzhxyf59.amplifyapp.com/"
            target="blank"
          >
            <button>Ver Proyecto</button>
          </a>
        </div>
      </div>

      <div className="caja caja1">
        <img src={clickProf} alt="clickProf" />
        <div className="parrafos">
          <h3>CLICK-PROF</h3>
          <p>Projecto de examenes en segunda lengua.</p>
          <p>
            Tecnologías: React, Node, Express, CSS, HTML, Git, GitHub,
            Trello,Heroku, Postman, entre otras herramientas.
          </p>
          <a
            href="https://master.d1ie4jvzhxyf59.amplifyapp.com/"
            target="blank"
          >
            <button>Ver Proyecto</button>
          </a>
        </div>

      </div>

      <div className="cajaArrow">
        <ArrowForwardIosIcon onClick={navegarProject} className="arrow" />
  </div>
    </div>
  );
};
