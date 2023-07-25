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

  const [clickCounter, setClickCounter] = useState(0);

  const [percenStyle, setPercenStyle] = useState({}); // style du percentage au click, état initial

  const newStyle = {
    backgroundColor: "grey",
    width: "10vw",
    borderRadius: "6px",
    padding: "8px 4px 0px 5px",
    color: "#292929",
    boxShadow: "inset 2px 2px 4px rgba(0,0,0,1)",
  };
  const secondStyle = {
    width: "10vw",
    borderRadius: "6px",
    padding: "8px 4px 0px 5px",
    color: "white",
    boxShadow: "none",
  };
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
      // dis
      const progressBarWidth = progressBar.offsetWidth;
      const maxProgress = 100;
      const { top, left } = progressBar.getBoundingClientRect();

      // Mise à jour de la progression uniquement si le verrouillage est désactivé et la progression fixée est nulle
      if (!isLocked && fixedProgress === null) {
        const mouseY = e.clientY - top;
        const mouseX = e.clientX - left;

        if (mouseX >= 0 && mouseX <= progressBarWidth) {
          const newProgress = Math.min(
            Math.max(
              ((progressBarHeight - mouseY) / progressBarHeight) * maxProgress,
              0
            ),
            maxProgress
          );

          setProgress(newProgress);
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isLocked, fixedProgress]);

  const handleFirstClick = () => {
    setPercenStyle(newStyle);
    setClickCounter((prevClickCounter) => {
      // Mettre à jour les états immédiatement en fonction de l'état précédent (prevClickCounter)

      const newClickCounter = prevClickCounter + 1;

      const newIsLocked = true;

      // console.log(`clickCounter firstclick : ${newClickCounter}`);

      // console.log(`isLocked firstclick : ${newIsLocked}`);

      // Mettre à jour les états immédiatement

      setIsLocked(newIsLocked);

      return newClickCounter;
    });

    if (fixedProgress === null) {
      setFixedProgress(progress);

      // Effectuer une requête POST pour envoyer la progression au backend

      axios

        .post(`${import.meta.env.VITE_BACKEND_URL}/compo_recipe`, {
          percentage: progress,

          wineBottle_id: id,

          user_account_ID: user,

          user_id: userId,
        })

        .then(() => {
          /* console.log("Données postées :", {
            percentage: progress,

            wineBottle_id: id,

            user_account_ID: user,

            user_id: userId,
          }); */

          setFixedProgress(null);
        })

        .catch((error) => {
          console.error(
            "Une erreur s'est produite lors de l'envoi de la valeur de progression et de l'identifiant de la bouteille de vin !",

            error
          );
        });
    } else {
      // Sinon, désactiver le verrouillage

      setIsLocked(false);
    }
  };

  // Gestion de l'appui sur la touche 'Entrée'

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleFirstClick();
    }
  };

  const handleSecondClick = () => {
    setPercenStyle(secondStyle);
    setClickCounter((prevClickCounter) => {
      // Mettre à jour les états immédiatement en fonction de l'état précédent (prevClickCounter)

      const newClickCounter = prevClickCounter + 1;

      const newIsLocked = false;

      // console.log(`clickCounter secondclick : ${newClickCounter}`);

      // console.log(`isLocked secondclick : ${newIsLocked}`);

      // Mettre à jour les états immédiatement

      setIsLocked(newIsLocked);

      return newClickCounter;
    });
  };

  const handleThirdClick = () => {
    setPercenStyle(newStyle);
    setClickCounter((prevClickCounter) => {
      // Mettre à jour les états immédiatement en fonction de l'état précédent (prevClickCounter)

      const newClickCounter = prevClickCounter + 1;

      const newIsLocked = true;

      // console.log(`clickCounter thirdclick : ${newClickCounter}`);

      // console.log(`isLocked thirdclick : ${newIsLocked}`);

      // Mettre à jour les états immédiatement

      setIsLocked(newIsLocked);

      return newClickCounter;
    });

    if (fixedProgress === null) {
      // Si la progression fixée est nulle, fixer la progression courante et mettre à jour la recette de composition en cours d'édition

      setFixedProgress(progress);

      // Effectuer une requête PUT pour mettre à jour la recette de composition

      axios

        .put(
          `${import.meta.env.VITE_BACKEND_URL}/compo_recipe`,

          { percentage: progress }, // Utilisez directement la valeur mise à jour de 'progress' ici

          {
            params: {
              wineBottle_id: id,

              user_id: userId,

              user_account_ID: user,
            },
          }
        )

        .then(() => {
          /* console.log("Données mises à jour :", {
            percentage: progress,

            wineBottle_id: id,

            user_id: userId,

            user_account_ID: user,
          }); */
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
      {clickCounter === 0 ? (
        <div
          className={`progress-bar ${isLocked ? "locked" : ""}`}
          id="progressbar"
          role="button"
          tabIndex="0"
          onClick={handleFirstClick}
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
            <div className="water-fill">
              <div className="water-fill water-fill2" />
            </div>
          </div>
        </div>
      ) : clickCounter === 1 ? (
        <div
          className={`progress-bar ${isLocked ? "locked" : ""}`}
          id="progressbar"
          role="button"
          tabIndex="0"
          onClick={handleSecondClick}
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
      ) : clickCounter === 2 ? (
        <div
          className={`progress-bar ${isLocked ? "locked" : ""}`}
          id="progressbar"
          role="button"
          tabIndex="0"
          onClick={handleThirdClick}
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
      ) : clickCounter === 3 ? (
        <div
          className={`progress-bar ${isLocked ? "locked" : ""}`}
          id="progressbar"
          role="button"
          tabIndex="0"
          onClick={handleThirdClick}
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
        <div
          className={`progress-bar ${isLocked ? "locked" : ""}`}
          id="progressbar"
          role="button"
          tabIndex="0"
          onClick={handleSecondClick}
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
      <div className="percentage-title" style={percenStyle}>
        {Math.round(progress)} %
      </div>
    </div>
  );
}

// Spécification des types des props attendues par le composant

AnimationBottle.propTypes = {
  id: PropTypes.number.isRequired, // La prop 'id' doit être un nombre requis
};

// Exportation du composant AnimationBottle

export default AnimationBottle;
