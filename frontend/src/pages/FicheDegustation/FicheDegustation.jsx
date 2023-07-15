import SliderFiche from "../../components/SliderFiche/SliderFiche";
import "./FichDegustation.scss";
import pictureBand from "../../assets/images/separator3.png";

function FicheDegustation() {
  return (
    <div className="degustationContainer">
      <h2 className="degustationTitle">Fiche de Dégustation</h2>
      <img className="picture-band-taste" src={pictureBand} alt="banderole3" />
      <SliderFiche />
    </div>
  );
}

export default FicheDegustation;
