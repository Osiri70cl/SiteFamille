import React from "react";
import { Link } from "react-router-dom";

const Homecards = () => {
  return (
    <article>
      <Link to="/recettes">
        <div className="card">
          <div className="card__bg__white">
            <h2 className="card__title">Cuisine du monde</h2>
          </div>
        </div>
      </Link>
      <Link to="/latest">
        <div className="card">
          <div className="card__bg__img platJour"></div>
        </div>
      </Link>
      <Link to="/frigo">
        <div className="card">
          <div className="card__bg__green">
            <h2 className="card__title">Qu'est ce qu'on mange ce soir ?</h2>
          </div>
        </div>
      </Link>
      <Link to="/photos">
        <div className="card">
          <div className="card__bg__img fruit"></div>
        </div>
      </Link>
      <Link to="/randonnee">
        <div className="card">
          <div className="card__bg__img rando"></div>
        </div>
      </Link>
    </article>
  );
};

export default Homecards;
