import PropTypes from "prop-types";
import { useState, useContext, useEffect } from "react";

import axios from "axios";
import { BsDropletFill } from "react-icons/bs";
import UserContext from "../../contexts/UserContext";
import TabNavItem from "../TabComponents/TabNavItem";
import TabContent from "../TabComponents/TabContent";

function FormVin3({ thirdBottleId }) {
  const [activeTabSlide3, setActiveTabSlide3] = useState("tab1");
  const [isEditing, setIsEditing] = useState(false);

  const { user } = useContext(UserContext);
  const [userId, setUserId] = useState(null);

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [formData3, setFormData3] = useState({
    robe: "",
    color_intensity: "",
    arome: "",
    arome_intensity: "",
    flavor: "",
    rating,
    user_id: userId,
    user_account_ID: user,
    wineBottle_id: thirdBottleId,
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
  }, [setFormData3]);

  // Envoyer le userId dans le formData
  useEffect(() => {
    setFormData3({ ...formData3, user_id: userId });
  }, [userId]);

  const [editFormData3, setEditFormData3] = useState({
    robe: "",
    color_intensity: "",
    arome: "",
    arome_intensity: "",
    flavor: "",
    rating,
    user_id: userId,
    user_account_ID: user,
    wineBottle_id: thirdBottleId,
  });

  useEffect(() => {
    setEditFormData3({ ...editFormData3, user_id: userId });
  }, [userId]);

  const handleChangeData3 = (evt) => {
    setFormData3((previousData) => ({
      ...previousData,
      [evt.target.name]: evt.target.value,
    }));
    setEditFormData3((previousData) => ({
      ...previousData,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleSubmitForm3 = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/tasting`, formData3)
      .then(() => {
        setIsEditing(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleEditForm3 = (evt) => {
    evt.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/tasting`, editFormData3, {
        params: {
          user_account_ID: formData3.user_account_ID,
          wineBottle_id: formData3.wineBottle_id,
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
    <div>
      <h3>Formulaire du vin 3</h3>
      {isEditing ? (
        <button type="button" onClick={handleEditForm3}>
          Modifier form 1
        </button>
      ) : (
        <button type="button" onClick={handleSubmitForm3}>
          Valider form 3
        </button>
      )}
      <div className="slideWrapper">
        <div className="thirdSlide">
          <h3>Vin numéro 3</h3>
          <div className="tabs">
            {/* Tab nav */}
            <ul className="nav">
              <TabNavItem
                title="Robe"
                id="tab1"
                activeTab={activeTabSlide3}
                setActiveTab={setActiveTabSlide3}
              />
              <TabNavItem
                title="Arôme"
                id="tab2"
                activeTab={activeTabSlide3}
                setActiveTab={setActiveTabSlide3}
              />
              <TabNavItem
                title="Saveur"
                id="tab3"
                activeTab={activeTabSlide3}
                setActiveTab={setActiveTabSlide3}
              />
            </ul>
            {/* Content of the tabs */}
            <div className="outlet">
              <TabContent id="tab1" activeTab={activeTabSlide3}>
                <form>
                  <h3>Robe</h3>
                  {/* Option 11 */}
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="jauneOr"
                      checked={formData3.robe === "jauneOr"}
                      onChange={handleChangeData3}
                    />
                    Jaune Or
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="roux"
                      checked={formData3.robe === "roux"}
                      onChange={handleChangeData3}
                    />
                    Roux
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="grenat"
                      checked={formData3.robe === "grenat"}
                      onChange={handleChangeData3}
                    />
                    Grenat
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="violet"
                      checked={formData3.robe === "violet"}
                      onChange={handleChangeData3}
                    />
                    Violet
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="jauneVert"
                      checked={formData3.robe === "jauneVert"}
                      onChange={handleChangeData3}
                    />
                    Jaune Vert
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="dore"
                      checked={formData3.robe === "dore"}
                      onChange={handleChangeData3}
                    />
                    Doré
                  </label>
                  <h3>Intensité des couleurs</h3>
                  {/* Option 12 */}
                  <label>
                    <input
                      type="radio"
                      name="color_intensity"
                      value="claire"
                      checked={formData3.color_intensity === "claire"}
                      onChange={handleChangeData3}
                    />
                    Claire
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="color_intensity"
                      value="moyenne"
                      checked={formData3.color_intensity === "moyenne"}
                      onChange={handleChangeData3}
                    />
                    Moyenne
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="color_intensity"
                      value="trouble"
                      checked={formData3.color_intensity === "trouble"}
                      onChange={handleChangeData3}
                    />
                    Trouble
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="color_intensity"
                      value="opaque"
                      checked={formData3.color_intensity === "opaque"}
                      onChange={handleChangeData3}
                    />
                    Opaque
                  </label>
                </form>
              </TabContent>
              <TabContent id="tab2" activeTab={activeTabSlide3}>
                <form>
                  <h3>Arôme</h3>
                  {/* Option 13 */}
                  <label>
                    <input
                      type="radio"
                      name="arome"
                      value="fruit"
                      checked={formData3.arome === "fruit"}
                      onChange={handleChangeData3}
                    />
                    Fruits
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome"
                      value="fleur"
                      checked={formData3.arome === "fleur"}
                      onChange={handleChangeData3}
                    />
                    Fleurs
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome"
                      value="vegetal"
                      checked={formData3.arome === "vegetal"}
                      onChange={handleChangeData3}
                    />
                    Végétal
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome"
                      value="epice"
                      checked={formData3.arome === "epice"}
                      onChange={handleChangeData3}
                    />
                    Epicé
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome"
                      value="animal"
                      checked={formData3.arome === "animal"}
                      onChange={handleChangeData3}
                    />
                    Animal
                  </label>
                  <h3>Intensité des arômes</h3>
                  {/* Option 14 */}
                  <label>
                    <input
                      type="radio"
                      name="arome_intensity"
                      value="leger"
                      checked={formData3.arome_intensity === "leger"}
                      onChange={handleChangeData3}
                    />
                    Léger
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome_intensity"
                      value="moyen"
                      checked={formData3.arome_intensity === "moyen"}
                      onChange={handleChangeData3}
                    />
                    Moyen
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome_intensity"
                      value="fort"
                      checked={formData3.arome_intensity === "fort"}
                      onChange={handleChangeData3}
                    />
                    Fort
                  </label>
                </form>
              </TabContent>
              <TabContent id="tab3" activeTab={activeTabSlide3}>
                <form>
                  <h3>Saveur</h3>
                  {/* Option 15 */}
                  <label>
                    <input
                      type="radio"
                      name="flavor"
                      value="acide"
                      checked={formData3.flavor === "acide"}
                      onChange={handleChangeData3}
                    />
                    Acide
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="flavor"
                      value="amer"
                      checked={formData3.flavor === "amer"}
                      onChange={handleChangeData3}
                    />
                    Amer
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="flavor"
                      value="sucre"
                      checked={formData3.flavor === "sucre"}
                      onChange={handleChangeData3}
                    />
                    Sucré
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="flavor"
                      value="gras"
                      checked={formData3.flavor === "gras"}
                      onChange={handleChangeData3}
                    />
                    Gras
                  </label>
                  <h3>Note</h3>
                  {[...Array(10)].map((droplet, i) => {
                    const ratingValue = i + 1;

                    return (
                      <label key={ratingValue} className="dropletContainer">
                        <input
                          type="radio"
                          name="rating"
                          value={ratingValue}
                          className="dropletInput"
                          onClick={() => setRating(ratingValue)}
                          onChange={handleChangeData3}
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
                </form>
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FormVin3.propTypes = {
  thirdBottleId: PropTypes.number.isRequired,
};

export default FormVin3;
