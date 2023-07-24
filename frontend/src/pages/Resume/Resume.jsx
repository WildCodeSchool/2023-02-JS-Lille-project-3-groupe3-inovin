import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Resume.scss";
import { useNavigate, useLocation } from "react-router-dom";
import bottle from "../../assets/images/bootle_360.png";
import diploma from "../../assets/images/diplome.png";
import fleche from "../../assets/images/fleche_360.png";
import UserContext from "../../contexts/UserContext";
import BottleContext from "../../contexts/BottleContext";
import CommandeModal from "../../components/commandeModal/CommandeModal";
import AnimationPage from "../../components/AnimationPage/AnimationPage";

function Resume() {
  const { user } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [recipeName, setRecipeName] = useState({ recipe_name: "" });
  const { wineBottleName } = useContext(BottleContext);
  const navigate = useNavigate();

  const location = useLocation();
  const recipeTitle = location.state;

  const getUserInfo = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        params: { account_id: user },
      })
      .then((response) => {
        const { firstname, lastname, birthdate } = response.data[0];
        const array = birthdate.split("T");
        const dateParts = array[0].split("-");
        const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
        setFullName(`${firstname} ${lastname}`);
        setBirthDay(formattedDate);
      })
      .catch((error) => {
        console.error("Error retrieving user info:", error);
      });
  };

  const emailInfo = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/account/findById`, {
        params: { account_id: user },
      })
      .then((response) => {
        const { email } = response.data[0];
        setEmailAddress(email);
      })
      .catch((error) => {
        console.error("Error retrieving recipe info:", error);
      });
  };
  const recipeInfo = () => {
    setRecipeName(recipeTitle);
  };

  useEffect(() => {
    recipeInfo();
    getUserInfo();
    emailInfo();
    recipeInfo();
  }, []);

  const previousPage = () => {
    navigate("/livredor");
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <AnimationPage>
      <div className="resume_wrapper">
        <div className="profil">
          <h2 className="profil_title">PROFIL</h2>
          <div className="resume_info">
            <h3 className="personalDetails">{fullName}</h3>
            <h3 className="personalDetails">{emailAddress}</h3>
            <h3 className="personalDetails">{birthDay}</h3>
          </div>
        </div>

        <div className="recipe_resume">
          <h2 className="recepie_title">RECETTE</h2>
          <div className="recepie_info">
            <span className="personalDetails">
              {wineBottleName.map((name, index) => (
                <li className="nameBottle" key={index}>
                  {name}
                </li>
              ))}
            </span>
            <p />
            <p />
          </div>
          <button
            className="button-submit-identity"
            id="commande_btn"
            type="submit"
            onClick={openModal}
          >
            Commander
          </button>
          {modalOpen && (
            <CommandeModal
              setOpenModal={setModalOpen}
              fullName={fullName}
              user={user}
            />
          )}
        </div>
        <div className="containBottleTitle">
          <h4 className="bottle_title"> {recipeName.recipe_name} </h4>
        </div>
        <div className="halfBackground">
          <img id="bottle_resume" src={bottle} alt="" />

          <img id="diploma" src={diploma} alt="" />
          <p className="diploma_winner">{fullName}</p>
          <button
            type="button"
            className="navigateLinkToResume"
            id="goBack_btn"
            onClick={previousPage}
          >
            {" "}
            <img src={fleche} alt="" className="previousPageArrow" /> Précédent
          </button>
        </div>
      </div>
    </AnimationPage>
  );
}

export default Resume;
