import "./Apercu.scss";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
import grapes from "../../assets/images/grape.jpg";
// import UserContext from "../../contexts/UserContext";

function Apercu() {
  // useContext
  // const { user } = useContext(UserContext); // account_id of current user from inscription page, you can use it for update database

  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate("/livredor");
  };
  return (
    <>
      <div className="element_apercu">
        <div className="element_gauche">
          <img src={grapes} className="element_photo" alt="Grapes" />
        </div>
        <div className="element_droite">
          <h2 className="element_titre_exterieur">VOTRE CREATION</h2>
          <h3 className="element_mini_title">Fantine du Pouyac</h3>
          <p className="element_description">
            Mélange doux et léger avec des notes de prune et d’hibiscus.
          </p>
        </div>
      </div>
      <button type="button" className="apercu_btn" onClick={handleClickNext}>
        {" "}
        Bravo ! Un avis ?
      </button>
    </>
  );
}

export default Apercu;
