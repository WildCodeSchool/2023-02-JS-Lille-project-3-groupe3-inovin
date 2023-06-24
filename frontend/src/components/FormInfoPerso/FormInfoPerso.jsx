import axios from "axios";
import "./FormInfoPerso.scss";
import React, { useState } from "react";
import picturePreferences from "../../assets/images/photo2_720.png";

function FormInfoPerso() {
  // use state table user
  const [formInscription, setFormInscription] = useState({
    firstname: "",
    lastname: "",
    birthdate: "",
    address: "",
    ordering: "",
    feedbackRating: "",
    feedBackComment: "",
    user_type: "",
  });

  // useState table account
  const [formAuthentification, setAuthentification] = useState({
    email: "",
    pwd: "",
  });

  const [formPreferenceColor, setFormPreferenceColor] = useState();
  const [formPreferenceArome, setFormPreferenceArome] = useState();
  const [formPreferenceOther, setFormPreferenceOther] = useState();

  const statePreference = {
    stateColor: `${formPreferenceColor}`,
    stateArome: `${formPreferenceArome}`,
    stateOther: `${formPreferenceOther}`,
  };
  // changer données champs inscription
  const handleChangeFormInscription = (evt) => {
    setFormInscription({
      ...formInscription,
      [evt.target.name]: evt.target.value,
    });
  };
  // changer données champs inscription
  const handleChangeFormAuthentification = (evt) => {
    setAuthentification({
      ...formInscription,
      [evt.target.name]: evt.target.value,
    });
  };
  // on chahnge preference
  const handleChangeFormPreferenceColor = (event) => {
    setFormPreferenceColor(event.target.value);
  };
  const handleChangeFormPreferenceArome = (event) => {
    setFormPreferenceArome(event.target.value);
  };
  const handleChangeFormPreferenceOther = (event) => {
    setFormPreferenceOther(event.target.value);
  };
  // checked
  const [checked, setChecked] = React.useState(false);
  // state Checkbox
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  // form submit
  const handleSubmitIndendityUser = async (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/user`, formInscription)
      .then((response) => {
        response.send("Inscription réussie");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSubmitIndendityAccount = async (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/account`, formAuthentification)
      .then((response) => {
        response.send("Inscription réussie");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSubmitIndendityPreference = async (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/preference`, statePreference)
      .then((response) => {
        response.send("Inscription réussie");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSubmitInscription = (evt) => {
    evt.preventDefault();
    handleSubmitIndendityUser(evt);
    handleSubmitIndendityAccount(evt);
    handleSubmitIndendityPreference(evt);
  };
  return (
    <div>
      <form className="form-inscription" onSubmit={handleSubmitInscription}>
        <div className="contenair-identity">
          <h2 className="title-identity">INSCRIPTION</h2>
          <div className="form-inscription-identity-input-contenair">
            <label
              className="form-inscription-idendity-label"
              htmlFor="label-lastname"
            >
              Nom:
              <input
                className="form-inscription-idendity-input-class"
                type="text"
                name="lastname"
                placeholder="Dupont"
                value={formInscription.lastname}
                onChange={handleChangeFormInscription}
              />
            </label>
          </div>
          <div className="form-inscription-identity-input-contenair">
            <label
              className="form-inscription-idendity-label"
              htmlFor="label-firstname"
            >
              Prénom:
              <input
                className="form-inscription-idendity-input-class"
                type="text"
                name="firstname"
                placeholder="Jean"
                value={formInscription.firstname}
                onChange={handleChangeFormInscription}
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
                className="form-inscription-idendity-input-class"
                type="text"
                name="birthdate"
                placeholder="1980-12-29"
                value={formInscription.birthdate}
                onChange={handleChangeFormInscription}
              />
            </label>
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
                type="text"
                name="pwd"
                placeholder="........"
                value={formAuthentification.pwd}
                onChange={handleChangeFormAuthentification}
              />
            </label>
          </div>
          <div className="box-18">
            <input
              className="formbook-input-check"
              type="checkbox"
              id="checkbox-18-yes"
              name="checkbox-18-yes"
              checked={FormInfoPerso.checked}
              required
              onChange={handleCheckboxChange}
            />
            <label className="box-yes" htmlFor="label-color">
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
                <p>rouge</p>
                <input
                  className="formbook-input-check"
                  type="checkbox"
                  id="checkbox-red"
                  name="checkbox-red"
                  value="rouge"
                  checked={formPreferenceColor === "rouge"}
                  onChange={handleChangeFormPreferenceColor}
                />
                <p>blanc</p>
                <input
                  className="formbook-input-check"
                  type="checkbox"
                  id="checkbox-white"
                  name="checkbox-white"
                  value="blanc"
                  checked={formPreferenceColor === "blanc"}
                  onChange={handleChangeFormPreferenceColor}
                />
                <p>rosé</p>
                <input
                  className="formbook-input-check"
                  type="checkbox"
                  id="checkbox-rose"
                  name="checkbox-rose"
                  value="rose"
                  checked={formPreferenceColor === "rose"}
                  onChange={handleChangeFormPreferenceColor}
                />
              </label>
            </div>
            <div className="contenair-arome">
              <h3 className="title-checkbox">Arôme</h3>
              <label className="form-arome-label" htmlFor="label-arome">
                <p>fruité</p>
                <input
                  className="formbook-input-check"
                  type="checkbox"
                  id="checkbox-fruit"
                  name="checkbox-fruit"
                  value="fruite"
                  checked={formPreferenceArome === "fruite"}
                  onChange={handleChangeFormPreferenceArome}
                />
                <p>minéral</p>
                <input
                  className="formbook-input-check"
                  type="checkbox"
                  id="checkbox-mineral"
                  name="checkbox-mineral"
                  value="mineral"
                  checked={formPreferenceArome === "mineral"}
                  onChange={handleChangeFormPreferenceArome}
                />
                <p>boisé</p>
                <input
                  className="formbook-input-check"
                  type="checkbox"
                  id="checkbox-wood"
                  name="checkbox-wood"
                  value="boise"
                  checked={formPreferenceArome === "boise"}
                  onChange={handleChangeFormPreferenceArome}
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
                  value={formPreferenceOther}
                  onChange={handleChangeFormPreferenceOther}
                >
                  Précisez...
                </textarea>
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
  );
}

export default FormInfoPerso;
