import React from "react";
import { Link } from "react-router-dom";

import Cards from "../components/Cards";
import recettes from "../__mocks__/dataRecette.json";

const Categorie = () => {
  return (
    <section className="home__products">
      {recettes.map((recette) => {
        return (
          <article key={recette.id}>
            <Link to={`/recettes`}>
              <Cards image={recette.cover} title={recette.title} />
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default Categorie;
