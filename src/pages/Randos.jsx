import React from "react";
import { Link } from "react-router-dom";

import Cards from "../components/Cards";
import randos from "../__mocks__/dataRando.json";

const Randos = () => {
  return (
    <section className="home__products">
      {randos.map((product) => {
        return (
          <article key={product.id}>
            <Link to={`/randos/${product.id}`}>
              <Cards image={product.cover} title={product.title} />
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default Randos;
