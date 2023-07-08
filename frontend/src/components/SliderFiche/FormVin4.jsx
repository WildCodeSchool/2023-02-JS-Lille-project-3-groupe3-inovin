import { useState } from "react";
import { BsDropletFill } from "react-icons/bs";
import TabNavItem from "../TabComponents/TabNavItem";
import TabContent from "../TabComponents/TabContent";

function FormVin4() {
  const [activeTabSlide4, setActiveTabSlide4] = useState("tab1");

  const [selectedOption16, setSelectedOption16] = useState();
  const [selectedOption17, setSelectedOption17] = useState();
  const [selectedOption18, setSelectedOption18] = useState();
  const [selectedOption19, setSelectedOption19] = useState();
  const [selectedOption20, setSelectedOption20] = useState();

  const handleOptionChange16 = (event) => {
    setSelectedOption16(event.target.value);
  };

  const handleOptionChange17 = (event) => {
    setSelectedOption17(event.target.value);
  };

  const handleOptionChange18 = (event) => {
    setSelectedOption18(event.target.value);
  };

  const handleOptionChange19 = (event) => {
    setSelectedOption19(event.target.value);
  };

  const handleOptionChange20 = (event) => {
    setSelectedOption20(event.target.value);
  };

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      <h3>Formulaire du vin 4</h3>
      <div className="slideWrapper">
        <div className="fourthSlide">
          <h3>Vin numéro 4</h3>
          <div className="tabs">
            {/* Tab nav */}
            <ul className="nav">
              <TabNavItem
                title="Robe"
                id="tab1"
                activeTab={activeTabSlide4}
                setActiveTab={setActiveTabSlide4}
              />
              <TabNavItem
                title="Arôme"
                id="tab2"
                activeTab={activeTabSlide4}
                setActiveTab={setActiveTabSlide4}
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
                <form>
                  <h3>Robe</h3>
                  {/* Option 16 */}
                  <label>
                    <input
                      type="radio"
                      value="jauneOr"
                      checked={selectedOption16 === "jauneOr"}
                      onChange={handleOptionChange16}
                    />
                    Jaune Or
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="roux"
                      checked={selectedOption16 === "roux"}
                      onChange={handleOptionChange16}
                    />
                    Roux
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="grenat"
                      checked={selectedOption16 === "grenat"}
                      onChange={handleOptionChange16}
                    />
                    Grenat
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="violet"
                      checked={selectedOption16 === "violet"}
                      onChange={handleOptionChange16}
                    />
                    Violet
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="jauneVert"
                      checked={selectedOption16 === "jauneVert"}
                      onChange={handleOptionChange16}
                    />
                    Jaune Vert
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="dore"
                      checked={selectedOption16 === "dore"}
                      onChange={handleOptionChange16}
                    />
                    Doré
                  </label>
                  <h3>Intensité des couleurs</h3>
                  {/* Option 17 */}
                  <label>
                    <input
                      type="radio"
                      value="claire"
                      checked={selectedOption17 === "claire"}
                      onChange={handleOptionChange17}
                    />
                    Claire
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="moyenne"
                      checked={selectedOption17 === "moyenne"}
                      onChange={handleOptionChange17}
                    />
                    Moyenne
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="trouble"
                      checked={selectedOption17 === "trouble"}
                      onChange={handleOptionChange17}
                    />
                    Trouble
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="opaque"
                      checked={selectedOption17 === "opaque"}
                      onChange={handleOptionChange17}
                    />
                    Opaque
                  </label>
                </form>
              </TabContent>
              <TabContent id="tab2" activeTab={activeTabSlide4}>
                <form>
                  <h3>Arôme</h3>
                  {/* Option 18 */}
                  <label>
                    <input
                      type="radio"
                      value="fruit"
                      checked={selectedOption18 === "fruit"}
                      onChange={handleOptionChange18}
                    />
                    Fruits
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="fleur"
                      checked={selectedOption18 === "fleur"}
                      onChange={handleOptionChange18}
                    />
                    Fleurs
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="vegetal"
                      checked={selectedOption18 === "vegetal"}
                      onChange={handleOptionChange18}
                    />
                    Végétal
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="epice"
                      checked={selectedOption18 === "epice"}
                      onChange={handleOptionChange18}
                    />
                    Epicé
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="animal"
                      checked={selectedOption18 === "animal"}
                      onChange={handleOptionChange18}
                    />
                    Animal
                  </label>
                  <h3>Intensité des arômes</h3>
                  {/* Option 19 */}
                  <label>
                    <input
                      type="radio"
                      value="leger"
                      checked={selectedOption19 === "leger"}
                      onChange={handleOptionChange19}
                    />
                    Léger
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="moyen"
                      checked={selectedOption19 === "moyen"}
                      onChange={handleOptionChange19}
                    />
                    Moyen
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="fort"
                      checked={selectedOption19 === "fort"}
                      onChange={handleOptionChange19}
                    />
                    Fort
                  </label>
                </form>
              </TabContent>
              <TabContent id="tab3" activeTab={activeTabSlide4}>
                <form>
                  <h3>Saveur</h3>
                  {/* Option 20 */}
                  <label>
                    <input
                      type="radio"
                      value="acide"
                      checked={selectedOption20 === "acide"}
                      onChange={handleOptionChange20}
                    />
                    Acide
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="amer"
                      checked={selectedOption20 === "amer"}
                      onChange={handleOptionChange20}
                    />
                    Amer
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="sucre"
                      checked={selectedOption20 === "sucre"}
                      onChange={handleOptionChange20}
                    />
                    Sucré
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="gras"
                      checked={selectedOption20 === "gras"}
                      onChange={handleOptionChange20}
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

export default FormVin4;
