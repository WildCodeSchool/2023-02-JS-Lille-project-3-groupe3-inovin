import { useState } from "react";
import axios from "axios";
import { BsDropletFill } from "react-icons/bs";
import TabNavItem from "../TabComponents/TabNavItem";
import TabContent from "../TabComponents/TabContent";

function FormVin3() {
  const [activeTabSlide3, setActiveTabSlide3] = useState("tab1");

  const [rating, setRating] = useState(null);

  const [hover, setHover] = useState(null);

  const [formData3, setFormData3] = useState({
    robe: "",
    color_intensity: "",
    arome: "",
    arome_intensity: "",
    flavor: "",
    rating: 8,
    user_id: 5,
    user_account_ID: 3,
    wineBottle_id: 5,
  });

  const handleChangeData3 = (evt) => {
    setFormData3((previousData) => ({
      ...previousData,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleSubmitForm3 = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/tasting`, formData3)
      .then(() => {
        // getUserId();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h3>Formulaire du vin 3</h3>
      <button type="button" onClick={handleSubmitForm3}>
        Envoyer formulaire 3
      </button>
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
                      onChange={handleChangeData3}
                    />
                    Jaune Or
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="roux"
                      onChange={handleChangeData3}
                    />
                    Roux
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="grenat"
                      onChange={handleChangeData3}
                    />
                    Grenat
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="violet"
                      onChange={handleChangeData3}
                    />
                    Violet
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="jauneVert"
                      onChange={handleChangeData3}
                    />
                    Jaune Vert
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="robe"
                      value="dore"
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
                      onChange={handleChangeData3}
                    />
                    Claire
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="color_intensity"
                      value="moyenne"
                      onChange={handleChangeData3}
                    />
                    Moyenne
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="color_intensity"
                      value="trouble"
                      onChange={handleChangeData3}
                    />
                    Trouble
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="color_intensity"
                      value="opaque"
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
                      onChange={handleChangeData3}
                    />
                    Fruits
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome"
                      value="fleur"
                      onChange={handleChangeData3}
                    />
                    Fleurs
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome"
                      value="vegetal"
                      onChange={handleChangeData3}
                    />
                    Végétal
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome"
                      value="epice"
                      onChange={handleChangeData3}
                    />
                    Epicé
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome"
                      value="animal"
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
                      onChange={handleChangeData3}
                    />
                    Léger
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome_intensity"
                      value="moyen"
                      onChange={handleChangeData3}
                    />
                    Moyen
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="arome_intensity"
                      value="fort"
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
                      onChange={handleChangeData3}
                    />
                    Acide
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="flavor"
                      value="amer"
                      onChange={handleChangeData3}
                    />
                    Amer
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="flavor"
                      value="sucre"
                      onChange={handleChangeData3}
                    />
                    Sucré
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="flavor"
                      value="gras"
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

export default FormVin3;
