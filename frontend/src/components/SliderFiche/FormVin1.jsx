import "./FormVin.scss";
import PropTypes from "prop-types";
import { useState, useContext, useEffect } from "react";

import axios from "axios";
import { BsDropletFill } from "react-icons/bs";
import UserContext from "../../contexts/UserContext";
import TabNavItem from "../TabComponents/TabNavItem";
import TabContent from "../TabComponents/TabContent";
import iconeRobe from "../../assets/images/robe.png";
import iconeArome from "../../assets/images/arome.png";
import iconeFlavor from "../../assets/images/saveur.png";

function FormVin1({ firstBottleId }) {
  const [activeTabSlide1, setActiveTabSlide1] = useState("tab1"); // useState pour gérer l'affichage des onglets
  const [isEditing, setIsEditing] = useState(false); // Modifier le contenu du bouton, post/edit

  // Récupérer et traiter les informations du userContext

  const { user } = useContext(UserContext);
  const [userId, setUserId] = useState(null);

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [formData1, setFormData1] = useState({
    robe: "",
    color_intensity: "",
    arome: "",
    arome_intensity: "",
    flavor: "",
    rating,
    user_id: userId,
    user_account_ID: user,
    wineBottle_id: firstBottleId,
  });

  // Get l'id de la table user grâce au account_id de la table user
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        params: { account_id: `${user}` },
      })
      .then((response) => {
        const userIdUpdated = response.data[0]?.id;
        setUserId(userIdUpdated);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setFormData1]);

  // Envoyer le userId dans le formData
  useEffect(() => {
    setFormData1({ ...formData1, user_id: userId });
  }, [userId]);

  const [editFormData1, setEditFormData1] = useState({
    robe: "",
    color_intensity: "",
    arome: "",
    arome_intensity: "",
    flavor: "",
    rating,
    user_id: userId,
    user_account_ID: user,
    wineBottle_id: firstBottleId,
  });

  useEffect(() => {
    setEditFormData1({ ...editFormData1, user_id: userId });
  }, [userId]);

  const handleChangeData1 = (evt) => {
    setFormData1((previousData) => ({
      ...previousData,
      [evt.target.name]: evt.target.value,
    }));
    setEditFormData1((previousData) => ({
      ...previousData,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleSubmitForm1 = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/tasting`, formData1)
      .then(() => {
        setIsEditing(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleEditForm1 = (evt) => {
    evt.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/tasting`, editFormData1, {
        params: {
          user_account_ID: formData1.user_account_ID,
          wineBottle_id: formData1.wineBottle_id,
        },
      })
      .then(() => {
        setIsEditing(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="contenair-carousel">
      <h3 className="h3-title-wine-taste">VIN NUMERO 1</h3>

      {isEditing ? (
        <button
          className="btn-update-form"
          type="button"
          onClick={handleEditForm1}
        >
          Modifier
        </button>
      ) : (
        <button
          className="btn-validate-form"
          type="button"
          onClick={handleSubmitForm1}
        >
          Valider
        </button>
      )}
      <div className="slideWrapper">
        <div className="thirdSlide">
          <div className="tabs">
            {/* Tab nav */}
            <ul className="nav">
              <img
                className="icone-tasting-robe"
                src={iconeRobe}
                alt="iconeRobe"
              />
              <TabNavItem
                title="Robe"
                className="tab-invisible"
                id="tab1"
                activeTab={activeTabSlide1}
                setActiveTab={setActiveTabSlide1}
              />
              <img
                className="icone-tasting-arome"
                src={iconeArome}
                alt="iconeRobe"
              />
              <TabNavItem
                title="Arôme"
                id="tab2"
                activeTab={activeTabSlide1}
                setActiveTab={setActiveTabSlide1}
              />
              <img
                className="icone-tasting-flavor"
                src={iconeFlavor}
                alt="iconeRobe"
              />
              <TabNavItem
                title="Saveur"
                id="tab3"
                activeTab={activeTabSlide1}
                setActiveTab={setActiveTabSlide1}
              />
            </ul>
            {/* Content of the tabs */}
            <div className="outlet">
              <TabContent id="tab1" activeTab={activeTabSlide1}>
                <form className="form-tasting">
                  <h3 className="title-tasting-h3">Robe</h3>
                  {/* Option 11 */}
                  <div className="style-form-tasting">
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="robe"
                        value="jauneOr"
                        checked={formData1.robe === "jauneOr"}
                        onChange={handleChangeData1}
                      />
                      Jaune Or
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="robe"
                        value="roux"
                        checked={formData1.robe === "roux"}
                        onChange={handleChangeData1}
                      />
                      Roux
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="robe"
                        value="grenat"
                        checked={formData1.robe === "grenat"}
                        onChange={handleChangeData1}
                      />
                      Grenat
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="robe"
                        value="violet"
                        checked={formData1.robe === "violet"}
                        onChange={handleChangeData1}
                      />
                      Violet
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="robe"
                        value="jauneVert"
                        checked={formData1.robe === "jauneVert"}
                        onChange={handleChangeData1}
                      />
                      Jaune Vert
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="robe"
                        value="dore"
                        checked={formData1.robe === "dore"}
                        onChange={handleChangeData1}
                      />
                      Doré
                    </label>
                  </div>
                  <h3 className="title-tasting-h3">Intensité des couleurs</h3>
                  <div className="style-form-tasting">
                    {/* Option 12 */}
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="color_intensity"
                        value="claire"
                        checked={formData1.color_intensity === "claire"}
                        onChange={handleChangeData1}
                      />
                      Claire
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="color_intensity"
                        value="moyenne"
                        checked={formData1.color_intensity === "moyenne"}
                        onChange={handleChangeData1}
                      />
                      Moyenne
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="color_intensity"
                        value="trouble"
                        checked={formData1.color_intensity === "trouble"}
                        onChange={handleChangeData1}
                      />
                      Trouble
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="color_intensity"
                        value="opaque"
                        checked={formData1.color_intensity === "opaque"}
                        onChange={handleChangeData1}
                      />
                      Opaque
                    </label>
                  </div>
                </form>
              </TabContent>
              <TabContent id="tab2" activeTab={activeTabSlide1}>
                <form className="form-tasting2">
                  <h3 className="title-tasting-h3">Arôme</h3>
                  <div className="style-form-tasting">
                    {/* Option 13 */}
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="arome"
                        value="fruit"
                        checked={formData1.arome === "fruit"}
                        onChange={handleChangeData1}
                      />
                      Fruits
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="arome"
                        value="fleur"
                        checked={formData1.arome === "fleur"}
                        onChange={handleChangeData1}
                      />
                      Fleurs
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="arome"
                        value="vegetal"
                        checked={formData1.arome === "vegetal"}
                        onChange={handleChangeData1}
                      />
                      Végétal
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="arome"
                        value="epice"
                        checked={formData1.arome === "epice"}
                        onChange={handleChangeData1}
                      />
                      Epicé
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="arome"
                        value="animal"
                        checked={formData1.arome === "animal"}
                        onChange={handleChangeData1}
                      />
                      Animal
                    </label>
                  </div>
                  <h3 className="title-tasting-h3">Intensité des arômes</h3>
                  <div className="style-form-tasting">
                    {/* Option 14 */}
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="arome_intensity"
                        value="leger"
                        checked={formData1.arome_intensity === "leger"}
                        onChange={handleChangeData1}
                      />
                      Léger
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="arome_intensity"
                        value="moyen"
                        checked={formData1.arome_intensity === "moyen"}
                        onChange={handleChangeData1}
                      />
                      Moyen
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="arome_intensity"
                        value="fort"
                        checked={formData1.arome_intensity === "fort"}
                        onChange={handleChangeData1}
                      />
                      Fort
                    </label>
                  </div>
                </form>
              </TabContent>
              <TabContent id="tab3" activeTab={activeTabSlide1}>
                <form className="form-tasting3">
                  <h3 className="title-tasting-h3">Saveur</h3>
                  <div className="style-form-tasting">
                    {/* Option 15 */}
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="flavor"
                        value="acide"
                        checked={formData1.flavor === "acide"}
                        onChange={handleChangeData1}
                      />
                      Acide
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="flavor"
                        value="amer"
                        checked={formData1.flavor === "amer"}
                        onChange={handleChangeData1}
                      />
                      Amer
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="flavor"
                        value="sucre"
                        checked={formData1.flavor === "sucre"}
                        onChange={handleChangeData1}
                      />
                      Sucré
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="flavor"
                        value="gras"
                        checked={formData1.flavor === "gras"}
                        onChange={handleChangeData1}
                      />
                      Gras
                    </label>
                  </div>
                  <h3 className="title-tasting-h3">Note</h3>
                  <div className="style-form-tasting-rating">
                    {[...Array(10)].map((droplet, i) => {
                      const ratingValue = i + 1;

                      return (
                        <label key={ratingValue} className="dropletContainer">
                          <input
                            type="radio"
                            name="rating"
                            id="input-rating"
                            value={ratingValue}
                            className="dropletInput"
                            onClick={() => setRating(ratingValue)}
                            onChange={handleChangeData1}
                          />
                          <BsDropletFill
                            className="droplet"
                            size={30}
                            color={
                              ratingValue <= (hover || rating)
                                ? "#d8af49"
                                : "#e4e5e9"
                            }
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                          />
                        </label>
                      );
                    })}
                  </div>
                </form>
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FormVin1.propTypes = {
  firstBottleId: PropTypes.number.isRequired,
};
export default FormVin1;
