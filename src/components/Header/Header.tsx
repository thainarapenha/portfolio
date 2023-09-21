import React from "react";
import "../../styles/global.scss";
import iconGIT from "../../assets/icons/github.svg";
import iconLINKEDIN from "../../assets/icons/linkedin.svg";
import iconWPP from "../../assets/icons/whatsapp.svg";

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <div className="divIcons">
          <a href="https://github.com/thainarapenha" target="_blank"><img src={iconGIT} alt="icon do github" /></a>
          <a href="https://www.linkedin.com/in/thainarapenha/" target="_blank"><img src={iconLINKEDIN} alt="icon do linkedin" /></a>
          <a href="" target="_blank"><img src={iconWPP} alt="icon do whats app" /></a>
        </div>

        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </nav>
    </header>
  );
}