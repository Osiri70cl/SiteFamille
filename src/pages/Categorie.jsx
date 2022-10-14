import React from "react";
import { Link } from "react-router-dom";
import coverEntree from "../assets/img/entree.jpeg";
import coverPlat from "../assets/img/plat.jpg";
import coverDessert from "../assets/img/dessert.jpg";
import coverVin from "../assets/img/vin.webp";

import Cards from "../components/Cards";

const Categorie = () => {
  return (
    <section className="home__categorie">
      <article className="home__article">
        <Link to={`/entree`}>
          <Cards image={coverEntree} title="Entree" />
        </Link>
      </article>
      <article className="home__article">
        <Link to={`/plat`}>
          <Cards image={coverPlat} title="Plat" />
        </Link>
      </article>
      <article className="home__article">
        <Link to={`/dessert`}>
          <Cards image={coverDessert} title="Dessert" />
        </Link>
      </article>
      <article className="home__article">
        <Link to={`/vin`}>
          <Cards image={coverVin} title="Vin" />
        </Link>
      </article>
    </section>
  );
};

export default Categorie;
