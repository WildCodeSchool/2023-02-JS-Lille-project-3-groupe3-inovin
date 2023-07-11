import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import AnimationBottle from "../BouteilleAnimation/AnimationBottle";
import "./CardBottle.scss";

export default function CardBottle({ id }) {
  const [wineBottle, setWineBottle] = useState(null); // État local pour stocker les données de la bouteille de vin

  useEffect(() => {
    // useEffect pour effectuer la requête HTTP lors du montage du composant
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/winebottle/${id}`) // Endpoint pour obtenir l'enregistrement de la table wineBottle correspondant à l'ID
      .then((response) => {
        setWineBottle(response.data); // Mise à jour de l'état avec les données reçues de la requête
      })
      .catch((error) => {
        console.error(error); // Affichage des éventuelles erreurs dans la console
      });
  }, [id]);

  return (
    <div className="bootle-card">
      {wineBottle && (
        <div>
          <h3 className="name-bottle">{wineBottle.bottle_name}</h3>
          <AnimationBottle dataBottle={wineBottle} />
          {/* Intégration du composant AnimationBottle avec les données de la bouteille */}
        </div>
      )}
    </div>
  );
}
CardBottle.propTypes = {
  id: PropTypes.string.isRequired,
};
