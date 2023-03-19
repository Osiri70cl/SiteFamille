import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = (props) => {
  const [rando, setRandos] = useState({});
  const { id, image } = props;

  useEffect(() => {
    const fetchRandos = async () => {
      try {
        const response = await axios.get(`https://www.famillep.remip-project.fr/wp-json/wp/v2/posts/${props.id}`);
        setRandos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRandos();
  }, [id]);


  return (
    <div className="thumb">
      <img src={image.source_url} alt="" className="thumb__img" />
      <div className="thumb__overlay"></div>
      <h2 className="thumb__title" dangerouslySetInnerHTML={{ __html: rando.title && rando.title.rendered }} />
    </div>
  );
};

export default Cards;
