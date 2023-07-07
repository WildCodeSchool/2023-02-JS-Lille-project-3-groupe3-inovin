import { useState } from "react";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import TabNavItem from "../TabComponents/TabNavItem";
import TabContent from "../TabComponents/TabContent";
import Lexique from "../Lexique/Lexique";
// import UserContext from "../../contexts/UserContext";

import "./SliderFiche.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function SliderFiche() {
  // useContext
  // const [user] = useContext(UserContext); // account_id of current user from inscription page, you can use it for update database
  // console.log(`slider fiche account_id: ${user} `);

  // navigate
  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate("/AtelierCreation");
  };
  // Functions ton handle the Tab Nav
  const [activeTabSlide1, setActiveTabSlide1] = useState("tab1");
  const [activeTabSlide2, setActiveTabSlide2] = useState("tab1");
  const [activeTabSlide3, setActiveTabSlide3] = useState("tab1");
  const [activeTabSlide4, setActiveTabSlide4] = useState("tab1");

  // Functions to handle the checkbox choices

  // First Slide Choices
  const [selectedOption1, setSelectedOption1] = useState();
  const [selectedOption2, setSelectedOption2] = useState();
  const [selectedOption3, setSelectedOption3] = useState();
  const [selectedOption4, setSelectedOption4] = useState();
  const [selectedOption5, setSelectedOption5] = useState();

  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleOptionChange3 = (event) => {
    setSelectedOption3(event.target.value);
  };

  const handleOptionChange4 = (event) => {
    setSelectedOption4(event.target.value);
  };

  const handleOptionChange5 = (event) => {
    setSelectedOption5(event.target.value);
  };

  // Second Slide Choices

  const [selectedOption6, setSelectedOption6] = useState();
  const [selectedOption7, setSelectedOption7] = useState();
  const [selectedOption8, setSelectedOption8] = useState();
  const [selectedOption9, setSelectedOption9] = useState();
  const [selectedOption10, setSelectedOption10] = useState();

  const handleOptionChange6 = (event) => {
    setSelectedOption6(event.target.value);
  };

  const handleOptionChange7 = (event) => {
    setSelectedOption7(event.target.value);
  };

  const handleOptionChange8 = (event) => {
    setSelectedOption8(event.target.value);
  };

  const handleOptionChange9 = (event) => {
    setSelectedOption9(event.target.value);
  };

  const handleOptionChange10 = (event) => {
    setSelectedOption10(event.target.value);
  };

  // Third Slide Choices

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

  // Fourth Slide Choices

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

  // Functions to handle the note/10
  const [note, setNote] = useState(0);

  const handleChangeNoteSlide1 = (event) => {
    const value = parseInt(event.target.value, 10);
    setNote(value);
  };

  return (
    <div className="carouselWrapper">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        transitionTime={1000}
      >
        {/* PREMIER SLIDER */}

        <div className="slideWrapper">
          <div className="firstSlide">
            <h3>Vin numéro 1</h3>
            <div className="tabs">
              {/* Tab nav */}
              <ul className="nav">
                <TabNavItem
                  title="Robe"
                  id="tab1"
                  activeTab={activeTabSlide1}
                  setActiveTab={setActiveTabSlide1}
                />
                <TabNavItem
                  title="Arôme"
                  id="tab2"
                  activeTab={activeTabSlide1}
                  setActiveTab={setActiveTabSlide1}
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
                  <form>
                    <h3>Robe</h3>
                    {/* Option 1 */}
                    <label>
                      <input
                        type="radio"
                        value="jauneOr"
                        checked={selectedOption1 === "jauneOr"}
                        onChange={handleOptionChange1}
                      />
                      Jaune Or
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="roux"
                        checked={selectedOption1 === "roux"}
                        onChange={handleOptionChange1}
                      />
                      Roux
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="grenat"
                        checked={selectedOption1 === "grenat"}
                        onChange={handleOptionChange1}
                      />
                      Grenat
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="violet"
                        checked={selectedOption1 === "violet"}
                        onChange={handleOptionChange1}
                      />
                      Violet
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="jauneVert"
                        checked={selectedOption1 === "jauneVert"}
                        onChange={handleOptionChange1}
                      />
                      Jaune Vert
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="dore"
                        checked={selectedOption1 === "dore"}
                        onChange={handleOptionChange1}
                      />
                      Doré
                    </label>
                    <h3>Intensité des couleurs</h3>
                    {/* Option 2 */}
                    <label>
                      <input
                        type="radio"
                        value="claire"
                        checked={selectedOption2 === "claire"}
                        onChange={handleOptionChange2}
                      />
                      Claire
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="moyenne"
                        checked={selectedOption2 === "moyenne"}
                        onChange={handleOptionChange2}
                      />
                      Moyenne
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="trouble"
                        checked={selectedOption2 === "trouble"}
                        onChange={handleOptionChange2}
                      />
                      Trouble
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="opaque"
                        checked={selectedOption2 === "opaque"}
                        onChange={handleOptionChange2}
                      />
                      Opaque
                    </label>
                  </form>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTabSlide1}>
                  <form>
                    <h3>Arôme</h3>
                    {/* Option 3 */}
                    <label>
                      <input
                        type="radio"
                        value="fruit"
                        checked={selectedOption3 === "fruit"}
                        onChange={handleOptionChange3}
                      />
                      Fruits
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="fleur"
                        checked={selectedOption3 === "fleur"}
                        onChange={handleOptionChange3}
                      />
                      Fleurs
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="vegetal"
                        checked={selectedOption3 === "vegetal"}
                        onChange={handleOptionChange3}
                      />
                      Végétal
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="epice"
                        checked={selectedOption3 === "epice"}
                        onChange={handleOptionChange3}
                      />
                      Epicé
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="animal"
                        checked={selectedOption3 === "animal"}
                        onChange={handleOptionChange3}
                      />
                      Animal
                    </label>
                    <h3>Intensité des arômes</h3>
                    {/* Option 4 */}
                    <label>
                      <input
                        type="radio"
                        value="leger"
                        checked={selectedOption4 === "leger"}
                        onChange={handleOptionChange4}
                      />
                      Léger
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="moyen"
                        checked={selectedOption4 === "moyen"}
                        onChange={handleOptionChange4}
                      />
                      Moyen
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="fort"
                        checked={selectedOption4 === "fort"}
                        onChange={handleOptionChange4}
                      />
                      Fort
                    </label>
                  </form>
                </TabContent>
                <TabContent id="tab3" activeTab={activeTabSlide1}>
                  <form>
                    <h3>Saveur</h3>
                    {/* Option 5 */}
                    <label>
                      <input
                        type="radio"
                        value="acide"
                        checked={selectedOption5 === "acide"}
                        onChange={handleOptionChange5}
                      />
                      Acide
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="amer"
                        checked={selectedOption5 === "amer"}
                        onChange={handleOptionChange5}
                      />
                      Amer
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="sucre"
                        checked={selectedOption5 === "sucre"}
                        onChange={handleOptionChange5}
                      />
                      Sucré
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="gras"
                        checked={selectedOption5 === "gras"}
                        onChange={handleOptionChange5}
                      />
                      Gras
                    </label>
                    <h3>Note</h3>
                    <label htmlFor="note">Note (sur 10) :</label>
                    <input
                      type="number"
                      id="note"
                      min="0"
                      max="10"
                      value={note}
                      onChange={handleChangeNoteSlide1}
                    />
                  </form>
                </TabContent>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND SLIDER  */}

        <div className="slideWrapper">
          <div className="secondSlide">
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
                    {/* Option 6 */}
                    <label>
                      <input
                        type="radio"
                        value="jauneOr"
                        checked={selectedOption6 === "jauneOr"}
                        onChange={handleOptionChange6}
                      />
                      Jaune Or
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="roux"
                        checked={selectedOption6 === "roux"}
                        onChange={handleOptionChange6}
                      />
                      Roux
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="grenat"
                        checked={selectedOption6 === "grenat"}
                        onChange={handleOptionChange6}
                      />
                      Grenat
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="violet"
                        checked={selectedOption6 === "violet"}
                        onChange={handleOptionChange6}
                      />
                      Violet
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="jauneVert"
                        checked={selectedOption6 === "jauneVert"}
                        onChange={handleOptionChange6}
                      />
                      Jaune Vert
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="dore"
                        checked={selectedOption6 === "dore"}
                        onChange={handleOptionChange6}
                      />
                      Doré
                    </label>
                    <h3>Intensité des couleurs</h3>
                    {/* Option 7 */}
                    <label>
                      <input
                        type="radio"
                        value="claire"
                        checked={selectedOption7 === "claire"}
                        onChange={handleOptionChange7}
                      />
                      Claire
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="moyenne"
                        checked={selectedOption7 === "moyenne"}
                        onChange={handleOptionChange7}
                      />
                      Moyenne
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="trouble"
                        checked={selectedOption7 === "trouble"}
                        onChange={handleOptionChange7}
                      />
                      Trouble
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="opaque"
                        checked={selectedOption7 === "opaque"}
                        onChange={handleOptionChange7}
                      />
                      Opaque
                    </label>
                  </form>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTabSlide2}>
                  <form>
                    <h3>Arôme</h3>
                    {/* Option 8 */}
                    <label>
                      <input
                        type="radio"
                        value="fruit"
                        checked={selectedOption8 === "fruit"}
                        onChange={handleOptionChange8}
                      />
                      Fruits
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="fleur"
                        checked={selectedOption8 === "fleur"}
                        onChange={handleOptionChange8}
                      />
                      Fleurs
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="vegetal"
                        checked={selectedOption8 === "vegetal"}
                        onChange={handleOptionChange8}
                      />
                      Végétal
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="epice"
                        checked={selectedOption8 === "epice"}
                        onChange={handleOptionChange8}
                      />
                      Epicé
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="animal"
                        checked={selectedOption8 === "animal"}
                        onChange={handleOptionChange8}
                      />
                      Animal
                    </label>
                    <h3>Intensité des arômes</h3>
                    {/* Option 9 */}
                    <label>
                      <input
                        type="radio"
                        value="leger"
                        checked={selectedOption9 === "leger"}
                        onChange={handleOptionChange9}
                      />
                      Léger
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="moyen"
                        checked={selectedOption9 === "moyen"}
                        onChange={handleOptionChange9}
                      />
                      Moyen
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="fort"
                        checked={selectedOption9 === "fort"}
                        onChange={handleOptionChange9}
                      />
                      Fort
                    </label>
                  </form>
                </TabContent>
                <TabContent id="tab3" activeTab={activeTabSlide2}>
                  <form>
                    <h3>Saveur</h3>
                    {/* Option 10 */}
                    <label>
                      <input
                        type="radio"
                        value="acide"
                        checked={selectedOption10 === "acide"}
                        onChange={handleOptionChange10}
                      />
                      Acide
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="amer"
                        checked={selectedOption10 === "amer"}
                        onChange={handleOptionChange10}
                      />
                      Amer
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="sucre"
                        checked={selectedOption10 === "sucre"}
                        onChange={handleOptionChange10}
                      />
                      Sucré
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="gras"
                        checked={selectedOption10 === "gras"}
                        onChange={handleOptionChange10}
                      />
                      Gras
                    </label>
                    <h3>Note</h3>
                    <label htmlFor="note">Note (sur 10) :</label>
                    <input
                      type="number"
                      id="note"
                      min="0"
                      max="10"
                      value={note}
                      onChange={handleChangeNoteSlide1}
                    />
                  </form>
                </TabContent>
              </div>
            </div>
          </div>
        </div>

        {/* THIRD SLIDER */}

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
                    <label htmlFor="note">Note (sur 10) :</label>
                    <input
                      type="number"
                      id="note"
                      min="0"
                      max="10"
                      value={note}
                      onChange={handleChangeNoteSlide1}
                    />
                  </form>
                </TabContent>
              </div>
            </div>
          </div>
        </div>

        {/* FOURTH SLIDER  */}

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
                    <label htmlFor="note">Note (sur 10) :</label>
                    <input
                      type="number"
                      id="note"
                      min="0"
                      max="10"
                      value={note}
                      onChange={handleChangeNoteSlide1}
                    />
                  </form>
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <Lexique />
      <button type="button" onClick={handleClickNext}>
        next page
      </button>

    </div>
  );
}

export default SliderFiche;
