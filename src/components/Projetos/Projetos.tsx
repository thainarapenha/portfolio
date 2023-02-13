import React from "react";
import imgMeuLivro from "../../assets/img/meuLivro.png";
import imgAdoteAqui from "../../assets/img/adoteAqui.png";
import imgCursos from "../../assets/img/plataformaCursos.png";
import imgHomem from "../../assets/img/homem.svg";

export const Projetos: React.FC = () => {
  return (
    <section className="containerProjetos" id="projetos">
      <div className="divTituloProjetos">
        <img src={imgHomem}/>
        <h2>Deixei aqui alguns <span>projetos</span> que já fiz ou participei</h2>
      </div>

      <div className="divCardProjetos">
        <div className="CardProjetos">
          <h6>Meu Livro</h6>
          <a href="https://meu-livro-frontend.vercel.app/" target="_blank">
            <img src={imgMeuLivro} />
          </a>
        </div>
        <div className="CardProjetos">
          <h6>Adote Aqui</h6>
          <a href="https://thainarapenha.github.io/adoteaqui/" target="_blank">
            <img src={imgAdoteAqui} />
          </a>
        </div>
        <div className="CardProjetos">
          <h6>Plataforma de cursos</h6>
          <a href="https://thainarapenha.github.io/PlataformaCursos/" target="_blank">
            <img src={imgCursos} />
          </a>
        </div>
      </div>
    </section>
  );
}