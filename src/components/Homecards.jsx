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
          <div className="card__bg__img">
            <img src="./photoPlatCard.png" alt="plat du jour" />
          </div>
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
          <div className="card__bg__img">
            <img src="./photoFruitCard.png" alt="fruit du jour" />
          </div>
        </div>
      </Link>
      <Link to="/randonnee">
        <div className="card">
          <div className="card__bg__img">
            <img src="./photoRandoCard.png" alt="rando" />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Homecards;
