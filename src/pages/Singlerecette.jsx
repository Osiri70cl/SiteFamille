import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Singlerecette = () => {
  const { recetteId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await axios.get(
        `https://www.famillep.remip-project.fr/wp-json/wp/v2/posts/${recetteId}`
      );
      setRecipe(response.data);
    };
    fetchRecipe();
  }, [recetteId]);


  return (
    <main className="singleRecipe">
      {recipe ? (
        <>
          <div className="container">
            <h1 className="title">{recipe.title.rendered}</h1>
            <div className="recipe">
              <div className="recipe_featuredImageContainer">
                <img className="recipe_featuredImageContainer__img" src={recipe.better_featured_image.source_url} alt="" />
              </div>
              <div className="m-wysiwyg" dangerouslySetInnerHTML={{ __html: recipe.content.rendered }} />
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Singlerecette;
