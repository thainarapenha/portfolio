import React from "react";
import iconSITE from "../../assets/icons/site.svg";
import iconDESIGN from "../../assets/icons/design.svg";
import iconGESTAO from "../../assets/icons/gestao.svg";
import iconMKT from "../../assets/icons/site.svg";
import { BotaoContato } from "../BotaoContato/BotaoContato";

export const Habilidades: React.FC = () => {
  return (
    <section className="containerHabilidades" id="habilidades">
      <h2>Quais as minhas <span>experiências?</span> Um pouco dos <span>projetos</span> que participei</h2>

      <div className="containerCards">
        <div className="cardsHabilidades">
          <img src={iconDESIGN} />
          <div>
            <h3>Centro Acadêmico</h3>
            <p>Trabalho voluntário com foco em melhorias e iniciativas voltadas aos estudantes do
              curso de Eng. de Computação - UFC</p>
          </div>
        </div>

        <div className="cardsHabilidades">
          <img src={iconSITE} />
          <div>
            <h3>Empresa Júnior</h3>
            <p>Trabalho voluntário voltado para o desenvolvimento profissional dos estudantes de
              Eng. Computação - UFC Sobral.
            </p>
          </div>
        </div>

        <div className="cardsHabilidades">
          <img src={iconGESTAO} />
          <div>
            <h3>Bolsista Dev Front-End</h3>
            <p>Projeto voltado para aprendizado em técnologia através do desenvolvimento
              do projeto Open Source Bank por meio da FASTEF</p>
          </div>
        </div>

        <div className="cardsHabilidades">
          <img src={iconMKT} />

          <div>
            <h3>Estágio</h3>
            <p>Experiência como Dev Front-End no meio industrial através da Grendene S/A.</p>
          </div>
        </div>
      </div>
    </section>
  );
}