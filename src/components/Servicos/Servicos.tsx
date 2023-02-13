import React from "react";
import iconPASTA from "../../assets/icons/pasta.svg";
import iconTELA from "../../assets/icons/tela.svg";
import iconTELAS from "../../assets/icons/telas.svg";
import imgHomemCadeira from "../../assets/img/homemCadeira.svg";
import { BotaoContato } from "../BotaoContato/BotaoContato";

export const Servicos: React.FC = () => {
  return (
    <section className="sectionServicos" id="servico">
      <h2>Encontre um projetinho para <span>chamar de seu</span></h2>
      <div className="infoServico">
        <div className="divCardSrvicos">
          <div className="cardServicos">
            <div className="divTituloServico">
              <img src={iconTELA} />
              <h6>SITE SIMPLES (Landing Page)</h6>
            </div>
            <p>Poucas informações e com poucas alterações</p>
          </div>

          <div className="cardServicos">
            <div className="divTituloServico">
              <img src={iconPASTA} />
              <h6>PORTFÓLIO</h6>
            </div>
            <p>Foco no design e imagens de exposição</p>
          </div>

          <div className="cardServicos">
            <div className="divTituloServico">
              <img src={iconTELAS} />
              <h6>SITE COM MAIS DE 1 PÁGINA</h6>
            </div>
            <p>Muita informação para mostrar</p>
          </div>

          <BotaoContato />
        </div>
        <img id="imgHomem" src={imgHomemCadeira} />
      </div>
    </section>
  );
}