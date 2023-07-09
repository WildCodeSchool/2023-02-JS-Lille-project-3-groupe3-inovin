import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./AnimationBottle.scss";

function AnimationBottle() {
  const [progress, setProgress] = useState(0);
  const [fixedProgress, setFixedProgress] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [wineBottleId, setWineBottleId] = useState(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    // Effectuer la requête GET pour obtenir wineBottle_id depuis la table compo_recipe
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/compo_recipe`)
      .then((response) => {
        const { wineBottle_id } = response.data;
        setWineBottleId(wineBottle_id);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération de wineBottle_id :",
          error
        );
      });
  }, []);

  useEffect(() => {
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

        setProgress(newProgress);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isLocked, fixedProgress]);

  const handleClick = () => {
    if (fixedProgress === null) {
      setFixedProgress(progress);
      setIsLocked(true);

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
      setIsLocked(false);
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
          {fixedProgress !== null
            ? `${fixedProgress.toFixed(0)}%`
            : `${progress.toFixed(0)}%`}
        </div>
      </div>
      <h3 className="h3-pourcentage">
        {fixedProgress !== null ? `${fixedProgress.toFixed(0)}%` : ""}
      </h3>
    </div>
  );
}

export default AnimationBottle;
