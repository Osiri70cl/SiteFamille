import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = (props) => {
  const [post, setPost] = useState({});
  const { id, image } = props;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://www.famillep.remip-project.fr/wp-json/wp/v2/posts/${props.id}`);
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [id]);


  return (
    <div className="thumb">
      <img src={image.source_url} alt="" className="thumb__img" />
      <div className="thumb__overlay"></div>
      <h2 className="thumb__title">{post.title && post.title.rendered}</h2>
    </div>
  );
};

export default Cards;
