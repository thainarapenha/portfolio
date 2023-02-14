import React from "react";
import imgHTML from "../../assets/img/HTML.svg";
import imgCSS from "../../assets/img/CSS.svg";
import imgJS from "../../assets/img/JS.svg";
import imgTS from "../../assets/img/TS.svg";
import imgREACT from "../../assets/img/REACT.svg";
import imgGIT from "../../assets/img/GIT.svg";
import imgBOOTSTRAP from "../../assets/img/BOOTSTRAP.svg";
import imgSASS from "../../assets/img/SASS.svg";
import imgFIGMA from "../../assets/img/FIGMA.svg";
import imgSCRUM from "../../assets/img/SCRUM.svg";
import imgMAIS from "../../assets/img/MAIS.svg";
import imgEU from "../../assets/img/eu.png";

export const Sobre: React.FC = () => {
  return (
    <section className="containerSobre" id="sobre">
      <h2>Quer saber mais sobre <span>habilidades técnicas</span> ? Veja as <span>tecnologias</span> que estudo</h2>
      <div className="cardSobre">
        <div className="card cardImg">
          <img src={imgHTML} />
          <img src={imgCSS} />
          <img src={imgJS} />
          <img src={imgTS} />
          <img src={imgREACT} />
          <img src={imgGIT} />
          <img src={imgBOOTSTRAP} />
          <img src={imgSASS} />
          <img src={imgFIGMA} />
          <img src={imgSCRUM} />
          <a href="https://www.linkedin.com/in/thainarapenha/" target="_blank"><img src={imgMAIS} /></a>
          
        </div>
      </div>

      <div className="sobreMim">
        <img src={imgEU}/>
        <div className="textSobre">
          <p>Olá, tudo bem? :)</p>
          <p>Me Chamo Thainara. Sou estudante de Engenharia de Computação-UFC e trabalho com 
            desenvolvimento de sites (com foco em Front-End). Já tive experiências com Empresa Jr, 
            Centro Acadêmico, Design, além do próprio desenvolvimento web.</p>
          <p>Se quiser saber mais sobre mim, te convido a dar uma olhadinha 
            no meu <a href="https://www.linkedin.com/in/thainarapenha/" target="_blank">linkedin</a> :)</p>
        </div>
      </div>
    </section>
  );
}