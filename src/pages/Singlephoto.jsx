import React from "react";
import { useParams } from "react-router-dom";
import photos from "../__mocks__/dataPhoto.json";

import Rating from "../components/Rating";
import Host from "../components/Host";
import Slider from "../components/Slider";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";

const Singlephoto = () => {
  const { photoId } = useParams();
  const photo = photos.find((photo) => photo.id === photoId);
  const { title, location, rating, host, equipments, description, pictures } =
    photo;

  return (
    <main className="singleproduct">
      <Slider slides={pictures} />
      <div className="singleproduct__content">
        <div className="singleproduct__informations">
          <h1 className="singleproduct__title">{title}</h1>
          <p className="singleproduct__location">{location}</p>
          <div className="singleproduct__tags">
            {photo.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="singleproduct__rating-and-host">
          <Rating rating={rating} />
          <Host host={host} />
        </div>
      </div>
      <div className="singleproduct__dropdowns">
        <Collapse title="description" content={description} />
        <Collapse title="équipement" content={equipments} />
      </div>
    </main>
  );
};

export default Singlephoto;
