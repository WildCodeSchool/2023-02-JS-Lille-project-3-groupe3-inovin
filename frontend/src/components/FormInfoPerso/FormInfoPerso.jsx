import axios from "axios";
import "./FormInfoPerso.scss";
import React, { useState } from "react";
import picturePreferences from "../../assets/images/photo2_720.png";

function FormInfoPerso() {
  const [formInscription, setFormInscription] = useState({
    lastname: "",
    firstname: "",
    birthdate: "",
    address: "",
  });
  const hSubmit = async (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/user", formInscription)
      .then(() => {
        <p>""</p>;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const hChange = (evt) => {
    setFormInscription({
      ...formInscription,
      [evt.target.name]: evt.target.value,
    });
  };
  // checked
  const [checked, setChecked] = React.useState(false);
  // state Checkbox
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <form className="form-inscription" onSubmit={hSubmit}>
        <h2 className="title-identity">INSCRIPTION</h2>
        <div className="contenair-identity">
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
                placeholder="Nom"
                value={formInscription.lastname}
                onChange={hChange}
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
                placeholder="Prénom"
                value={formInscription.firstname}
                onChange={hChange}
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
                placeholder="Date d'anniversaire"
                value={formInscription.birthdate}
                onChange={hChange}
              />
            </label>
          </div>
          <div className="form-inscription-identity-input-contenair">
            <label
              className="form-inscription-idendity-label"
              htmlFor="label-address"
            >
              Adresse mail
              <input
                className="form-inscription-idendity-input-class"
                type="text"
                name="address"
                placeholder="Date d'anniversaire"
                value={formInscription.address}
                onChange={hChange}
              />
            </label>
          </div>
        </div>
        <h2 className="title-preference">PREFERENCES</h2>
        <div className="contenair-preference">
          <div className="contenair-preference-g">
            <div className="contenair-color">
              <h3 className="title-checkbox">Color</h3>
              <label className="form-color-label" htmlFor="label-color">
                <p>rouge</p>
                <input
                  className="formbook-input-check"
                  type="checkbox"
                  id="checkbox-red"
                  name="checkbox-red"
                  checked={FormInfoPerso.checked}
                  required
                  onChange={handleCheckboxChange}
                />
                <p>blanc</p>
                <input
                  className="formbook-input-check"
                  type="checkbox"
                  id="checkbox-white"
                  name="checkbox-white"
                  checked={FormInfoPerso.checked}
                  required
                  onChange={handleCheckboxChange}
                />
                <p>rosé</p>
                <input
                  className="formbook-input-check"
                  type="checkbox"
                  id="checkbox-rose"
                  name="checkbox-rose"
                  checked={FormInfoPerso.checked}
                  required
                  onChange={handleCheckboxChange}
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
                  checked={FormInfoPerso.checked}
                  required
                  onChange={handleCheckboxChange}
                />
                <p>minéral</p>
                <input
                  className="formbook-input-check"
                  type="checkbox"
                  id="checkbox-mineral"
                  name="checkbox-mineral"
                  checked={FormInfoPerso.checked}
                  required
                  onChange={handleCheckboxChange}
                />
                <p>boisé</p>
                <input
                  className="formbook-input-check"
                  type="checkbox"
                  id="checkbox-wood"
                  name="checkbox-wood"
                  checked={FormInfoPerso.checked}
                  required
                  onChange={handleCheckboxChange}
                />
              </label>
            </div>
            <div className="contenair-area-taste">
              <label className="comment">
                Comment aimes-tu ton vin?
                <textarea
                  id="other-taste"
                  name="other-taste"
                  rows="5"
                  cols="33"
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
