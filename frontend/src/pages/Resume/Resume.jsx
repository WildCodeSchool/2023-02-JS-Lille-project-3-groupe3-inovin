import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Resume.scss";
import { useNavigate } from "react-router-dom";
import bottle from "../../assets/images/bootle_360.png";
import diploma from "../../assets/images/diplome.png";
import fleche from "../../assets/images/fleche_360.png";
import UserContext from "../../contexts/UserContext";
import CommandeModal from "../../components/commandeModal/CommandeModal";

function Resume() {
  const { user } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [birthDay, setBirthDay] = useState("");
  // const [bottleData, setBottleData] = useState([]);
  const [recipeName, setRecipeName] = useState("");

  const navigate = useNavigate();

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
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/relation_recipe`, {
        params: { user },
      })
      .then((response) => {
        const relationData = response.data[0];
        const recipeId = relationData.recipe_id;

        axios
          .get(`${import.meta.env.VITE_BACKEND_URL}/recipe/findById`, {
            params: { recipe_id: recipeId },
          })
          .then((recipeResponse) => {
            const { recipe_name } = recipeResponse.data[0];
            setRecipeName(recipe_name);
          })
          .catch((error) => {
            console.error("Error retrieving recipe info:", error);
          });
      })
      .catch((error) => {
        console.error("Error retrieving relation recipe info:", error);
      });
  };

  // const bottlesInfo = () => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}/compo_recipe`, {
  //       params: { user_id: user },
  //     })
  //     .then((response) => {
  //       const compoRecipeData = response.data;
  //       const promises = compoRecipeData.map((data) =>
  //         axios
  //           .get(`${import.meta.env.VITE_BACKEND_URL}/winebottle`, {
  //             params: { bottle_id: data.wineBottle_id },
  //           })
  //           .then((wineBottleResponse) => {
  //             const wineBottle = wineBottleResponse.data[0];
  //             return {
  //               id: data.id,
  //               percentage: data.percentage,
  //               user_id: data.user_id,
  //               user_account_ID: data.user_account_ID,
  //               wineBottle_id: data.wineBottle_id,
  //               bottle_name: wineBottle.bottle_name,
  //             };
  //           })
  //       );
  //       Promise.all(promises)
  //         .then((result) => {
  //           setBottleData(result);
  //         })
  //         .catch((error) => {
  //           console.error("Error retrieving bottle info:", error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.error("Error retrieving compo recipe info:", error);
  //     });
  // };

  useEffect(() => {
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
    <div className="resume_wrapper">
      <div className="profil">
        <h2 className="profil_title">PROFIL</h2>
        <div className="resume_info">
          <h3 className="personalDetails">{fullName}</h3>
          <h3 className="personalDetails">{emailAddress}</h3>
          <h3 className="personalDetails">{birthDay}</h3>
        </div>
      </div>
      <div className="bottom_recette">
        <div className="recipe_resume">
          <h2 className="recepie_title">RECETTE</h2>
          <div className="recepie_info">
            <span className="personalDetails">
              {/* {bottleData.map((data, index) => (
                <li key={index}>
                  {data.bottle_name} - <span>{data.percentage}%</span>
                </li>
              ))} */}
            </span>
            <p />
            <p />
            <h3 className="personalDetails" id="rName">
              {recipeName}
            </h3>
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
        <div className="bottle_diploma">
          <img id="bottle_resume" src={bottle} alt="" />
          <span className="bottle_title" />
          <div className="halfBackground">
            <img id="diploma" src={diploma} alt="" />
            <p className="diploma_winner">{fullName}</p>
            <button
              type="button"
              className="navigateLinkToResume"
              id="goBack_btn"
              onClick={previousPage}
            >
              {" "}
              <img src={fleche} alt="" className="nextPageArrow" /> Précédent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
