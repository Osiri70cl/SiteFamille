import React from "react";
import { Link } from "react-router-dom";

import Cards from "../components/Cards";
import photos from "../__mocks__/dataPhoto.json";

const Photos = () => {
  return (
    <section className="home__photos">
      <h1 className="home__title">Partageons nos photos !</h1>
      {photos.map((photo) => {
        return (
          <article key={photo.id} className="home__article">
            <Link to={`/photos/${photo.id}`}>
              <Cards image={photo.cover} title={photo.title} />
            </Link>
          </article>
        );
      })}
      <p className="home__text">
        {" "}
        Vous trouverez, en cliquant sur la photo, toutes nos plus belles photos
        !! <br />
        Vous voulez nous montrer les votres ? N'hésitez pas à contacter le
        webmaster afin de lui faire savoir !
      </p>
    </section>
  );
};

export default Photos;
