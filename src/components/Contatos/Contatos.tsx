import React from "react";
import "../../styles/global.scss";
import imgContato from "../../assets/img/conversa.svg";

export const Contatos: React.FC = () => {
  return (
    <section className="containerContatos" id="contato">
      <div className="divTextContato">
        <h3>Entrar em <span>Contato</span></h3>
        <p>Gostou do meu trabalho? Vamos conversar!</p>

        <div className="divButton">
          <button className="buttonEContato">
            Enviar uma mensagem
          </button>
          <button className="buttonEContato">
            Ver GitHub
          </button>
          <button className="buttonEContato">
            Ver Linkedin
          </button>
        </div>
      </div>


      <div>
        <img src={imgContato} />
      </div>
    </section>
  );
}