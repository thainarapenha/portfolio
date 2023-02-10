import React from "react";
import imgBanner from "../../assets/img/banner.svg";

export const Banner: React.FC = () => {
  return(
    <section className="sectionBanner">
      <div className="banner">
        <div className="divText">
          <h1>Construção digital do seu site, portfólio e <a style={{color: "#5E3AEE"}}>muito mais!</a></h1>
          <p>Dê uma nova cara ao seu negócio. Sites com um ótimo visual, funcionalidades e tecnologia.</p>
          <button>Faça um orçamento gratuito</button>
        </div>

        <div className="divImg">
          <img src={imgBanner}/>
        </div>
      </div>
    </section>
  );
}