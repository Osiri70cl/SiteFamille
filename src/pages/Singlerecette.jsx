import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import recettes from "../__mocks__/dataRecette.json";

import Rating from "../components/Rating";
import Dictionnaire from "../components/Dictionnaie";
// import Mesure from "../components/Mesure";

const Singlerecette = () => {
  const { recetteId } = useParams();
  const recette = recettes.find((recette) => recette.id === recetteId);
  const { title, rating, ingredient, instruction, description, pictures } =
    recette;

  // Pour affichage "modal"

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <main className="singleproduct">
      <div className="singleproduct__informations">
        <h1 className="informations__title">{title}</h1>
        <Rating rating={rating} />
      </div>
      <div className="singleproduct__modal">
        <button className="singleproduct__button" onClick={handleClick}>
          Dictionnaire culinaire
        </button>
        
        {/* <button className="singleproduct__button" onClick={handleClick}>
          mesures
        </button>
        {isShown && <Mesure />} */}
      </div>
      {isShown && <Dictionnaire />}
      <div className="singleproduct__content">
        <div className="singleproduct__text">{description}</div>
        <img src={pictures} alt="" className="singleproduct__img" />
        <div className="singleproduct__text">{ingredient}</div>
        <div className="singleproduct__text">{instruction}</div>
      </div>
    </main>
  );
};

export default Singlerecette;
