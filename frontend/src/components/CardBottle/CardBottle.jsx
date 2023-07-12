import React from "react";
import PropTypes from "prop-types";
import AnimationBottle from "../BouteilleAnimation/AnimationBottle";
import "./CardBottle.scss";

export default function CardBottle({ wineBottleId, wineBottleName }) {
  return (
    <div className="bootle-card">
      {wineBottleId && (
        <div>
          <h3 className="name-bottle">{wineBottleName}</h3>
          <AnimationBottle id={wineBottleId} />
          {/* Intégration du composant AnimationBottle avec les données de la bouteille */}
        </div>
      )}
    </div>
  );
}
CardBottle.propTypes = {
  wineBottleId: PropTypes.string.isRequired,
  wineBottleName: PropTypes.string.isRequired,
};
