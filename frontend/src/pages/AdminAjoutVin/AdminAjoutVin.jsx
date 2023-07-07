import "./AdminAjoutVin.scss";
import axios from "axios";
import ReactModal from "react-modal";
import { useState, useEffect } from "react";

function AdminAjoutVin() {
  /* FIRST PART, POST WINE BOTTLE TO DATABASE */

  const [wineList, setWineList] = useState([]); // array with all wineBottle from the database

  // à chaque fois qu'une bouteille est ajoutée, rempli wineList avec toutes les wine bottle de la database
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/wineBottles`)
      .then((response) => {
        const suggestionsData = response.data;
        setWineList(suggestionsData);
      })
      .catch((error) => {
        console.error("Error fetching wine bottles", error);
      });
  }, [wineList]);

  // stock wine infos du form pour post
  const [formAddWine, setFormAddWine] = useState({
    bottle_name: "",
    region: "",
    color: "",
    year: "",
    cepage: "",
  });

  // state to display (or not) success of adding wineBottle
  const [addWineBottle, setAddWineBottle] = useState(false);

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
      .then((response) => {
        // Get the new bottle added
        const newWineBottle = response.data;
        // update the wineList en ajoutant la nouvelle bouteille
        setWineList([...wineList, newWineBottle]);
        setAddWineBottle(true);
      })

      .catch((err) => {
        console.error(err);
      });
  };

  /* SECOND PART, GET WINE BOTTLE BY NAME IN SEARCH BAR */

  const [searchTerm, setSearchTerm] = useState(""); // stock input value from searchBarre
  const [bottleName, setBottleName] = useState(""); // stock bottle value
  const [bottleRegion, setBottleRegion] = useState(""); // stock bottle value
  const [bottleColor, setBottleColor] = useState(""); // stock bottle value
  const [bottleYear, setBottleYear] = useState(""); // stock bottle value
  const [bottleCepage, setBottleCepage] = useState(""); // stock bottle value
  const [bottleId, setBottleId] = useState(""); // stock bottle id
  const [wineSearchSuggest, setWineSearchSuggest] = useState([]); // array with wineBottle who suggest the name from database in dropdown
  const [showSuggestWine, setShowSuggestWine] = useState(true); // state to show or not the wineSearchSuggest
  const [bottleDeleted, setBottleDeleted] = useState(false); // confirm deleting bottle
  const [deleteError, setDeleteError] = useState(false); // display error message, cannot be deleted

  // function to catch input value with event
  // then filter wineList in a new array to compare the input value (lowerCase) with bottleWine in wineList (bottle_name in lowerCase too)
  // includes for 'including the letter in the name' ? && (charAt(0)) to verify the 1st letter of name equal the first letter in input Value.
  // .map used to keep only the bottle_name because wineList contains others informations
  // then, put the new array in wineSearchSuggest to show the suggest
  const catchValue = (event) => {
    const inputToLower = event.target.value.toLowerCase();

    const newArray = wineList
      .filter((wine) => {
        const bottleNameInList = wine.bottle_name.toLowerCase();
        return (
          bottleNameInList.includes(inputToLower) &&
          bottleNameInList.charAt(0) === inputToLower.charAt(0)
        );
      })
      .map((wine) => wine.bottle_name);

    setWineSearchSuggest(newArray);
  };

  // onchange function to update the search, launch the catchValue function & set to true the dropdown display
  const handleSearch = (event) => {
    catchValue(event);
    setShowSuggestWine(true);
    setSearchTerm(event.target.value);
    setBottleDeleted(false);
    setDeleteError(false);
  };

  // onClick function to hide the dropdown when you click on the bottle wine name show in the dropdown and update the searchBar with the name
  const handleWineBottleClickedDisplay = (wineBottle) => {
    setSearchTerm(wineBottle);
    setShowSuggestWine(false);
  };

  // onClick function from validate button to get the search data from input
  // first : verify if there are letters in input
  // 2nd : axios get the wineBottle in database
  // then : set the stateData with the get response
  const handleClickValidateSearch = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/wineBottle`, {
          params: { bottle_name: searchTerm },
        })
        .then((response) => {
          const bottlesData = response.data[0]; // Access the first element of the first array
          if (bottlesData) {
            const { id, bottle_name, region, color, year, cepage } =
              bottlesData;
            setBottleId(id);
            setBottleName(bottle_name);
            setBottleRegion(region);
            setBottleColor(color);
            setBottleYear(year);
            setBottleCepage(cepage);
          } else {
            setBottleName("Bouteille non trouvée");
            setBottleRegion("Bouteille non trouvée");
            setBottleColor("Bouteille non trouvée");
            setBottleYear("Bouteille non trouvée");
            setBottleCepage("Bouteille non trouvée");
          }
        })
        .catch((error) => {
          console.error("Not found", error);
        });
    } else {
      setBottleName(""); // Reset if searchTerm is empty
    }
  };

  /* DELETE THE WINE BOTTLE */

  const handleDeleteBottle = (event) => {
    event.preventDefault();
    // delete wine informations
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/winebottle/${bottleId}`)
      .then(() => {
        setBottleDeleted(true);
        setDeleteError(false);
      })
      .catch((err) => {
        setBottleDeleted(false);
        setDeleteError(true);
        console.error(err);
      });
  };

  /* MODIFY THE WINE BOTTLE */

  // state to show or not the modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // stock wine infos du form pour post
  const [formModifyWine, setFormModifyWine] = useState({
    bottle_name: "",
    region: "",
    color: "",
    year: "",
    cepage: "",
  });

  // get value from inputs form and push it in formAddWine state
  const handleChangeModifyWine = (event) => {
    event.preventDefault();
    if (modalIsOpen) {
      setFormModifyWine({
        ...formModifyWine,
        [event.target.name]: event.target.value,
      });
    }
  };

  // state to display message when editing is sucessful
  const [modifySuccess, setModifySuccess] = useState(false);

  // when you click on "Modifier le vin" this function change the state of ModalIsOpen from false to true, then modal opening
  const handleModifyBottle = () => {
    setModalIsOpen(true);
    setModifySuccess(false); // reset the message display
  };

  // function to .put the bottle
  const handlePutBottle = (event) => {
    event.preventDefault();
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/wineBottle/${bottleId}`,
        formModifyWine
      )
      .then(setModifySuccess(true))
      .catch((error) => {
        console.error("Edit impossible", error);
      });
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
      {addWineBottle ? (
        <p className="successAdding">La bouteille a bien été ajoutée</p>
      ) : (
        ""
      )}

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
        {searchTerm !== "" && showSuggestWine && (
          <ul className="displaySuggestWineBottle">
            {wineSearchSuggest.map((wineBottle) => (
              <li
                role="presentation"
                key={wineBottle.id}
                className="customListItem"
                onClick={() => handleWineBottleClickedDisplay(wineBottle)}
                onKeyDown={() => handleWineBottleClickedDisplay(wineBottle)}
              >
                <p>{wineBottle}</p>
              </li>
            ))}
          </ul>
        )}
        <button type="button" onClick={handleClickValidateSearch}>
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

      {/* THIRD PART, MODIFY & DELETE */}
      <div className="containerBoutonInfoVin">
        <button
          className="deuxBoutons"
          type="submit"
          value="MODIFIER LE VIN"
          onClick={handleModifyBottle}
        >
          MODIFIER LE VIN
        </button>
        <button
          className="deuxBoutons"
          type="submit"
          value="MODIFIER LE VIN"
          onClick={handleDeleteBottle}
        >
          SUPPRIMER LE VIN
        </button>
      </div>
      {/* 2x message error place */}

      {bottleDeleted ? (
        <p className="deletedBottle">La bouteille a bien été supprimée</p>
      ) : (
        ""
      )}
      {deleteError ? (
        <p className="deletedBottle">
          La bouteille ne peut pas être supprimée. La bouteille est utilisée
          pour la création de recette par au moins un utilisateur.
        </p>
      ) : (
        ""
      )}

      {modalIsOpen && (
        <div className="modalContainer">
          <ReactModal
            isOpen={modalIsOpen}
            contentLabel="Example Modal"
            className="editWineModal"
            onRequestClose={() => setModalIsOpen(false)}
          >
            <div>
              <form className="containerFormModif" onSubmit={handlePutBottle}>
                <h3 className="titleModifyBottle">
                  {" "}
                  Modifiez votre bouteille de vin
                </h3>
                <label className="titleMiniInfo2">
                  Nom du vin:
                  <input
                    type="text"
                    name="bottle_name"
                    className="inputModifLabel"
                    placeholder={bottleName}
                    onChange={handleChangeModifyWine}
                  />
                </label>

                <label className="titleMiniInfo2">
                  Région:
                  <input
                    type="text"
                    name="region"
                    className="inputModifLabel"
                    placeholder={bottleRegion}
                    onChange={handleChangeModifyWine}
                  />
                </label>
                <label className="titleMiniInfo2">
                  Couleur:
                  <input
                    type="text"
                    name="color"
                    className="inputModifLabel"
                    placeholder={bottleColor}
                    onChange={handleChangeModifyWine}
                  />
                </label>

                <label className="titleMiniInfo2">
                  Année:
                  <input
                    type="text"
                    name="year"
                    className="inputModifLabel"
                    placeholder={bottleYear}
                    onChange={handleChangeModifyWine}
                  />
                </label>

                <label className="titleMiniInfo2">
                  Cépage:
                  <input
                    type="text"
                    name="cepage"
                    className="inputModifLabel"
                    placeholder={bottleCepage}
                    onChange={handleChangeModifyWine}
                  />
                </label>
                <input
                  type="submit"
                  value="Modifier un vin"
                  className="boutonSubmitAdmin3"
                />
              </form>
              {modifySuccess ? (
                <p className="successEditing">
                  Modifications effectuées avec succès !{" "}
                </p>
              ) : (
                ""
              )}
            </div>
          </ReactModal>
        </div>
      )}
    </div>
  );
}

export default AdminAjoutVin;
