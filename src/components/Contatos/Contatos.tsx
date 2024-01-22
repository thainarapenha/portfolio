import React from "react";
import "./styles.scss";
import imgContato from "../../assets/img/conversa.svg";

export const Contatos: React.FC = () => {
  return (
    <section className="containerContatos" id="contato">
      <div className="divTextContato">
        <h2>Entrar em <span>Contato</span></h2>
        <p>Gostou do meu trabalho? Vamos conversar!</p>

        <div className="divButton">
          <button className="buttonEContato">
            <a href="https://wa.me/5588992207818" target="blank">Enviar uma mensagem</a>
          </button>
          <button className="buttonEContato">
            <a href="https://github.com/thainarapenha" target="blank">Ver GitHub</a>
          </button>
          <button className="buttonEContato">
            <a href="https://www.linkedin.com/in/thainarapenha/" target="blank">Ver Linkedin</a>
          </button>
        </div>
      </div>


      <div>
        <img src={imgContato} />
      </div>
    </section>
  );
}