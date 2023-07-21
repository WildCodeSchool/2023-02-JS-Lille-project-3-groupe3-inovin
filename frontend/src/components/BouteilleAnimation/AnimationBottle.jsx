// Importation des modules et bibliothèques nécessaires
import React, { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./AnimationBottle.scss"; // Importation du fichier de style pour l'animation de la bouteille
import UserContext from "../../contexts/UserContext"; // Importation du contexte utilisateur

// Définition du composant AnimationBottle avec la prop 'id'
function AnimationBottle({ id }) {
  // Déclaration des états locaux avec useState
  const [progress, setProgress] = useState(0); // L'état de la progression de la barre
  const [fixedProgress, setFixedProgress] = useState(null); // L'état de la progression fixée
  const [isLocked, setIsLocked] = useState(false); // L'état du verrouillage de la barre de progression
  const progressBarRef = useRef(null); // Référence à l'élément de la barre de progression
  const { user } = useContext(UserContext); // Récupération de l'utilisateur à partir du contexte
  const [userId, setUserId] = useState(); // L'état de l'ID de l'utilisateur
  const [isEditing, setIsEditing] = useState(false); // L'état de l'édition de la barre de progression
  const [editCompoRecipe, setEditCompoRecipe] = useState({
    percentage: 0,
  }); // L'état de la recette de composition en cours d'édition

  // useEffect pour effectuer une requête GET lors du chargement du composant
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        params: { account_id: `${user}` },
      })
      .then((response) => {
        const resultUserId = response.data[0]?.id;
        setUserId(resultUserId);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des détails de la recette de composition :",
          error
        );
      });
  }, []);

  // useEffect pour mettre en écoute l'événement de déplacement de la souris
  useEffect(() => {
    const handleMouseMove = (e) => {
      const progressBar = progressBarRef.current;
      const progressBarHeight = progressBar.offsetHeight;
      const maxProgress = 100;
      const { top } = progressBar.getBoundingClientRect();

      // Mise à jour de la progression uniquement si le verrouillage est désactivé et la progression fixée est nulle
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
  }, [isLocked]);

  // Gestion du clic sur la barre de progression
  const handleClick = () => {
    if (fixedProgress === null) {
      // Si la progression fixée est nulle, fixer la progression courante et activer le verrouillage
      setFixedProgress(progress);
      setIsLocked(true);
      // Effectuer une requête POST pour envoyer la progression au backend
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/compo_recipe`, {
          percentage: progress,
          wineBottle_id: id,
          user_account_ID: user,
          user_id: userId,
        })
        .then(() => {
          // console.log("Données postées :", {
          //   percentage: progress,
          //   wineBottle_id: id,
          //   user_account_ID: user,
          //   user_id: userId,
          // });
          setIsEditing(true);
          setFixedProgress(null);
        })
        .catch((error) => {
          console.error(
            "Une erreur s'est produite lors de l'envoi de la valeur de progression et de l'identifiant de la bouteille de vin !",
            error
          );
        })
        .finally(() => {
          // À la fin de la requête, désactiver le verrouillage
          setIsLocked(false);
        });
    } else {
      // Sinon, désactiver le verrouillage
      setIsLocked(false);
    }
  };

  // Gestion de l'appui sur la touche 'Entrée'
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  // Gestion du clic sur la barre de progression en mode édition
  const handleClickPut = () => {
    setIsLocked(false);

    if (fixedProgress === null) {
      // Si la progression fixée est nulle, fixer la progression courante et mettre à jour la recette de composition en cours d'édition
      setFixedProgress(progress);
      setEditCompoRecipe({ percentage: progress });

      // Effectuer une requête PUT pour mettre à jour la recette de composition
      axios
        .put(
          `${import.meta.env.VITE_BACKEND_URL}/compo_recipe`,
          editCompoRecipe,
          {
            params: {
              wineBottle_id: id,
              user_id: userId,
              user_account_ID: user,
            },
          }
        )
        .then(() => {
          // console.log("Données mises à jour :", {
          //   percentage: progress,
          //   wineBottle_id: id,
          //   user_id: userId,
          //   user_account_ID: user,
          // });
          setIsLocked(true);
          setIsEditing(false);
        })
        .catch((error) => {
          console.error(
            "Une erreur s'est produite lors de la modification de la valeur de progression",
            error
          );
        });
    } else {
      // Sinon, désactiver le verrouillage
      setIsLocked(false);
    }
  };

  return (
    <div className="bottle-animation">
      {isEditing ? (
        // Affichage de la barre de progression en mode édition
        <div
          className={`progress-bar ${isLocked ? "locked" : ""}`}
          id="progressbar"
          role="button"
          tabIndex="0"
          onClick={handleClickPut}
          onKeyDown={handleKeyDown}
          ref={progressBarRef}
        >
          <div
            className="progress-bar-inner"
            style={{ height: `${progress}%` }}
          >
            {fixedProgress !== null
              ? `${fixedProgress.toFixed(0)}%`
              : `${progress.toFixed(0)}%`}
          </div>
        </div>
      ) : (
        // Affichage de la barre de progression en mode non édition
        <div
          className={`progress-bar ${isLocked ? "locked" : ""}`}
          id="progressbar"
          role="button"
          tabIndex="0"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          ref={progressBarRef}
        >
          <div
            className="progress-bar-inner"
            style={{ height: `${progress}%` }}
          >
            {fixedProgress !== null
              ? `${fixedProgress.toFixed(0)}%`
              : `${progress.toFixed(0)}%`}
          </div>
        </div>
      )}
    </div>
  );
}

// Spécification des types des props attendues par le composant
AnimationBottle.propTypes = {
  id: PropTypes.number.isRequired, // La prop 'id' doit être un nombre requis
};

// Exportation du composant AnimationBottle
export default AnimationBottle;
