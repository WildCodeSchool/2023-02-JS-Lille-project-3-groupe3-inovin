import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Lexique from "../Lexique/Lexique";
// import UserContext from "../../contexts/UserContext";
import BottleContext from "../../contexts/BottleContext";
import "./SliderFiche.scss";
import FormVin1 from "./FormVin1";
import FormVin2 from "./FormVin2";
import FormVin3 from "./FormVin3";
import FormVin4 from "./FormVin4";

function SliderFiche() {
  // useContext
  // const { user } = useContext(UserContext); // account_id of current user from inscription page, you can use it for update database

  const { wineBottleId } = useContext(BottleContext);
  // wineBottleId est un tableau, il faut le destructurer pour envoyer une valeur unique en props
  const [firstBottleId, secondBottleId, thirdBottleId, fourthBottleId] =
    wineBottleId;

  // navigation entre les formulaires
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const forms = [
    <FormVin1 firstBottleId={firstBottleId} />,
    <FormVin2 secondBottleId={secondBottleId} />,
    <FormVin3 thirdBottleId={thirdBottleId} />,
    <FormVin4 fourthBottleId={fourthBottleId} />,
  ];

  const nextForm = () => {
    setCurrentFormIndex(currentFormIndex + 1);
  };

  const previousForm = () => {
    setCurrentFormIndex(currentFormIndex - 1);
  };

  const showActualForm = () => {
    const actualForm = forms[currentFormIndex];
    return actualForm || null;
  };

  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate("/AtelierCreation");
  };

  return (
    <div className="carouselWrapper">
      {showActualForm()}
      {currentFormIndex > 0 && (
        <button type="button" onClick={previousForm}>
          Revenir au formulaire précédent
        </button>
      )}
      {currentFormIndex < forms.length - 1 && (
        <button type="button" onClick={nextForm}>
          Form Suivant
        </button>
      )}

      <Lexique />

      <button type="button" onClick={handleClickNext}>
        Page Suivante
      </button>
    </div>
  );
}

export default SliderFiche;
