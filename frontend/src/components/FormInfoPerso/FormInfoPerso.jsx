import axios from "axios";
import "./FormInfoPerso.scss";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { differenceInYears } from "date-fns";
import picturePreferences from "../../assets/images/photo2_720.png";
import UserContext from "../../contexts/UserContext";
import AnimationPage from "../AnimationPage/AnimationPage";

function FormInfoPerso() {
  // usecontext
  const { setUser, setFirstname } = useContext(UserContext);
  const [ageError, setAgeError] = useState(false);

  // fonction pour get l'id du nouvel inscrit grâce à son account_id, on le stock dans le state userId.
  const getUserId = (accountId, setUserId) => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        params: { account_id: accountId },
      })
      .then((response) => {
        const resultUserId = response.data[0]?.id;
        setUserId(resultUserId);
        setFirstname(response.data[0]?.firstname);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // navigation
  const navigate = useNavigate();

  // const handleClickNext = () => {
  //   navigate("/FicheDegustation");
  // };

  // stock mail & pwd du form pour post
  const [formAuthentification, setFormAuthentifiation] = useState({
    email: "",
    pwd: "",
  });

  // stock accountId after account creation by post method
  const [accountId, setAccountId] = useState();

  // stock userId after user creation by post method
  const [userId, setUserId] = useState();

  // stock user informations du form pour post
  const [formInscription, setFormInscription] = useState({
    firstname: "",
    lastname: "",
    birthdate: "",
    address: "",
    ordering: 0,
    feedbackRating: 0,
    feedBackComment: "",
    user_type: "utilisateur",
    account_id: "",
  });

  // stock preference user du form pour post
  const [formPreference, setFormPreference] = useState({
    color: "",
    arome: "",
    other: "",
    user_id: "",
  });

  // check box +18
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  // get value authent from form and push it in formAuthentification state
  const handleChangeFormAuthentification = (evt) => {
    evt.preventDefault();
    setFormAuthentifiation({
      ...formAuthentification,
      [evt.target.name]: evt.target.value,
    });
  };

  // get value user from form and push it in formInscription state
  const handleChangeFormInscription = (evt) => {
    setFormInscription({
      ...formInscription,
      [evt.target.name]: evt.target.value,
    });
  };

  // get value preference Color from form and push it in formPrefence state
  const handleColorChange = (evt) => {
    const { value } = evt.target;
    setFormPreference((prevState) => ({
      ...prevState,
      color: prevState.color === value ? "" : value, // si c'est deja la couleur de value, "" deselectionne, sinon on met la nouvelle value
    }));
  };

  // get value preference Arome from form and push it in formPrefence state
  const handleAromeChange = (evt) => {
    const { value } = evt.target;
    setFormPreference((prevState) => ({
      ...prevState,
      arome: prevState.arome === value ? "" : value,
    }));
  };

  // get value preference Other (precisions) from form and push it in formPrefence state
  const handleOtherChange = (evt) => {
    const { value } = evt.target;
    setFormPreference((prevState) => ({
      ...prevState,
      other: value,
    }));
  };

  // fonction pour recup l'account_id du nouvel utilisateur qui s'inscrit grâce à son email
  const getAccountId = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/account`, {
        params: { email: formAuthentification.email },
      })
      .then((response) => {
        const resultAccountId = response.data[0]?.id; // permet de récupérer l'id si il y en a un
        setAccountId(resultAccountId);
        setUser(resultAccountId); // update userContext with account_id
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // fonction de soumission du formulaire
  const handleSubmitInscription = (event) => {
    event.preventDefault();
    const birthdate = new Date(formInscription.birthdate);
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

    if (differenceInYears(eighteenYearsAgo, birthdate) < 0) {
      setAgeError(true);
      return;
    }
    // post email et pwd
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/account`, formAuthentification)
      .then(() => {
        getAccountId(); // call la fonction pour récupérer l'account_id du nouvel inscrit grâce à son email
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // fonction pour importer les preferences de l'utilisateur dans la bdd
  const createPreference = () => {
    if (accountId && userId) {
      // on a besoin du user_id (foreign key) et pour l'obtenir on a besoin de l'account_id(foreign key), on verifie donc si on a les deux
      const updatedFormPreference = {
        ...formPreference,
        user_id: userId,
      };
      // Effectuer la requête POST avec le formulaire de préférence
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/preference`,
          updatedFormPreference
        )
        .then()
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          // Navigate to "/FicheDegustation"
          navigate("/FicheDegustation");
        });
    }
  };

  // hook qui permet d'envoyer les données de la table utilisateur vers la bdd dès que l'on a récupérer le account_id (foreign key)
  useEffect(() => {
    if (accountId) {
      const updatedFormInscription = {
        ...formInscription,
        account_id: accountId,
      };
      // Effectuer la requête POST avec le formulaire d'inscription
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/user`,
          updatedFormInscription
        )
        .then(() => {
          getUserId(accountId, setUserId); // Appeler la fonction getUserId avec accountId et setUserId pour récup le user_id qui va servir pour la table préférence et qui vient d'ê créé avec ce .post
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [accountId]); // dès que accountId est mis à jour, (dans la fonction getAccountId) le hook useEffect s'execute.

  // ici, dès qu'on a récupéré le user_id et donc que le state userId a été mis à jour, le hook s'execute et lance la fonction pour .post les preferences
  useEffect(() => {
    createPreference();
  }, [userId]);

  return (
    <AnimationPage>
      <div>
        <form className="form-inscription" onSubmit={handleSubmitInscription}>
          <div className="contenair-identity">
            <h2 className="title-identity">INSCRIPTION</h2>
            <div className="form-inscription-identity-input-contenair">
              <label
                className="form-inscription-idendity-label"
                htmlFor="label-lastname"
              >
                Prénom:
                <input
                  className="form-inscription-idendity-input-class"
                  type="text"
                  name="firstname"
                  placeholder="Jean"
                  value={formInscription.firstname}
                  onChange={handleChangeFormInscription}
                  required
                />
              </label>
            </div>
            <div className="form-inscription-identity-input-contenair">
              <label
                className="form-inscription-idendity-label"
                htmlFor="label-firstname"
              >
                Nom:
                <input
                  className="form-inscription-idendity-input-class"
                  type="text"
                  name="lastname"
                  placeholder="Dupont"
                  value={formInscription.lastname}
                  onChange={handleChangeFormInscription}
                  required
                />
              </label>
            </div>
            <div className="form-inscription-identity-input-contenair">
              <label
                className="form-inscription-idendity-label"
                htmlFor="label-birthdate"
              >
                Date d'anniversaire:
                <input
                  className="form-inscription-idendity-input-class inputDate"
                  type="date"
                  name="birthdate"
                  value={formInscription.birthdate}
                  required
                  onChange={handleChangeFormInscription}
                  style={{
                    color: formInscription.birthdate ? "black" : "gray",
                    fontWeight: formInscription.birthdate ? "normal" : "bold",
                  }}
                />
              </label>
              {ageError ? (
                <div className="modal">
                  <div className="modal-content">
                    <span className="modalText">
                      <p className="ErrorAge">
                        Vous devez avoir au moins 18 ans.
                      </p>
                    </span>
                  </div>
                  <button
                    type="button"
                    className="closeAge"
                    onClick={() => setAgeError(false)}
                  >
                    🗙
                  </button>
                </div>
              ) : null}
            </div>
            <div className="form-inscription-identity-input-contenair">
              <label
                className="form-inscription-idendity-label"
                htmlFor="label-email"
              >
                E-mail:
                <input
                  className="form-inscription-idendity-input-class"
                  type="email"
                  name="email"
                  placeholder="jeandupont@gmail.fr"
                  value={formAuthentification.email}
                  onChange={handleChangeFormAuthentification}
                  required
                />
              </label>
            </div>
            <div className="form-inscription-identity-input-contenair">
              <label
                className="form-inscription-idendity-label"
                htmlFor="label-pwd"
              >
                Mot de Passe:
                <input
                  className="form-inscription-idendity-input-class"
                  type="password"
                  name="pwd"
                  placeholder="........"
                  value={formAuthentification.pwd}
                  onChange={handleChangeFormAuthentification}
                  required
                />
              </label>
            </div>
            <div className="box-18">
              <input
                className="formbook-input-check"
                type="checkbox"
                id="checkbox-18-yes"
                name="checkbox-18-yes"
                required
                onChange={handleCheckboxChange}
              />
              <label className="box-yes" htmlFor="checkbox-18-yes">
                J'ai plus de 18 ans
              </label>
            </div>
          </div>
          <div className="contenair-preference">
            <div className="contenair-preference-g">
              <h2 className="title-preference">PREFERENCES</h2>
              <div className="contenair-color">
                <h3 className="title-checkbox">Color</h3>
                <label className="form-color-label" htmlFor="label-color">
                  <label htmlFor="checkbox-red">rouge</label>
                  <input
                    className="formbook-input-check"
                    type="checkbox"
                    id="checkbox-red"
                    name="checkbox-red"
                    value="rouge"
                    checked={formPreference.color === "rouge"}
                    onChange={handleColorChange}
                  />
                  <label htmlFor="checkbox-white">blanc</label>
                  <input
                    className="formbook-input-check"
                    type="checkbox"
                    id="checkbox-white"
                    name="checkbox-white"
                    value="blanc"
                    checked={formPreference.color === "blanc"}
                    onChange={handleColorChange}
                  />
                  <label htmlFor="checkbox-rose">rosé</label>
                  <input
                    className="formbook-input-check"
                    type="checkbox"
                    id="checkbox-rose"
                    name="checkbox-rose"
                    value="rose"
                    checked={formPreference.color === "rose"}
                    onChange={handleColorChange}
                  />
                </label>
              </div>
              <div className="contenair-arome">
                <h3 className="title-checkbox">Arôme</h3>
                <label className="form-arome-label" htmlFor="label-arome">
                  <label htmlFor="checkbox-fruit">fruité</label>
                  <input
                    className="formbook-input-check"
                    type="checkbox"
                    id="checkbox-fruit"
                    name="checkbox-fruit"
                    value="fruite"
                    checked={formPreference.arome === "fruite"}
                    onChange={handleAromeChange}
                  />
                  <label htmlFor="checkbox-mineral">minéral</label>
                  <input
                    className="formbook-input-check"
                    type="checkbox"
                    id="checkbox-mineral"
                    name="checkbox-mineral"
                    value="mineral"
                    checked={formPreference.arome === "mineral"}
                    onChange={handleAromeChange}
                  />
                  <label htmlFor="checkbox-wood">boisé</label>
                  <input
                    className="formbook-input-check"
                    type="checkbox"
                    id="checkbox-wood"
                    name="checkbox-wood"
                    value="boise"
                    checked={formPreference.arome === "boise"}
                    onChange={handleAromeChange}
                  />
                </label>
              </div>
              <div className="contenair-area-taste">
                <label className="comment">
                  Comment aimes-tu ton vin?
                  <textarea
                    className="comment-taste"
                    id="other-taste"
                    name="other-taste"
                    rows="5"
                    cols="33"
                    placeholder="Précisez..."
                    value={formPreference.other}
                    onChange={handleOtherChange}
                  />
                </label>
              </div>
            </div>
            <div className="contenair-preference-d">
              <img
                className="picture-preference"
                src={picturePreferences}
                alt="wine bottle"
              />
              <button className="button-submit-identity" type="submit">
                <span>JE M'INSCRIS</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </AnimationPage>
  );
}

export default FormInfoPerso;
