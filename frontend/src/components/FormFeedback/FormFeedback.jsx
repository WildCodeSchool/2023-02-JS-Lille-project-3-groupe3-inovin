import { useState } from "react";
import "./FormFeedback.scss";
import { FaStar } from "react-icons/fa";

function FormFeedback() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="commentsPage">
      <div className="commentsBook">
        <h2>LIVRE D'OR</h2>
      </div>
      <img alt="artdeco" />

      <div className="noticeContainer">
        <h3 className="noticeTitle">AVIS</h3>

        <div className="content">
          <h3>NOTE SUR 5</h3>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
              <label>
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
          <textarea className="commentsArea" rows="10" cols="50" />
        </div>
        <button type="submit">ENVOYER</button>
        {/* send {rating} par mail à Cédric */}
      </div>

      <button type="button">Suivant</button>
    </div>
  );
}

export default FormFeedback;
