import axios from "axios";
import React, { useState } from "react";

function NameRecipe() {
  const [inputNameRecipe, setInputNameRecipe] = useState({
    recipe_name: "",
  });
  const handleChangeInputNameRecipe = (evt) => {
    setInputNameRecipe({
      ...inputNameRecipe,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleSubmitNameRecipe = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/recipe`, inputNameRecipe)
      .then()
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="input-name-recipe-container">
      <form className="form-name-recipe" onSubmit={handleSubmitNameRecipe}>
        <label className="label-name-recipe" htmlFor="label-name-recipe">
          <input
            className="input-name-recipe"
            type="text"
            placeholder="Nom du vin"
            name="recipe_name"
            value={inputNameRecipe.recipe_name}
            onChange={handleChangeInputNameRecipe}
          />
        </label>
        <button className="button-submit-name-recipe" type="submit">
          <span>Ajouter le Nom</span>
        </button>
      </form>
    </div>
  );
}

export default NameRecipe;
