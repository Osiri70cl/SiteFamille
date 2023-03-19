import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Singlerando = () => {
  const { randoId } = useParams();
  const [rando, setRando] = useState(null);

  useEffect(() => {
    const fetchRando = async () => {
      const response = await axios.get(
        `https://www.famillep.remip-project.fr/wp-json/wp/v2/posts/${randoId}`
      );
      setRando(response.data);
    };
    fetchRando();
  }, [randoId]);
  return (
    <main className="singleproduct">
            {rando ? (
        <>
          <div className="container">
            <h1 className="title" dangerouslySetInnerHTML={{ __html: rando.title.rendered }} />
            <div className="recipe">
              {/* <div className="recipe_featuredImageContainer">
                <img className="recipe_featuredImageContainer__img" src={recipe.better_featured_image.source_url} alt="" />
              </div> */}
              <div className="m-wysiwyg" dangerouslySetInnerHTML={{ __html: rando.content.rendered }} />
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Singlerando;
