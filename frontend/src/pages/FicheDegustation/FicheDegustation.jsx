import SliderFiche from "../../components/SliderFiche/SliderFiche";
import "./FichDegustation.scss";

function FicheDegustation() {
  return (
    <div className="degustationContainer">
      <h2 className="degustationTitle">Fiche de dégustation</h2>
      <SliderFiche />
    </div>
  );
}

export default FicheDegustation;
