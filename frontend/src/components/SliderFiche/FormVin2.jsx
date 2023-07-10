import { useState } from "react";
// import UserContext from "../../contexts/UserContext";
import axios from "axios";
import { BsDropletFill } from "react-icons/bs";
import TabNavItem from "../TabComponents/TabNavItem";
import TabContent from "../TabComponents/TabContent";

function FormVin2() {
  const [activeTabSlide2, setActiveTabSlide2] = useState("tab1");
  const [isEditing, setIsEditing] = useState(false);
  // const { user } = useContext(UserContext);

  const [rating, setRating] = useState(null);

  const [hover, setHover] = useState(null);

  const [formData2, setFormData2] = useState({
    robe: "",
    color_intensity: "",
    arome: "",
    arome_intensity: "",
    flavor: "",
    rating,
    user_id: 5,
    user_account_ID: 3,
    wineBottle_id: 6,
  });

  const [editFormData2, setEditFormData2] = useState({
    robe: "",
    color_intensity: "",
    arome: "",
    arome_intensity: "",
    flavor: "",
    rating,
    user_id: 5,
    user_account_ID: 3,
    wineBottle_id: 6,
  });

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
    <div>
      <h3>Formulaire du vin 2</h3>
      {isEditing ? (
        <button type="button" onClick={handleEditForm2}>
          Modifier form 2
        </button>
      ) : (
        <button type="button" onClick={handleSubmitForm2}>
          Valider form 2
        </button>
      )}
      <div className="slideWrapper">
        <div className="thirdSlide">
          <h3>Vin numéro 2</h3>
          <div className="tabs">
            {/* Tab nav */}
            <ul className="nav">
              <TabNavItem
                title="Robe"
                id="tab1"
                activeTab={activeTabSlide2}
                setActiveTab={setActiveTabSlide2}
              />
              <TabNavItem
                title="Arôme"
                id="tab2"
                activeTab={activeTabSlide2}
                setActiveTab={setActiveTabSlide2}
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
                <form>
                  <h3>Robe</h3>
                  {/* Option 11 */}
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="jauneOr"
                      checked={formData2.robe === "jauneOr"}
                      onChange={handleChangeData2}
                    />
                    Jaune Or
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="roux"
                      checked={formData2.robe === "roux"}
                      onChange={handleChangeData2}
                    />
                    Roux
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="grenat"
                      checked={formData2.robe === "grenat"}
                      onChange={handleChangeData2}
                    />
                    Grenat
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="violet"
                      checked={formData2.robe === "violet"}
                      onChange={handleChangeData2}
                    />
                    Violet
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="jauneVert"
                      checked={formData2.robe === "jauneVert"}
                      onChange={handleChangeData2}
                    />
                    Jaune Vert
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="dore"
                      checked={formData2.robe === "dore"}
                      onChange={handleChangeData2}
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
                      checked={formData2.color_intensity === "claire"}
                      onChange={handleChangeData2}
                    />
                    Claire
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="color_intensity"
                      value="moyenne"
                      checked={formData2.color_intensity === "moyenne"}
                      onChange={handleChangeData2}
                    />
                    Moyenne
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="color_intensity"
                      value="trouble"
                      checked={formData2.color_intensity === "trouble"}
                      onChange={handleChangeData2}
                    />
                    Trouble
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="color_intensity"
                      value="opaque"
                      checked={formData2.color_intensity === "opaque"}
                      onChange={handleChangeData2}
                    />
                    Opaque
                  </label>
                </form>
              </TabContent>
              <TabContent id="tab2" activeTab={activeTabSlide2}>
                <form>
                  <h3>Arôme</h3>
                  {/* Option 13 */}
                  <label>
                    <input
                      type="radio"
                      name="arome"
                      value="fruit"
                      checked={formData2.arome === "fruit"}
                      onChange={handleChangeData2}
                    />
                    Fruits
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome"
                      value="fleur"
                      checked={formData2.arome === "fleur"}
                      onChange={handleChangeData2}
                    />
                    Fleurs
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome"
                      value="vegetal"
                      checked={formData2.arome === "vegetal"}
                      onChange={handleChangeData2}
                    />
                    Végétal
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome"
                      value="epice"
                      checked={formData2.arome === "epice"}
                      onChange={handleChangeData2}
                    />
                    Epicé
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome"
                      value="animal"
                      checked={formData2.arome === "animal"}
                      onChange={handleChangeData2}
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
                      checked={formData2.arome_intensity === "leger"}
                      onChange={handleChangeData2}
                    />
                    Léger
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome_intensity"
                      value="moyen"
                      checked={formData2.arome_intensity === "moyen"}
                      onChange={handleChangeData2}
                    />
                    Moyen
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome_intensity"
                      value="fort"
                      checked={formData2.arome_intensity === "fort"}
                      onChange={handleChangeData2}
                    />
                    Fort
                  </label>
                </form>
              </TabContent>
              <TabContent id="tab3" activeTab={activeTabSlide2}>
                <form>
                  <h3>Saveur</h3>
                  {/* Option 15 */}
                  <label>
                    <input
                      type="radio"
                      name="flavor"
                      value="acide"
                      checked={formData2.flavor === "acide"}
                      onChange={handleChangeData2}
                    />
                    Acide
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="flavor"
                      value="amer"
                      checked={formData2.flavor === "amer"}
                      onChange={handleChangeData2}
                    />
                    Amer
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="flavor"
                      value="sucre"
                      checked={formData2.flavor === "sucre"}
                      onChange={handleChangeData2}
                    />
                    Sucré
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="flavor"
                      value="gras"
                      checked={formData2.flavor === "gras"}
                      onChange={handleChangeData2}
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
                </form>
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormVin2;
