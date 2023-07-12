import React, { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./AnimationBottle.scss";
import UserContext from "../../contexts/UserContext";

function AnimationBottle({ id }) {
  const [progress, setProgress] = useState(0); // État pour gérer la progression
  const [fixedProgress, setFixedProgress] = useState(null); // État pour stocker la progression fixée
  const [isLocked, setIsLocked] = useState(false); // État pour indiquer si la progression est verrouillée
  // const [wineBottleId] = useState(null); // État pour stocker l'ID de la bouteille de vin
  const progressBarRef = useRef(null); // Référence à l'élément de la barre de progression pour ne pas scroller sur body entier

  const { user } = useContext(UserContext); // account_id of current user from inscription page, you can use it for update database
  // stock userId after user creation by post method
  const [userId, setUserId] = useState();
  // Effectuer la requête GET pour obtenir wineBottle_id depuis la table compo_recipe
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        params: { account_id: `${user}` },
      })
      .then((response) => {
        // console.log(user);
        // console.log(response);
        const resultUserId = response.data[0]?.id;
        setUserId(resultUserId);
      })
      .catch((error) => {
        console.error("Error retrieving composition recipe details:", error);
      });
  }, []);

  useEffect(() => {
    // Écouteur d'événement pour la souris
    const handleMouseMove = (e) => {
      const progressBar = progressBarRef.current;
      const progressBarHeight = progressBar.offsetHeight;
      const progressBarWidth = progressBar.offsetWidth;
      const { top, left } = progressBar.getBoundingClientRect();
      const maxProgress = 100;
      // progressBar : référence de la barre de progression à partir de progressBarRef.current. La référence est stockée dans la variable progressBar
      // progressBarHeight : hauteur de la barre de progression à l'aide de progressBar.offsetHeight. La hauteur est stockée dans la variable progressBarHeight
      // { top } : Cela déstructure les propriétés top de la valeur retournée par progressBar.getBoundingClientRect(). La méthode getBoundingClientRect() renvoie un objet contenant des informations sur les dimensions et la position d'un élément par rapport à la fenêtre. déstructuration, extraire valeur de top et socker dans variable top.
      if (!isLocked && fixedProgress === null) {
        // Récupération de la position verticale de la souris par rapport à la barre de progression
        const mouseY = e.clientY - top;
        const mouseX = e.clientX - left;
        // calcul pour déterminer le nouvel état de progression en fonction de la position verticale de la souris par rapport à la barre de progression et en respectant le maxProgress
        if (mouseX >= 0 && mouseX <= progressBarWidth) {
          const newProgress = Math.min(
            Math.max(
              ((progressBarHeight - mouseY) / progressBarHeight) * maxProgress,
              0
            ),
            maxProgress
          );
          setProgress(newProgress); // Mettre à jour l'état avec la nouvelle progression
        }
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
          user_account_ID: user,
          user_id: userId,
          wineBottle_id: id,
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
AnimationBottle.propTypes = {
  id: PropTypes.number.isRequired,
};
