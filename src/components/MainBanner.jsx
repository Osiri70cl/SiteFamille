import React from "react";

const Mainbanner = ({ image, title }) => {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner__img" />
      <div className="banner__overlay"></div>
      <h2 className="banner__title">
        Bienvenue sur notre site de loisirs familliaux
      </h2>
    </div>
  );
};

export default Mainbanner;
