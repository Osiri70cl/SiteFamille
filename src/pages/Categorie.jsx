import React from 'react';
import { Link } from "react-router-dom";
import coverEntree from "../assets/img/entree.jpeg";
import coverPlat from "../assets/img/plat.jpg";
import coverDessert from "../assets/img/dessert.jpg";
import coverVin from "../assets/img/vin.webp";
import CardsCategories from "../components/CardsCategories";

const Categorie = () => {
  return (
    <section className="home__categorie">
        <article  className="home__article">
          <Link to={`/categorie/entree`}>
            <CardsCategories image={coverEntree} title="Entrée" />
          </Link>
        </article>
        <article  className="home__article">
          <Link to={`/categorie/plat`}>
            <CardsCategories image={coverPlat} title="Plat" />
          </Link>
        </article>
        <article  className="home__article">
          <Link to={`/categorie/dessert`}>
            <CardsCategories image={coverDessert} title="Dessert" />
          </Link>
        </article>
        <article  className="home__article">
          <Link to={`/categorie/vin`}>
            <CardsCategories image={coverVin} title="Vin" />
          </Link>
        </article>
        <article  className="home__article">
          <Link to={`/categorie/vin`}>
            <CardsCategories image={coverVin} title="Vin" />
          </Link>
        </article>
        <article  className="home__article">
          <Link to={`/categorie/vin`}>
            <CardsCategories image={coverVin} title="Vin" />
          </Link>
        </article>
    </section>
  );
};

export default Categorie;
