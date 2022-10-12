import React from "react";

const Mainbanner = ({ image, title }) => {
  return (
    <div className="thumb">
      <img src={image} alt="" className="thumb__img" />
      <div className="thumb__overlay"></div>
      <h2 className="thumb__title">
        Bienvenue sur notre site de loisirs familliaux
      </h2>
    </div>
  );
};

export default Mainbanner;
