import "./Apercu.scss";
import grapes from "../../assets/images/grape.jpg";

function Apercu() {
  return (
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
  );
}

export default Apercu;
