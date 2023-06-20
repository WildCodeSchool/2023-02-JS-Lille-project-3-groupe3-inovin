import "./Bouteille.scss";
import bottles from "../../assets/images/wines.jpg";

function Bouteille() {
  return (
    <div className="container_bouteilles">
      <div className="element_bouteille">
        <div className="element_photo_gauche">
          <image src={bottles} className="element_photo" />
        </div>
        <div className="element_text_droite">
          <h2>PADDLE</h2>
          <p>POOP</p>
        </div>
      </div>

      <div className="element_bouteille">
        <div className="element_photo_gauche">
          <image src={bottles} className="element_photo" />
        </div>
        <div className="element_text_droite">
          <h2>FLADDLE</h2>
          <p>POOP</p>
        </div>
      </div>

      <div className="element_bouteille">
        <div className="element_photo_gauche">
          <image src={bottles} className="element_photo" />
        </div>
        <div className="element_text_droite">
          <h2>SHIZZLE</h2>
          <p>POOP</p>
        </div>
      </div>

      <button type="button" className="home_btn">
        {" "}
        Bravo ! Un avis ?
      </button>
    </div>
  );
}

export default Bouteille;
