import Apercu from "../../components/Apercu/Apercu";
import "./AtelierCreation.scss";
import CardBottle from "../../components/CardBottle/CardBottle";

function AtelierCreation() {
  return (
    <div className="element-fond">
      <div className="container_atelier">
        <div className="container-bottle">
          <CardBottle id={1} />
          <CardBottle id={2} />
          <CardBottle id={3} />
        </div>
        <Apercu />
      </div>
    </div>
  );
}

export default AtelierCreation;
