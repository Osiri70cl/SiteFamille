import React from "react";
import { useParams } from "react-router-dom";
import photos from "../__mocks__/dataPhoto.json";

import Slider from "../components/Slider";

const Singlephoto = () => {
  const { photoId } = useParams();
  const photo = photos.find((photo) => photo.id === photoId);
  const { pictures } = photo;

  return (
    <main className="singlephoto">
      <Slider slides={pictures} />
    </main>
  );
};

export default Singlephoto;
