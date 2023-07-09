import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./AnimationBottle.scss";

function AnimationBottle() {
  // État pour gérer la progression
  const [progress, setProgress] = useState(0);
  const [fixedProgress, setFixedProgress] = useState(null); // État pour stocker la progression fixée
  const [isLocked, setIsLocked] = useState(false); // État pour indiquer si la progression est verrouillée
  const [wineBottleId, setWineBottleId] = useState(null); // État pour stocker l'ID de la bouteille de vin
  const progressBarRef = useRef(null); // Référence à l'élément de la barre de progression

  useEffect(() => {
    // Effectuer la requête GET pour obtenir wineBottle_id depuis la table compo_recipe
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/compo_recipe`)
      .then((response) => {
        const { wineBottle_id } = response.data;
        setWineBottleId(wineBottle_id); // Mettre à jour l'état avec l'ID de la bouteille de vin
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération de wineBottle_id :",
          error
        );
      });
  }, []);

  useEffect(() => {
    // Écouteur d'événement pour la souris
    const handleMouseMove = (e) => {
      const progressBar = progressBarRef.current;
      const progressBarHeight = progressBar.offsetHeight;
      const { top } = progressBar.getBoundingClientRect();
      const maxProgress = 100;

      if (!isLocked && fixedProgress === null) {
        const mouseY = e.clientY - top;
        const newProgress = Math.min(
          Math.max(
            ((progressBarHeight - mouseY) / progressBarHeight) * maxProgress,
            0
          ),
          maxProgress
        );

        setProgress(newProgress); // Mettre à jour l'état avec la nouvelle progression
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isLocked, fixedProgress]);

  const handleClick = () => {
    if (fixedProgress === null) {
      setFixedProgress(progress); // Fixer la progression
      setIsLocked(true); // Verrouiller la progression

      // Effectuer la requête POST pour envoyer la valeur progress et wineBottleId
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/compo_recipe`, {
          percentage: progress,
          wineBottle_id: wineBottleId,
        })
        .then()
        .catch((error) => {
          console.error(
            "Une erreur s'est produite lors de l'envoi de la valeur progress et wineBottleId!",
            error
          );
        });
    } else {
      setIsLocked(false); // Déverrouiller la progression
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="bottle-animation">
      <div
        className={`progress-bar ${isLocked ? "locked" : ""}`}
        id="progressbar"
        role="button"
        tabIndex="0"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        ref={progressBarRef}
      >
        <div className="progress-bar-inner" style={{ height: `${progress}%` }}>
          {/* Affichage de la progression fixée ou en cours */}
          {fixedProgress !== null
            ? `${fixedProgress.toFixed(0)}%`
            : `${progress.toFixed(0)}%`}
        </div>
      </div>
      <h3 className="h3-pourcentage">
        {/* Affichage de la progression fixée */}
        {fixedProgress !== null ? `${fixedProgress.toFixed(0)}%` : ""}
      </h3>
    </div>
  );
}

export default AnimationBottle;
