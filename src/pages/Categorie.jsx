import React from 'react';
import { Link } from "react-router-dom";
import coverEntree from "../assets/img/entree.jpeg";
import coverPlat from "../assets/img/plat.jpg";
import coverTarte from "../assets/img/tartes.jpg";
import coverPoisson from "../assets/img/poisson.jpg";
import coverSauce from "../assets/img/sauce.jpg";
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
          <Link to={`/categorie/viande`}>
            <CardsCategories image={coverPlat} title="Viande" />
          </Link>
        </article>
        <article  className="home__article">
          <Link to={`/categorie/pates-tartes-sale`}>
            <CardsCategories image={coverTarte} title="Pâtes et Tartes Salés" />
          </Link>
        </article>
        <article  className="home__article">
          <Link to={`/categorie/poisson`}>
            <CardsCategories image={coverPoisson} title="Poisson" />
          </Link>
        </article>
        <article  className="home__article">
          <Link to={`/categorie/sauce-et-epices`}>
            <CardsCategories image={coverSauce} title="Sauces et Epices" />
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
    </section>
  );
};

export default Categorie;
