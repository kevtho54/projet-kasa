import { useState } from "react";

import style from "../styles/modules/carrousel.module.css";
import Button from "../assets/Vector.svg";

export function Carrousel(props) {
  const { logement } = props;

  let [currentPicture, setCurrentPicture] = useState(0);

  const imageNext = () => {
    setCurrentPicture((currentPicture + 1) % logement.pictures.length); // j'utilise le modulo % de facon a ce que use state ne dépasse jamais le total de îctures.length
  };

  const imagePrevious = () => {
    setCurrentPicture(
      (currentPicture - 1 + logement.pictures.length) % logement.pictures.length
    );
  };

  if (logement.pictures.length <= 1) {
    return (
      <div className={style.contener_carrousel}>
        <img
          src={logement.pictures[0]}
          alt={logement.title.alt}
          className={style.img_carrousel}
        />
      </div>
    );
  }

  return (
    <div className={style.contener_carrousel}>
      {logement.pictures.map((picture, i) => (
        <img
          key={picture}
          src={picture}
          alt={logement.title}
          className={`${style.img} ${i === currentPicture ? style.show : ""}`} // pour que l'image sois visible, je lui attribue la clash show
        />
      ))}

      <div className={style.button_carrousel}>
        <img
          src={Button}
          alt="bouton précédent"
          className={style.btn_previous}
          onClick={imagePrevious}
        ></img>
        <img
          src={Button}
          alt="bouton suivant"
          className={style.btn_next}
          onClick={imageNext}
        ></img>
      </div>
      <div className={style.counter}>
        {currentPicture + 1}/{logement.pictures.length}
      </div>
    </div>
  );
}
