import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./AnimationBottle.scss";

function AnimationBottle() {
  const [progress, setProgress] = useState(0); // État pour gérer la progression
  const [fixedProgress, setFixedProgress] = useState(null); // État pour stocker la progression fixée
  const [isLocked, setIsLocked] = useState(false); // État pour indiquer si la progression est verrouillée
  const progressBarRef = useRef(null); // Référence à l'élément de la barre de progression pour ne pas scroller sur body entier

  useEffect(() => {
    // Écouteur d'événement pour la souris
    const handleMouseMove = (e) => {
      const progressBar = progressBarRef.current;
      const progressBarHeight = progressBar.offsetHeight;
      const { top } = progressBar.getBoundingClientRect();
      const maxProgress = 100;

      // progressBar : référence de la barre de progression à partir de progressBarRef.current. La référence est stockée dans la variable progressBar

      // progressBarHeight : hauteur de la barre de progression à l'aide de progressBar.offsetHeight. La hauteur est stockée dans la variable progressBarHeight

      // { top } : Cela déstructure les propriétés top de la valeur retournée par progressBar.getBoundingClientRect(). La méthode getBoundingClientRect() renvoie un objet contenant des informations sur les dimensions et la position d'un élément par rapport à la fenêtre. déstructuration, extraire valeur de top et socker dans variable top.

      if (!isLocked && fixedProgress === null) {
        // Récupération de la position verticale de la souris par rapport à la barre de progression
        const mouseY = e.clientY - top;
        // calcul pour déterminer le nouvel état de progression en fonction de la position verticale de la souris par rapport à la barre de progression et en respectant le maxProgress
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

  // ...
  const progressRef = useRef(null); // Référence pour stocker la valeur de progress lors du clic

  // ...

  const handleClick = () => {
    if (fixedProgress === null) {
      progressRef.current = progress; // Stocker la valeur actuelle de progress

      setFixedProgress(progress); // Fixer la progression
      setIsLocked(true); // Verrouiller la progression

      // Effectuer la requête POST pour envoyer la valeur progress et wineBottleId
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/compo_recipe`, {
          percentage: progressRef.current, // Utiliser la valeur stockée de progress
          user_id: 3,
          wineBottle_id: 1,
          user_account_ID: 1,
        })
        .then()
        .catch((error) => {
          console.error(
            "Une erreur s'est produite lors de l'envoi des données :",
            error
          );
        });
    } else {
      setIsLocked(false);
    }
  };
  // ...

  // obligation pour passer le commit (enter sur clavier)
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
        onKeyDown={handleKeyDown} // obligation clavier (voir ci dessus)
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
