import "./Bouteille.scss";
// import { useContext } from "react";
import bottlesSlider from "../../assets/images/bouteille_slider.png";
// import UserContext from "../../contexts/UserContext";

function Bouteille() {
  // useContext
  // const { user } = useContext(UserContext); // account_id of current user from inscription page, you can use it for update database

  return (
    <>
      <h2 className="element_titre_exterieur_deux">ATELIER DE CREATION</h2>
      <div className="container_bouteilles">
        <div className="element_bouteille">
          <div className="element_photo_gauche">
            <img
              src={bottlesSlider}
              className="element_photo_slider"
              alt="Bouteille de vin vide avec slider"
            />
          </div>
          <div className="element_text_droite">
            <h2 className="element_mini_title">Chardonnay</h2>
            <p className="element_description_bouteille">
              raisin brillant et doré ronds, gras et amples, au petit goût de
              noisette, un peu beurré.
            </p>
          </div>
        </div>

        <div className="element_bouteille">
          <div className="element_photo_gauche">
            <img
              src={bottlesSlider}
              className="element_photo_slider"
              alt="Bouteille de vin vide avec slider"
            />
          </div>
          <div className="element_text_droite">
            <h2 className="element_mini_title">Pinot Noir</h2>
            <p className="element_description_bouteille">
              raisin brillant et doré ronds, gras et amples, au petit goût de
              noisette, un peu beurré.
            </p>
          </div>
        </div>

        <div className="element_bouteille">
          <div className="element_photo_gauche">
            <img
              src={bottlesSlider}
              className="element_photo_slider"
              alt="Bouteille de vin vide avec slider"
            />
          </div>
          <div className="element_text_droite">
            <h2 className="element_mini_title">Sauvignon</h2>
            <p className="element_description_bouteille">
              raisin brillant et doré ronds, gras et amples, au petit goût de
              noisette, un peu beurré.
            </p>
          </div>
        </div>

        <button type="button" className="bouteille_btn">
          {" "}
          Création recette
        </button>
      </div>
    </>
  );
}

export default Bouteille;
