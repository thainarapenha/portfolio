export const Habilidades: React.FC = () => {
  return (
    <section className="containerHabilidades">
      
      <h2>Quer um site? Combine diversas <span>habilidades</span> em seus projetos</h2>
      <div className="containerCards">
        {/* <div className="elementosHabilidade"> */}
          <div className="cardsHabilidades"></div>
          <div className="cardsHabilidades"></div>
          <div className="cardsHabilidades"></div>
          <div className="cardsHabilidades"></div>
          <div className="cardsHabilidades"></div>
        {/* </div> */}


        {/* <div className="cardsHabilidades">
          <h3>Criação de sites</h3>
          <p>Ainda não tem um site?? O que acha de criarmos o site da sua empresa,
            seu portfólio de trabalho ou até mesmo seu blog?</p>
        </div> */}
      </div>
      <button>Faça um orçamento gratuito</button>
    </section>
  );
}