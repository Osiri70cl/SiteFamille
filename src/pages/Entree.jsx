import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Cards from "../components/Cards";
import recettes from "../__mocks__/dataRecette.json";

axios.get('https://www.famillep.remip-project.fr/wp-json/wp/v2/posts')
  .then(response => {
    console.log("it works") 
    console.log(response) 
  })
  .catch(error => {
    console.log(error) 
  });

const Recettes = () => {
  return (
    <section className="home__products">
      {recettes.map((recette) => {
        return (
          <article key={recette.id}>
            <Link to={`/recettes/${recette.id}`}>
              <Cards image={recette.cover} title={recette.title} />
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default Recettes;
