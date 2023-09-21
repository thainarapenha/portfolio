import React from "react";
import imgBanner from "../../assets/img/banner.svg";

export const Banner: React.FC = () => {
  const onButtonClick = () => {

    fetch('CV+Thainara+Penha.pdf').then(response => {
      response.blob().then(blob => {

        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'CV+Thainara+Penha.pdf';
        alink.click();
      })
    })
  }

  return (
    <section className="sectionBanner">
      <div className="banner">
        <div className="divText">
          <p>Oi, meu nome é</p>
          <h1>Thainara Penha</h1>
          <p>Convido você para conhecer mais sobre meu trabalho como <span>Dev Front-End</span></p>

          <div className="divButton">
            <button className="buttonCV" onClick={onButtonClick}>
              Baixe meu currículo completo
            </button>
            
            <button className="buttonContato">
              Ver GitHub
            </button>
          </div>
        </div>

        <div className="divImg">
          <img src={imgBanner} />
        </div>
      </div>
    </section>
  );
}