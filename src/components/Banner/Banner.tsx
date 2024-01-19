import React, { useEffect, useState } from "react";
import "./styles.scss";

export const Banner: React.FC = () => {
  const [text, setText] = useState('');
  const phrases = ['DEV FRONT-END COM FOCO NA EXPERIÊNCIA DE USUÁRIO'];
  const delay = 100;

  useEffect(() => {
    let charIndex = 0;

    const type = () => {
      const currentPhrase = phrases[0];

      if (charIndex <= currentPhrase.length) {
        setText((prevText) => currentPhrase.slice(0, charIndex));
        charIndex++;
        setTimeout(type, delay);
      }
    };

    type();
  }, []);

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
        <h1>THAINARA PENHA</h1>
        <h2 className="element">{text}</h2>

        <div className="divButton">
          <button className="buttonCV" onClick={onButtonClick}>
            Baixe meu currículo completo
          </button>

          <button className="buttonGit">
            Ver GitHub
          </button>
        </div>
      </div>
    </section>
  );
}