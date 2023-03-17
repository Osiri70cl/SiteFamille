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

  console.log(recipe);

  return (
    <main className="singleproduct">
      {recipe ? (
        <>
          <h1>{recipe.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: recipe.content.rendered }} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Singlerecette;
