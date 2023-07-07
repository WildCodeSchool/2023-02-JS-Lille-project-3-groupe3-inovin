import Bouteille from "../../components/Bouteille/Bouteille";
import Apercu from "../../components/Apercu/Apercu";
import "./AtelierCreation.scss";

function AtelierCreation() {
  return (
    <div className="element-fond">
      <div className="container_atelier">
        <Bouteille />
        <Apercu />
      </div>
    </div>
  );
}

export default AtelierCreation;
