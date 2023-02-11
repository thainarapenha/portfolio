import React from "react";
import iconGIT from "../../assets/icons/github.svg";
import iconLINKEDIN from "../../assets/icons/linkedin.svg";
import iconWPP from "../../assets/icons/whatsapp.svg";

export const Footer: React.FC = () => {
  return(
    <section className="containerFooter">
      <div className="divIcons">
        <a href="https://github.com/thainarapenha" target="_blank"><img src={iconGIT} alt="icon do github"/></a>
        <a href="https://www.linkedin.com/in/thainarapenha/" target="_blank"><img src={iconLINKEDIN} alt="icon do linkedin"/></a>
        <a href="" target="_blank"><img src={iconWPP} alt="icon do whats app"/></a>
      </div>
      <p>© Todos os direitos reservados</p>
      <p>THAINARA PENHA | 2023</p>
    </section>
  );
}