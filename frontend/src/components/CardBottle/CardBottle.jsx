import React from "react";
import PropTypes from "prop-types";
import AnimationBottle from "../BouteilleAnimation/AnimationBottle";
import "./CardBottle.scss";

export default function CardBottle({ wineBottleId, wineBottleName }) {
  return (
    <div className="bootle-card">
      {wineBottleId && (
        <div className="contenair-card-bottle">
          <h3 className="name-bottle">{wineBottleName}</h3>
          <AnimationBottle id={wineBottleId} />
        </div>
      )}
    </div>
  );
}
CardBottle.propTypes = {
  wineBottleId: PropTypes.number.isRequired,
  wineBottleName: PropTypes.string.isRequired,
};
