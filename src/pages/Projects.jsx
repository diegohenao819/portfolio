import React from "react";
import "../Styles/project.css";
import clickProf from "../assets/clickProf.png";
import emmi from "../assets/emmi.png";

export const Projects = () => {
  return (
    <div className="project">
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
        <img src={emmi} alt="Emmi" />
        <div className="parrafos">
          <h3>INSTITUTO EMMI PIKLER</h3>
          <p>Projecto para un jardín infantil.</p>
          <p>
            Tecnologías: React, Node, Express, CSS, HTML, Git, GitHub,
            Trello,Heroku, Postman, entre otras herramientas.
          </p>
          <a href="https://emmi-pikler.netlify.app/" target="blank">
            <button>Ver Proyecto</button>
          </a>
        </div>
      </div>

      <div className="caja caja1">
        <img src={clickProf} alt="clickProf" />
        <div className="parrafos">
          <h3>CLICK-PROF</h3>
          <p>Projecto para un jardín infantil.</p>
          <p>
            Proyecto realizado en equipo, en el cual se utilizo React, Redux,
            Node, Express,Figma, Heroku, Postman, entre otras herramientas. AWS
            werwerwe rwwerwerewr wre wer wer wer were ----- rwerwer ---
            werwere--- esta funcionando en portfolio... estamos publicos en una
            pagina!!
          </p>
          <button>Ver Proyecto</button>
        </div>
      </div>
    </div>
  );
};
