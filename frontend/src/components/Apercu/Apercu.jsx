import "./Apercu.scss";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
import PropTypes from "prop-types";
import grapes from "../../assets/images/grape.jpg";
// import UserContext from "../../contexts/UserContext";
function Apercu({ inputNameRecipe }) {
  // useContext
  // const { user } = useContext(UserContext); // account_id of current user from inscription page, you can use it for update database

  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate("/livredor");
  };
  return (
    <div className="element_apercu">
      <div className="recap">
        <div className="element_gauche">
          <img src={grapes} className="element_photo" alt="Grapes" />
        </div>
        <div className="element_droite">
          <h2 className="element_titre_exterieur">VOTRE CREATION</h2>
          <h3 className="element_mini_title">{inputNameRecipe.recipe_name}</h3>
          <p className="element_description">
            Les cépages choisis pour le vin sont idéaux !
          </p>
        </div>
      </div>
      <button type="button" className="apercu_btn" onClick={handleClickNext}>
        {" "}
        Bravo ! Un avis ?
      </button>
    </div>
  );
}

export default Apercu;
Apercu.propTypes = {
  inputNameRecipe: PropTypes.string.isRequired,
};
