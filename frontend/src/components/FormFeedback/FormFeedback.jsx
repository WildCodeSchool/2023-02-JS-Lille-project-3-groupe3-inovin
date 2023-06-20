import { useState, useEffect } from "react";
import "./FormFeedback.scss";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import separator from "../../assets/images/separator02.png";
import fleche from "../../assets/images/fleche_360.png";

function FormFeedback() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [isPortrait, setIsPortrait] = useState(window.innerWidth < 689);

  const updateMedia = () => {
    setIsPortrait(window.innerWidth < 689);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate("/Resume");
  };

  return (
    <div className="commentsPage">
      <div className="commentsBook">
        <h2>LIVRE D'OR</h2>
      </div>
      <img src={separator} className="separatorImg" alt="artdeco" />

      <div className="noticeContainer">
        <h3 className="noticeTitle">AVIS</h3>

        <div className="content">
          <h3>NOTE L'EXPERIENCE DE L'ATELIER :</h3>
          {[...Array(5)].map((star, i, index) => {
            const ratingValue = i + 1;

            return (
              <label key={index} className="starContainer">
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  className="star"
                  size={50}
                  color={
                    ratingValue <= (hover || rating) ? "#d8af49" : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}

          <h3>UN PETIT COMMENTAIRE ?</h3>

          {isPortrait ? (
            <textarea className="commentsArea" rows="7" cols="33" />
          ) : (
            <textarea className="commentsArea" rows="6" cols="60" />
          )}
        </div>

        <div className="buttonDecoration">
          <button type="submit" className="sendForm">
            ENVOYER
          </button>
        </div>

        {/* send {rating} par mail à Cédric */}
        <button
          type="button"
          onClick={handleClickNext}
          className="navigateLinkToResume"
        >
          {" "}
          <img src={fleche} alt="next page" className="nextPageArrow" /> SUIVANT
        </button>
      </div>
    </div>
  );
}

export default FormFeedback;
