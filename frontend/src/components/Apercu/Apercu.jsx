import "./Apercu.scss";
import grapes from "../../assets/images/grape.jpg";

function Apercu() {
  return (
    <div className="element_apercu">
      <div className="element_gauche">
        <img src={grapes} className="element_photo" alt="Grapes" />
      </div>
      <div className="element_droite">
        <h2>Votre création</h2>
        <h3>Fantine du Pouyac</h3>
        <p>Mélange doux et léger avec des notes de prune et d’hibiscus.</p>
      </div>
    </div>
  );
}

export default Apercu;
