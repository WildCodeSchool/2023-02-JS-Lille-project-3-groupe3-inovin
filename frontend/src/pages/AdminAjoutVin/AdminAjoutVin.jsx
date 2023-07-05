import "./AdminAjoutVin.scss";
import axios from "axios";
import { useState } from "react";

function AdminAjoutVin() {
  // FIRST PART, POST WINE BOTTLE TO DATABASE

  // stock wine infos du form pour post
  const [formAddWine, setFormAddWine] = useState({
    bottle_name: "",
    region: "",
    color: "",
    year: "",
    cepage: "",
  });

  // get value from inputs form and push it in formAddWine state
  const handleChangeAddWine = (event) => {
    event.preventDefault();
    setFormAddWine({
      ...formAddWine,
      [event.target.name]: event.target.value,
    });
  };
  // axios function to post informations
  const handleSubmitBottle = (event) => {
    event.preventDefault();
    // post wine informations
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/winebottle`, formAddWine)
      .then()
      .catch((err) => {
        console.error(err);
      });
  };

  // SECOND PART, GET WINE BOTTLE BY SEARCH BAR

  const [searchTerm, setSearchTerm] = useState("");
  const [bottleName, setBottleName] = useState("");
  const [bottleRegion, setBottleRegion] = useState("");
  const [bottleColor, setBottleColor] = useState("");
  const [bottleYear, setBottleYear] = useState("");
  const [bottleCepage, setBottleCepage] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/wineBottle`, {
          params: { bottle_name: searchTerm },
        })
        .then((response) => {
          const bottlesData = response.data[0]; // Access the first element of the first array
          if (bottlesData) {
            const { bottle_name, region, color, year, cepage } = bottlesData;
            setBottleName(bottle_name);
            setBottleRegion(region);
            setBottleColor(color);
            setBottleYear(year);
            setBottleCepage(cepage);
          } else {
            setBottleName("Bouteille non trouvée");
          }
        })
        .catch((error) => {
          console.error("Not found", error);
        });
    } else {
      setBottleName(""); // Reset if searchTerm is empty
    }
  };

  return (
    <div className="generalContainer">
      {/* First part of page, ADD WINE */}

      <h2 className="adminTitle">ADMINISTRATION</h2>
      <h3 className="titreAjoutVin">Ajout d'un vin :</h3>
      <form className="containerFormAjout" onSubmit={handleSubmitBottle}>
        <label className="titleMiniInfo">
          Nom du vin:
          <input
            type="text"
            name="bottle_name"
            className="inputAjoutLabel"
            onChange={handleChangeAddWine}
          />
        </label>

        <label className="titleMiniInfo">
          Région:
          <input
            type="text"
            name="region"
            className="inputAjoutLabel"
            onChange={handleChangeAddWine}
          />
        </label>
        <label className="titleMiniInfo">
          Couleur:
          <input
            type="text"
            name="color"
            className="inputAjoutLabel"
            onChange={handleChangeAddWine}
          />
        </label>

        <label className="titleMiniInfo">
          Année:
          <input
            type="text"
            name="year"
            className="inputAjoutLabel"
            onChange={handleChangeAddWine}
          />
        </label>

        <label className="titleMiniInfo">
          Cépage:
          <input
            type="text"
            name="cepage"
            className="inputAjoutLabel"
            onChange={handleChangeAddWine}
          />
        </label>
        <input
          type="submit"
          value="Ajouter un vin"
          className="boutonSubmitAdmin2"
        />
      </form>

      {/* Second part of page, SEARCH */}

      <div className="containerTraitNoir" />

      <div className="containerRechercheAjoutVin">
        <h3 className="rechercheAjoutVin">RECHERCHER :</h3>
        <input
          type="search"
          placeholder="Recherche par nom de vin"
          className="inputRechercheVin"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="button" onClick={handleClick}>
          Valider
        </button>
      </div>
      <div className="containerInfoRechercheVin">
        <h3 className="titleMiniInfo">
          Nom de la bouteille de vin : {bottleName}
        </h3>
        <h3 className="titleMiniInfo">Région : {bottleRegion}</h3>
        <h3 className="titleMiniInfo">Couleur : {bottleColor}</h3>
        <h3 className="titleMiniInfo">Année : {bottleYear}</h3>
        <h3 className="titleMiniInfo">Cépage : {bottleCepage}</h3>
      </div>
      <div className="containerBoutonInfoVin">
        <button className="deuxBoutons" type="submit" value="MODIFIER LE VIN">
          MODIFIER LE VIN
        </button>
        <button className="deuxBoutons" type="submit" value="MODIFIER LE VIN">
          SUPPRIMER LE VIN
        </button>
      </div>
    </div>
  );
}

export default AdminAjoutVin;
