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

function FormVin2({ secondBottleId }) {
  const [activeTabSlide2, setActiveTabSlide2] = useState("tab1");
  const [isEditing, setIsEditing] = useState(false);

  const { user } = useContext(UserContext);
  const [userId, setUserId] = useState(null);

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [formData2, setFormData2] = useState({
    robe: "",
    color_intensity: "",
    arome: "",
    arome_intensity: "",
    flavor: "",
    rating,
    user_id: userId,
    user_account_ID: user,
    wineBottle_id: secondBottleId,
  });

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
  }, [setFormData2]);

  // Envoyer le userId dans le formData
  useEffect(() => {
    setFormData2({ ...formData2, user_id: userId });
  }, [userId]);

  const [editFormData2, setEditFormData2] = useState({
    robe: "",
    color_intensity: "",
    arome: "",
    arome_intensity: "",
    flavor: "",
    rating,
    user_id: userId,
    user_account_ID: user,
    wineBottle_id: secondBottleId,
  });

  useEffect(() => {
    setEditFormData2({ ...editFormData2, user_id: userId });
  }, [userId]);

  const handleChangeData2 = (evt) => {
    setFormData2((previousData) => ({
      ...previousData,
      [evt.target.name]: evt.target.value,
    }));
    setEditFormData2((previousData) => ({
      ...previousData,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleSubmitForm2 = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/tasting`, formData2)
      .then(() => {
        setIsEditing(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleEditForm2 = (evt) => {
    evt.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/tasting`, editFormData2, {
        params: {
          user_account_ID: formData2.user_account_ID,
          wineBottle_id: formData2.wineBottle_id,
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
      <h3 className="h3-title-wine-taste">VIN NUMERO 2</h3>
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
                id="tab1"
                activeTab={activeTabSlide2}
                setActiveTab={setActiveTabSlide2}
              />
              <img
                className="icone-tasting-arome"
                src={iconeArome}
                alt="iconeRobe"
              />
              <TabNavItem
                title="Arôme"
                id="tab2"
                activeTab={activeTabSlide2}
                setActiveTab={setActiveTabSlide2}
              />
              <img
                className="icone-tasting-flavor"
                src={iconeFlavor}
                alt="iconeRobe"
              />
              <TabNavItem
                title="Saveur"
                id="tab3"
                activeTab={activeTabSlide2}
                setActiveTab={setActiveTabSlide2}
              />
            </ul>
            {/* Content of the tabs */}
            <div className="outlet">
              <TabContent id="tab1" activeTab={activeTabSlide2}>
                <form className="form-tasting">
                  <h3 className="title-tasting-h3">Robe</h3>
                  {/* Option 11 */}
                  <div className="style-form-tasting">
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="robe"
                        value="jauneOr"
                        checked={formData2.robe === "jauneOr"}
                        onChange={handleChangeData2}
                      />
                      Jaune Or
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="robe"
                        value="roux"
                        checked={formData2.robe === "roux"}
                        onChange={handleChangeData2}
                      />
                      Roux
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="robe"
                        value="grenat"
                        checked={formData2.robe === "grenat"}
                        onChange={handleChangeData2}
                      />
                      Grenat
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="robe"
                        value="violet"
                        checked={formData2.robe === "violet"}
                        onChange={handleChangeData2}
                      />
                      Violet
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="robe"
                        value="jauneVert"
                        checked={formData2.robe === "jauneVert"}
                        onChange={handleChangeData2}
                      />
                      Jaune Vert
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="robe"
                        value="dore"
                        checked={formData2.robe === "dore"}
                        onChange={handleChangeData2}
                      />
                      Doré
                    </label>
                  </div>
                  <h3 className="title-tasting-h3">Intensité des couleurs</h3>
                  <div className="style-form-tasting">
                    {/* Option 12 */}
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="color_intensity"
                        value="claire"
                        checked={formData2.color_intensity === "claire"}
                        onChange={handleChangeData2}
                      />
                      Claire
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="color_intensity"
                        value="moyenne"
                        checked={formData2.color_intensity === "moyenne"}
                        onChange={handleChangeData2}
                      />
                      Moyenne
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="color_intensity"
                        value="trouble"
                        checked={formData2.color_intensity === "trouble"}
                        onChange={handleChangeData2}
                      />
                      Trouble
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="color_intensity"
                        value="opaque"
                        checked={formData2.color_intensity === "opaque"}
                        onChange={handleChangeData2}
                      />
                      Opaque
                    </label>
                  </div>
                </form>
              </TabContent>
              <TabContent id="tab2" activeTab={activeTabSlide2}>
                <form className="form-tasting2">
                  <h3 className="title-tasting-h3">Arôme</h3>
                  <div className="style-form-tasting">
                    {/* Option 13 */}
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="arome"
                        value="fruit"
                        checked={formData2.arome === "fruit"}
                        onChange={handleChangeData2}
                      />
                      Fruits
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="arome"
                        value="fleur"
                        checked={formData2.arome === "fleur"}
                        onChange={handleChangeData2}
                      />
                      Fleurs
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="arome"
                        value="vegetal"
                        checked={formData2.arome === "vegetal"}
                        onChange={handleChangeData2}
                      />
                      Végétal
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="arome"
                        value="epice"
                        checked={formData2.arome === "epice"}
                        onChange={handleChangeData2}
                      />
                      Epicé
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="arome"
                        value="animal"
                        checked={formData2.arome === "animal"}
                        onChange={handleChangeData2}
                      />
                      Animal
                    </label>
                  </div>
                  <h3 className="title-tasting-h3">Intensité des arômes</h3>
                  {/* Option 14 */}
                  <div className="style-form-tasting">
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="arome_intensity"
                        value="leger"
                        checked={formData2.arome_intensity === "leger"}
                        onChange={handleChangeData2}
                      />
                      Léger
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="arome_intensity"
                        value="moyen"
                        checked={formData2.arome_intensity === "moyen"}
                        onChange={handleChangeData2}
                      />
                      Moyen
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="arome_intensity"
                        value="fort"
                        checked={formData2.arome_intensity === "fort"}
                        onChange={handleChangeData2}
                      />
                      Fort
                    </label>
                  </div>
                </form>
              </TabContent>
              <TabContent id="tab3" activeTab={activeTabSlide2}>
                <form className="form-tasting3">
                  <h3 className="title-tasting-h3">Saveur</h3>
                  {/* Option 15 */}
                  <div className="style-form-tasting">
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="flavor"
                        value="acide"
                        checked={formData2.flavor === "acide"}
                        onChange={handleChangeData2}
                      />
                      Acide
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="flavor"
                        value="amer"
                        checked={formData2.flavor === "amer"}
                        onChange={handleChangeData2}
                      />
                      Amer
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="flavor"
                        value="sucre"
                        checked={formData2.flavor === "sucre"}
                        onChange={handleChangeData2}
                      />
                      Sucré
                    </label>
                    <label className="label-tasting">
                      <input
                        type="radio"
                        className="input-size"
                        name="flavor"
                        value="gras"
                        checked={formData2.flavor === "gras"}
                        onChange={handleChangeData2}
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
                            onChange={handleChangeData2}
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
                {isEditing ? (
                  <button
                    className="btn-update-form"
                    type="button"
                    onClick={handleEditForm2}
                  >
                    Modifier
                  </button>
                ) : (
                  <button
                    className="btn-validate-form"
                    type="button"
                    onClick={handleSubmitForm2}
                  >
                    Valider
                  </button>
                )}
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FormVin2.propTypes = {
  secondBottleId: PropTypes.number.isRequired,
};
export default FormVin2;
