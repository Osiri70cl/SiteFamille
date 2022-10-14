import React from "react";
import { useParams } from "react-router-dom";
import randos from "../__mocks__/dataRando.json";

import Rating from "../components/Rating";
import Host from "../components/Host";
import Slider from "../components/Slider";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";

const Singlerando = () => {
  const { randoId } = useParams();
  const rando = randos.find((rando) => rando.id === randoId);
  const { title, location, rating, host, equipments, description, pictures } =
    rando;

  return (
    <main className="singleproduct">
      <Slider slides={pictures} />
      <div className="singleproduct__content">
        <div className="singleproduct__informations">
          <h1 className="singleproduct__title">{title}</h1>
          <p className="singleproduct__location">{location}</p>
          <div className="singleproduct__tags">
            {rando.tags.map((tag, index) => (
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

export default Singlerando;
