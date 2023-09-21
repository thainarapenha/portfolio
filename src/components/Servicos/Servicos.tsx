import React from "react";
import iconPASTA from "../../assets/icons/pasta.svg";
import iconTELA from "../../assets/icons/tela.svg";
import iconTELAS from "../../assets/icons/telas.svg";
import iconAPP from "../../assets/icons/app.svg";
import imgHomemCadeira from "../../assets/img/homemCadeira.svg";

export const Servicos: React.FC = () => {
  return (
    <section className="sectionServicos">
      <h2>Um pouco mais sobre as <span>Áreas</span> em que atuei</h2>
      <div className="infoServico">
        <div className="divCardSrvicos">
          <div className="cardServicos">
            <div className="divTituloServico">
              <img src={iconTELA} />
              <h6>Criação de Sites</h6>
            </div>
            <p>Landing pages ou multiplas páginas</p>
          </div>

          <div className="cardServicos">
            <div className="divTituloServico">
              <img src={iconPASTA} />
              <h6>Prototipação com Figma</h6>
            </div>
            <p>Foco na experiência de usuário (UX Design)</p>
          </div>

          <div className="cardServicos">
            <div className="divTituloServico">
              <img src={iconTELAS} />
              <h6>Produtos Digitais</h6>
            </div>
            <p>Aplicação internas para empresas que trabalhei</p>
          </div>

          <div className="cardServicos">
            <div className="divTituloServico">
              <img src={iconAPP} />
              <h6>Aplicativos</h6>
            </div>
            <p>Aplicação de uso em fábrica e projetos de portfólio</p>
          </div>
        </div>
        <img id="imgHomem" src={imgHomemCadeira} />
      </div>
    </section>
  );
}