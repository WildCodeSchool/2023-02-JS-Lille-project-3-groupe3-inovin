import "./Resume.scss";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bottle from "../../assets/images/bootle_360.png";
import diploma from "../../assets/images/diplome.png";
import fleche from "../../assets/images/fleche_360.png";
import UserContext from "../../contexts/UserContext";
import CommandeModal from "../../components/commandeModal/CommandeModal";

function Resume() {
  // useContext
  const { user } = useContext(UserContext); // account_id of current user from inscription page, you can use it for update database
  // console.log(`resume account_id: ${user} `);
  const [modalOpen, setModalOpen] = useState(false);

  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [birthDay, setBirthDay] = useState();
  const [bottleData, setBottleData] = useState([]);
  const [recipeName, setRecipeName] = useState("");
  const [quantity, setQuantity] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        params: { account_id: `${user}` },
      })
      .then((response) => {
        const {
          firstname,
          lastname,
          percentage,
          address,
          birthdate,
          recipe_name,
        } = response.data[0];
        const array = birthdate.split("T");
        const dateParts = array[0].split("-");
        const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
        setFullName(`${firstname} ${lastname}`);
        setEmailAddress(`${address}`);
        setBirthDay(`${formattedDate}`);
        setRecipeName(`${recipe_name}`);
        setQuantity(`${percentage}`);
        setBottleData(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving composition recipe details:", error);
      });
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
              {/* Need a map over all bottleData with same user_id */}
              {bottleData.map((data, index) => (
                <ul key={data.id || index}>
                  <li>
                    {data.bottle_name} - <span>{quantity}%</span>
                  </li>
                </ul>
              ))}
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
          <span className="bottle_title">{recipeName}</span>
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
