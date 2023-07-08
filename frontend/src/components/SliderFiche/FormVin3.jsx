import { useState } from "react";
import { BsDropletFill } from "react-icons/bs";
import TabNavItem from "../TabComponents/TabNavItem";
import TabContent from "../TabComponents/TabContent";

function FormVin3() {
  const [activeTabSlide3, setActiveTabSlide3] = useState("tab1");

  const [selectedOption11, setSelectedOption11] = useState();
  const [selectedOption12, setSelectedOption12] = useState();
  const [selectedOption13, setSelectedOption13] = useState();
  const [selectedOption14, setSelectedOption14] = useState();
  const [selectedOption15, setSelectedOption15] = useState();

  const handleOptionChange11 = (event) => {
    setSelectedOption11(event.target.value);
  };

  const handleOptionChange12 = (event) => {
    setSelectedOption12(event.target.value);
  };

  const handleOptionChange13 = (event) => {
    setSelectedOption13(event.target.value);
  };

  const handleOptionChange14 = (event) => {
    setSelectedOption14(event.target.value);
  };

  const handleOptionChange15 = (event) => {
    setSelectedOption15(event.target.value);
  };

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      <h3>Formulaire du vin 3</h3>
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
                      value="jauneOr"
                      checked={selectedOption11 === "jauneOr"}
                      onChange={handleOptionChange11}
                    />
                    Jaune Or
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="roux"
                      checked={selectedOption11 === "roux"}
                      onChange={handleOptionChange11}
                    />
                    Roux
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="grenat"
                      checked={selectedOption11 === "grenat"}
                      onChange={handleOptionChange11}
                    />
                    Grenat
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="violet"
                      checked={selectedOption11 === "violet"}
                      onChange={handleOptionChange11}
                    />
                    Violet
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="jauneVert"
                      checked={selectedOption11 === "jauneVert"}
                      onChange={handleOptionChange11}
                    />
                    Jaune Vert
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="dore"
                      checked={selectedOption11 === "dore"}
                      onChange={handleOptionChange11}
                    />
                    Doré
                  </label>
                  <h3>Intensité des couleurs</h3>
                  {/* Option 12 */}
                  <label>
                    <input
                      type="radio"
                      value="claire"
                      checked={selectedOption12 === "claire"}
                      onChange={handleOptionChange12}
                    />
                    Claire
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="moyenne"
                      checked={selectedOption12 === "moyenne"}
                      onChange={handleOptionChange12}
                    />
                    Moyenne
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="trouble"
                      checked={selectedOption12 === "trouble"}
                      onChange={handleOptionChange12}
                    />
                    Trouble
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="opaque"
                      checked={selectedOption12 === "opaque"}
                      onChange={handleOptionChange12}
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
                      value="fruit"
                      checked={selectedOption13 === "fruit"}
                      onChange={handleOptionChange13}
                    />
                    Fruits
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="fleur"
                      checked={selectedOption13 === "fleur"}
                      onChange={handleOptionChange13}
                    />
                    Fleurs
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="vegetal"
                      checked={selectedOption13 === "vegetal"}
                      onChange={handleOptionChange13}
                    />
                    Végétal
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="epice"
                      checked={selectedOption13 === "epice"}
                      onChange={handleOptionChange13}
                    />
                    Epicé
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="animal"
                      checked={selectedOption13 === "animal"}
                      onChange={handleOptionChange13}
                    />
                    Animal
                  </label>
                  <h3>Intensité des arômes</h3>
                  {/* Option 14 */}
                  <label>
                    <input
                      type="radio"
                      value="leger"
                      checked={selectedOption14 === "leger"}
                      onChange={handleOptionChange14}
                    />
                    Léger
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="moyen"
                      checked={selectedOption14 === "moyen"}
                      onChange={handleOptionChange14}
                    />
                    Moyen
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="fort"
                      checked={selectedOption14 === "fort"}
                      onChange={handleOptionChange14}
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
                      value="acide"
                      checked={selectedOption15 === "acide"}
                      onChange={handleOptionChange15}
                    />
                    Acide
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="amer"
                      checked={selectedOption15 === "amer"}
                      onChange={handleOptionChange15}
                    />
                    Amer
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="sucre"
                      checked={selectedOption15 === "sucre"}
                      onChange={handleOptionChange15}
                    />
                    Sucré
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="gras"
                      checked={selectedOption15 === "gras"}
                      onChange={handleOptionChange15}
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
