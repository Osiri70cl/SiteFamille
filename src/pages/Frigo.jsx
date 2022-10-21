import React from "react";
import { useState } from "react";

/////////////////
import Cards from "../components/Cards";
import recettes from "../__mocks__/dataRecette.json";

const Frigo = () => {
  const [diminution, setDiminution] = useState(false);

  const diminuer = () => {
    // Button begins to diminuer
    setDiminution(true);
  };
  return (
    <main className="main__frigo">
      <section className="recherche">
        <h2 className="recherche__title">Recherche</h2>
        <input type="text" className="recherche__text" />

        <h2 className="recherche__title">Catégories</h2>
        <div className="checkboxes">
          <input
            className="recherche__checkbox"
            type="checkbox"
            name="Entrée"
            id="entree"
          />
          <input
            className="recherche__checkbox"
            type="checkbox"
            name="Poisson"
            id="poisson"
          />
          <input
            className="recherche__checkbox"
            type="checkbox"
            name="Viande"
            id="viande"
          />
          <input
            className="recherche__checkbox"
            type="checkbox"
            name="Pâtes et Tartes Salées"
            id="tarte"
          />
          <input
            className="recherche__checkbox"
            type="checkbox"
            name="Dessert"
            id="dessert"
          />
          <input
            className="recherche__checkbox"
            type="checkbox"
            name="Vin"
            id="vin"
          />
        </div>
        <h2 className="recherche__title">Difficulté</h2>
        <div className="checkboxes">
          <input
            className="recherche__checkbox"
            type="checkbox"
            name="Commis"
            id="commis"
          />
          <input
            className="recherche__checkbox"
            type="checkbox"
            name="Chef de partie"
            id="partie"
          />
          <input
            className="recherche__checkbox"
            type="checkbox"
            name="Second de cuisine"
            id="second"
          />
          <input
            className="recherche__checkbox"
            type="checkbox"
            name="Chef"
            id="chef"
          />
        </div>
        <h2 className="recherche__title">Dans mon frigo</h2>

        <input type="text" className="recherche__text" />
        <input type="text" className="recherche__text" />
        <input type="text" className="recherche__text" />
        <input type="text" className="recherche__text" />
      </section>
      <section
        onClick={diminuer}
        className={diminution ? `toutesRecettesHalf` : `toutesRecettes`}
      >
        {recettes.map((recette) => {
          return (
            <article key={recette.id} className="article">
              <Cards image={recette.cover} title={recette.title} />
            </article>
          );
        })}
      </section>
      <section className="uneRecette">
        <h2>Ici sera affiché une recette</h2>
      </section>
    </main>
  );
};

export default Frigo;
