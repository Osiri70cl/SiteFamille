import React from "react";
import { Link } from "react-router-dom";

const Homecards = () => {
  return (
    <article>
      <Link to="/categorie">
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
      <Link to="/photo">
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
