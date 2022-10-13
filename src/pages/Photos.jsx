import React from "react";
import { Link } from "react-router-dom";

import Cards from "../components/Cards";
import products from "../__mocks__/dataPhoto.json";

const Photos = () => {
  return (
    <section className="home__products">
      {products.map((product) => {
        return (
          <article key={product.id}>
            <Link to={`/products/${product.id}`}>
              <Cards image={product.cover} title={product.title} />
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default Photos;
