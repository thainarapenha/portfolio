import React from "react";
import imgMeuLivro from "../../assets/img/meuLivro.svg";
import imgAdoteAqui from "../../assets/img/adoteAqui.svg";
import imgCursos from "../../assets/img/plataformaCursos.png";
import imgHomem from "../../assets/img/homem.svg";

export const Projetos: React.FC = () => {
  return (
    <section className="containerProjetos" id="projetos">
      <div className="divTituloProjetos">
        <img src={imgHomem} />
        <h2>Deixei aqui alguns <span>projetos</span> que já fiz ou participei</h2>
      </div>

      <div className="divCardProjetos">
        <div className="CardProjetos">
          <div className="divDescricaoCard">
            <h6>App Filmes</h6>
            
            <div className="categoriaProjeto">
              <p>React Native</p>
              <p>TypeScript</p>
              <p>Styled-Component</p>
            </div>
            
            <p>Aplicação criada em React Native com Expo para um app de filmes onde o usuário poderá encontrar
              diversos filmes, pesquisar por nome e salvar seus favoritos.
            </p>
          </div>

          <a href="https://github.com/thainarapenha/app-filmes" target="_blank">
            <img src={imgMeuLivro} />
          </a>
        </div>

        <div className="CardProjetos">
          <a href="https://meu-livro-frontend.vercel.app/" target="_blank">
            <img src={imgMeuLivro} />
          </a>

          <div className="divDescricaoCard">
            <h6>Site E-Commmerce</h6>
            
            <div className="categoriaProjeto">
              <p>JavaScript</p>
              <p>React JS</p>
            </div>
            
            <p>Projeto desenvolvido para conclusão de módulo de curso. O site expõe diversos livros, onde o usuário pode
              pesquisar por nome, fazer login e adicionar livros ao carrinho.
            </p>
          </div>
        </div>
      </div>

      <h2>Outros <span>projetos</span></h2>

      <div className="sectionOutrosProjetos">
        <div className="CardOutrosProjetos">
          <a href="https://thainarapenha.github.io/adoteaqui/" target="_blank">
            <img src={imgAdoteAqui} />
          </a>
          <div className="divDescricaoOutrosCard">
            <h6>Adote Aqui</h6>
            <p>Landing page de uma site fictício de uma ONG de adoção de animais resgatados. Projeto 
              proposto para conclusão de módulo de curso voltado para HTML e CSS.
            </p>
          </div>
        </div>

        <div className="CardOutrosProjetos">
          <a href="https://thainarapenha.github.io/PlataformaCursos/" target="_blank">
            <img src={imgCursos} />
          </a>
          <div className="divDescricaoOutrosCard">
            <h6>Plataforma Cursos</h6>
            <p>Projeto desafio de um site de uma empresa de cursos fictícia para conclusão de módulo de curso 
              voltado para resolver um problema observado entre os membros da squad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}