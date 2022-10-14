import React from "react";
import { useParams } from "react-router-dom";
import recettes from "../__mocks__/dataRecette.json";

import Rating from "../components/Rating";

const Singlerecette = () => {
  const { recetteId } = useParams();
  const recette = recettes.find((recette) => recette.id === recetteId);
  const { title, rating, ingredient, instruction, description, pictures } =
    recette;

  return (
    <main className="singleproduct">
      <div className="singleproduct__informations">
        <h1 className="informations__title">{title}</h1>
        <Rating rating={rating} />
      </div>
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
