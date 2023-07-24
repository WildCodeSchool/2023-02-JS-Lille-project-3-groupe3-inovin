import axios from "axios";
import React, { useState } from "react";
import Apercu from "../Apercu/Apercu";
import "./NameRecipe.scss";

function NameRecipe() {
  const [inputNameRecipe, setInputNameRecipe] = useState({
    recipe_name: "",
  });
  const [posted, setPosted] = useState(false);
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
      .then(() => {
        setPosted(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      {!posted ? (
        <div className="input-name-recipe-container">
          <form className="form-name-recipe" onSubmit={handleSubmitNameRecipe}>
            <label className="label-name-recipe" htmlFor="label-name-recipe">
              <span>Choisir le nom du vin</span>
              <input
                className="input-name-recipe"
                type="text"
                placeholder="Nom du vin"
                name="recipe_name"
                value={inputNameRecipe.recipe_name}
                onChange={handleChangeInputNameRecipe}
              />
            </label>
            <button
              className="button-submit-recipe-name"
              id="WineName"
              type="submit"
            >
              <span>Création de la Recette</span>
            </button>
          </form>
        </div>
      ) : (
        <Apercu inputNameRecipe={inputNameRecipe} />
      )}
    </div>
  );
}

export default NameRecipe;
