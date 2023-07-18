import React, { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./AnimationBottle.scss";
import UserContext from "../../contexts/UserContext";

function AnimationBottle({ id }) {
  const [progress, setProgress] = useState(0);
  const [fixedProgress, setFixedProgress] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const progressBarRef = useRef(null);
  const { user } = useContext(UserContext);
  const [userId, setUserId] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [setEditCompoRecipe] = useState({
    percentage: 0,
  });
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
        console.error("Error retrieving composition recipe details:", error);
      });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const progressBar = progressBarRef.current;
      const progressBarHeight = progressBar.offsetHeight;
      const maxProgress = 100;
      const { top } = progressBar.getBoundingClientRect();

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
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/compo_recipe`, {
          percentage: progress,
          wineBottle_id: id,
          user_account_ID: user,
          user_id: userId,
        })
        .then(() => {
          // console.log("Data posted:", {
          //   percentage: progress,
          //   wineBottle_id: id,
          //   user_account_ID: user,
          //   user_id: userId,
          // });
          setIsEditing(true);
        })
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
  useEffect(() => {
    setEditCompoRecipe({ percentage: progress });
  }, [progress]);

  const handleClickPut = () => {
    setIsLocked(false); // Désactiver le verrouillage
    const updatedCompoRecipe = { percentage: progress };

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/compo_recipe`,
        updatedCompoRecipe,
        {
          params: {
            wineBottle_id: id,
            user_id: userId,
            user_account_ID: user,
          },
        }
      )
      .then(() => {
        // console.log("Data updated:", {
        //   percentage: progress,
        //   wineBottle_id: id,
        //   user_id: userId,
        //   user_account_ID: user,
        // });
        setIsEditing(false);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la modification de la valeur progress",
          error
        );
      });
  };

  return (
    <div className="bottle-animation">
      {isEditing ? (
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

export default AnimationBottle;

AnimationBottle.propTypes = {
  id: PropTypes.number.isRequired,
};
