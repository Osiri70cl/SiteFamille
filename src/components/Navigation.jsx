import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="navigation">
      <ul className="partie__gauche">
        <NavLink
          exact
          to="/categorie"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li> Cuisine</li>
        </NavLink>
        <NavLink
          exact
          to="/randonnee"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>| Montagne</li>
        </NavLink>
        <NavLink
          exact
          to="/photo"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>| Photo</li>
        </NavLink>
      </ul>
      <ul className="partie__droite">
        <NavLink
          exact
          to="/"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/frigo"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Frigo</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Contact</li>
        </NavLink>
        <NavLink
          to="/connection"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Connexion</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Navigation;
