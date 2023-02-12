import React from "react";
import iconSITE from "../../assets/icons/site.svg";
import iconDESIGN from "../../assets/icons/design.svg";
import iconGESTAO from "../../assets/icons/gestao.svg";
import iconMKT from "../../assets/icons/site.svg";
import { BotaoContato } from "../BotaoContato/BotaoContato";

export const Habilidades: React.FC = () => {
  return (
    <section className="containerHabilidades">

      <h2>Quer um site? Combine diversas <span>habilidades</span> em seus projetos</h2>
      <div className="containerCards">
        <div className="cardsHabilidades">
          <img src={iconSITE} />
          <div>
            <h3>Criação de sites</h3>
            <p>Ainda não tem um site?? O que acha de criarmos o site da sua empresa,
              seu portfólio de trabalho ou até mesmo seu blog?</p>
          </div>
        </div>

        <div className="cardsHabilidades">
          <img src={iconDESIGN} />
          <div>
            <h3>Design</h3>
            <p>Deixe seu site de cara nova ou vamos desenvolver um do zero e do seu jeitinho.</p>
          </div>
        </div>

        <div className="cardsHabilidades">
          <img src={iconGESTAO} />
          <div>
            <h3>Gestão e estratégia</h3>
            <p>Não sabe bem como estruturar seu site?? Criamos um para melhor atender seus objetivos.</p>
          </div>
        </div>

        <div className="cardsHabilidades">
          <img src={iconMKT} />

          <div>
            <h3>Marketing e vendas</h3>
            <p>Seu foco é conseguir clientes? Construa seu site com técnicas de conversão em vendas.</p>
          </div>
        </div>
      </div>
      
      <BotaoContato/>
    </section>
  );
}