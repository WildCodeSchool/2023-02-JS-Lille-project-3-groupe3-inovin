import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import AnimationBottle from "../BouteilleAnimation/AnimationBottle";
import "./CardBottle.scss";

export default function CardBottle({ id }) {
  const [wineBottle] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/winebottle/${id}`)
      .then()
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="bootle-card">
      {wineBottle && (
        <div>
          <h3 className="name-bottle">{wineBottle.bottle_name}</h3>
          <AnimationBottle dataBottle={wineBottle} />
        </div>
      )}
    </div>
  );
}

CardBottle.propTypes = {
  id: PropTypes.string.isRequired,
};
