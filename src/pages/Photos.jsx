import React from "react";
import { Link } from "react-router-dom";

import Cards from "../components/Cards";
import photos from "../__mocks__/dataPhoto.json";

const Photos = () => {
  return (
    <section className="home__products">
      {photos.map((product) => {
        return (
          <article key={product.id}>
            <Link to={`/photos/${product.id}`}>
              <Cards image={product.cover} title={product.title} />
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default Photos;
