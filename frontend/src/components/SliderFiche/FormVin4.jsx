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

function FormVin4({ fourthBottleId }) {
  const [activeTabSlide4, setActiveTabSlide4] = useState("tab1");
  const [isEditing, setIsEditing] = useState(false);

  const { user } = useContext(UserContext);
  const [userId, setUserId] = useState(null);

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [formData4, setFormData4] = useState({
    robe: "",
    color_intensity: "",
    arome: "",
    arome_intensity: "",
    flavor: "",
    rating,
    user_id: userId,
    user_account_ID: user,
    wineBottle_id: fourthBottleId,
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
  }, [setFormData4]);

  // Envoyer le userId dans le formData
  useEffect(() => {
    setFormData4({ ...formData4, user_id: userId });
  }, [userId]);

  const [editFormData4, setEditFormData4] = useState({
    robe: "",
    color_intensity: "",
    arome: "",
    arome_intensity: "",
    flavor: "",
    rating,
    user_id: userId,
    user_account_ID: user,
    wineBottle_id: fourthBottleId,
  });

  useEffect(() => {
    setEditFormData4({ ...editFormData4, user_id: userId });
  }, [userId]);

  const handleChangeData4 = (evt) => {
    setFormData4((previousData) => ({
      ...previousData,
      [evt.target.name]: evt.target.value,
    }));
    setEditFormData4((previousData) => ({
      ...previousData,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleSubmitForm4 = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/tasting`, formData4)
      .then(() => {
        setIsEditing(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleEditForm4 = (evt) => {
    evt.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/tasting`, editFormData4, {
        params: {
          user_account_ID: formData4.user_account_ID,
          wineBottle_id: formData4.wineBottle_id,
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
      <h3 className="h3-title-wine-taste">VIN NUMERO 4</h3>
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
                activeTab={activeTabSlide4}
                setActiveTab={setActiveTabSlide4}
              />
              <img
                className="icone-tasting-arome"
                src={iconeArome}
                alt="iconeRobe"
              />
              <TabNavItem
                title="Arôme"
                id="tab2"
                activeTab={activeTabSlide4}
                setActiveTab={setActiveTabSlide4}
              />
              <img
                className="icone-tasting-flavor"
                src={iconeFlavor}
                alt="iconeRobe"
              />
              <TabNavItem
                title="Saveur"
                id="tab3"
                activeTab={activeTabSlide4}
                setActiveTab={setActiveTabSlide4}
              />
            </ul>
            {/* Content of the tabs */}
            <div className="outlet">
              <TabContent id="tab1" activeTab={activeTabSlide4}>
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
                        checked={formData4.robe === "jauneOr"}
                        onChange={handleChangeData4}
                      />
                      Jaune Or
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="robe"
                        value="roux"
                        checked={formData4.robe === "roux"}
                        onChange={handleChangeData4}
                      />
                      Roux
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="robe"
                        value="grenat"
                        checked={formData4.robe === "grenat"}
                        onChange={handleChangeData4}
                      />
                      Grenat
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="robe"
                        value="violet"
                        checked={formData4.robe === "violet"}
                        onChange={handleChangeData4}
                      />
                      Violet
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="robe"
                        value="jauneVert"
                        checked={formData4.robe === "jauneVert"}
                        onChange={handleChangeData4}
                      />
                      Jaune Vert
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="robe"
                        value="dore"
                        checked={formData4.robe === "dore"}
                        onChange={handleChangeData4}
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
                        checked={formData4.color_intensity === "claire"}
                        onChange={handleChangeData4}
                      />
                      Claire
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="color_intensity"
                        value="moyenne"
                        checked={formData4.color_intensity === "moyenne"}
                        onChange={handleChangeData4}
                      />
                      Moyenne
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="color_intensity"
                        value="trouble"
                        checked={formData4.color_intensity === "trouble"}
                        onChange={handleChangeData4}
                      />
                      Trouble
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="color_intensity"
                        value="opaque"
                        checked={formData4.color_intensity === "opaque"}
                        onChange={handleChangeData4}
                      />
                      Opaque
                    </label>
                  </div>
                </form>
              </TabContent>
              <TabContent id="tab2" activeTab={activeTabSlide4}>
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
                        checked={formData4.arome === "fruit"}
                        onChange={handleChangeData4}
                      />
                      Fruits
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="arome"
                        value="fleur"
                        checked={formData4.arome === "fleur"}
                        onChange={handleChangeData4}
                      />
                      Fleurs
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="arome"
                        value="vegetal"
                        checked={formData4.arome === "vegetal"}
                        onChange={handleChangeData4}
                      />
                      Végétal
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="arome"
                        value="epice"
                        checked={formData4.arome === "epice"}
                        onChange={handleChangeData4}
                      />
                      Epicé
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="arome"
                        value="animal"
                        checked={formData4.arome === "animal"}
                        onChange={handleChangeData4}
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
                        checked={formData4.arome_intensity === "leger"}
                        onChange={handleChangeData4}
                      />
                      Léger
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="arome_intensity"
                        value="moyen"
                        checked={formData4.arome_intensity === "moyen"}
                        onChange={handleChangeData4}
                      />
                      Moyen
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="arome_intensity"
                        value="fort"
                        checked={formData4.arome_intensity === "fort"}
                        onChange={handleChangeData4}
                      />
                      Fort
                    </label>
                  </div>
                </form>
              </TabContent>
              <TabContent id="tab3" activeTab={activeTabSlide4}>
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
                        checked={formData4.flavor === "acide"}
                        onChange={handleChangeData4}
                      />
                      Acide
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="flavor"
                        value="amer"
                        checked={formData4.flavor === "amer"}
                        onChange={handleChangeData4}
                      />
                      Amer
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="flavor"
                        value="sucre"
                        checked={formData4.flavor === "sucre"}
                        onChange={handleChangeData4}
                      />
                      Sucré
                    </label>
                    <label className="label-tasting">
                      <input
                        className="input-size"
                        type="radio"
                        name="flavor"
                        value="gras"
                        checked={formData4.flavor === "gras"}
                        onChange={handleChangeData4}
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
                            onChange={handleChangeData4}
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
                    type="button"
                    className="btn-update-form"
                    onClick={handleEditForm4}
                  >
                    Modifier
                  </button>
                ) : (
                  <button
                    className="btn-validate-form"
                    type="button"
                    onClick={handleSubmitForm4}
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

FormVin4.propTypes = {
  fourthBottleId: PropTypes.number.isRequired,
};
export default FormVin4;
