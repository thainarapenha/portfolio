import React from "react";
import "../../styles/global.scss";
import { BotaoContato } from "../BotaoContato/BotaoContato";
import imgContato from "../../assets/img/conversa.svg";

export const Contatos: React.FC = () => {
  return(
    <section className="containerContatos">
      <div className="divTextContato">
        <h3>Vamos tirar seu <span>sonho</span> do papel??</h3>
        <p>Acompanhe de perto do desenvolvimento do seu site e leve seus planos ao próximo nível.</p>
        <BotaoContato/>
      </div>
      <div>
        <img src={imgContato}/>
      </div>
    </section>
  );
}