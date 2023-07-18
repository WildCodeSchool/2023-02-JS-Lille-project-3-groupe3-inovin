import { useState, useEffect, useContext } from "react";
import "./FormFeedback.scss";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import separator from "../../assets/images/separator02.png";
import fleche from "../../assets/images/fleche_360.png";
import UserContext from "../../contexts/UserContext";
import AnimationPage from "../AnimationPage/AnimationPage";

function FormFeedback() {
  // useContext
  const { user } = useContext(UserContext); // account_id of current user from inscription page, you can use it for update database

  // current state of components
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [userComment, setUserComment] = useState("");
  const [isPortrait, setIsPortrait] = useState(window.innerWidth < 769);
  const [feedbackConfirm, setFeedbackConfirm] = useState(false);

  const [userId, setUserId] = useState();

  // fonction pour get l'id du nouvel inscrit grâce à son account_id, on le stock dans le state userId.
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        params: { account_id: user },
      })
      .then((response) => {
        const resultUserId = response.data[0]?.id;
        setUserId(resultUserId);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // console.log(`id de l'utilisateur sur cette page feedback : ${userId}`);

  const updateMedia = () => {
    setIsPortrait(window.innerWidth < 769);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate("/Resume");
  };

  const sendFeedbackRating = () => {
    const userData = {
      // get les données de l'utilisateur connecté
      address: "",
      ordering: 0,
      feedbackRating: rating,
      feedbackComment: userComment,
    };

    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/user/${userId}`, userData)
      .then(() => {
        setFeedbackConfirm(true);
      })
      .catch((error) => {
        // Gérez les erreurs de la requête ici
        console.error("Erreur lors de l'envoi du feedback :", error);
      });
  };

  return (
    <AnimationPage>
      <div className="commentsPage">
        <div className="commentsBook">
          <h2>LIVRE D'OR</h2>
        </div>
        <img src={separator} className="separatorImg" alt="artdeco" />

        <div className="noticeContainer">
          {!feedbackConfirm ? (
            <h3 className="noticeTitle">AVIS</h3>
          ) : (
            <h3 className="feedbackSent">
              Ton avis a bien été envoyé, merci !
            </h3>
          )}

          <div className="content">
            <h3 className="rateExpTitle">NOTEZ L'EXPERIENCE DE L'ATELIER :</h3>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;

              return (
                <label key={ratingValue} className="starContainer">
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    className="starInput"
                    onClick={() => setRating(ratingValue)}
                  />
                  <FaStar
                    className="star"
                    size={45}
                    color={
                      ratingValue <= (hover || rating) ? "#d8af49" : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}

            <h3 className="askCommentTitle">UN PETIT COMMENTAIRE ?</h3>

            {isPortrait ? (
              <textarea
                className="commentsArea"
                rows="7"
                cols="33"
                placeholder="Votre commentaire..."
                value={userComment}
                onChange={(event) => setUserComment(event.target.value)}
              />
            ) : (
              <textarea
                className="commentsArea"
                rows="6"
                cols="60"
                placeholder="Votre commentaire..."
                value={userComment}
                onChange={(event) => setUserComment(event.target.value)}
              />
            )}
          </div>

          <div className="buttonDecoration">
            <button
              type="submit"
              className="sendForm"
              onClick={sendFeedbackRating}
            >
              ENVOYER
            </button>
          </div>

          <button
            type="button"
            onClick={handleClickNext}
            className="navigateLinkToResume"
          >
            {" "}
            <img src={fleche} alt="next page" className="nextPageArrow" />{" "}
            SUIVANT
          </button>
        </div>
      </div>
    </AnimationPage>
  );
}

export default FormFeedback;
