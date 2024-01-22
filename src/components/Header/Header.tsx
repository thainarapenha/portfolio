import React from "react";
import "../../styles/global.scss";

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </nav>
    </header>
  );
}