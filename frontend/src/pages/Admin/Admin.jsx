import "./Admin.scss";

function Admin() {
  return (
    <div className="generalContainer">
      <h2 className="adminTitle">ADMINISTRATION</h2>

      <div className="containerBarRecherche">
        <label htmlFor="Barre de recherche" className="labelRecherche">
          RECHERCHER
        </label>
        <input
          type="search"
          id="barreDeRecherche"
          placeholder="R. par Nom, Mail, Recette"
        />
      </div>

      <div className="titreContainer">
        <h3 className="informationTitre">Informations client</h3>
      </div>

      <div className="containerGeneralUser">
        <div className="containerInfoPerso">
          <h4 className="titleMiniInfo">Nom :</h4>
          <h4 className="titleMiniInfo">Prénom :</h4>
          <h4 className="titleMiniInfo">E-mail :</h4>
          <h4 className="titleMiniInfo">Date de naissance :</h4>
        </div>
        <div className="containerPrefUser">
          <h4 className="titleMiniInfo">Préférence-Couleur : </h4>
          <h4 className="titleMiniInfo">Préférence-Arôm :</h4>
          <h4 className="titleMiniInfo">Préférence-précision-goût :</h4>
        </div>

        <div className="containerTroisRow">
          <div className="containerVinUser">
            <h4 className="titleMiniInfo">Nom vin 1</h4>
            <h4 className="titleMiniInfo">Nom vin 2</h4>
            <h4 className="titleMiniInfo">Nom vin 3</h4>
            <h4 className="titleMiniInfo">Nom vin 4</h4>
          </div>
          <div className="containerDegusUser">
            <h4 className="titleMiniInfo">Dégusté ?</h4>
            <h4 className="titleMiniInfo">Dégusté ?</h4>
            <h4 className="titleMiniInfo">Dégusté ?</h4>
            <h4 className="titleMiniInfo">Dégusté ?</h4>
          </div>
          <div className="containerNoteUser">
            <h4 className="titleMiniInfo">Note ?</h4>
            <h4 className="titleMiniInfo">Note ?</h4>
            <h4 className="titleMiniInfo">Note ?</h4>
            <h4 className="titleMiniInfo">Note ?</h4>
          </div>
        </div>
        <div className="containerModif">
          <h4 className="titleMiniInfo">Nom de la recette: </h4>
          <h4 className="titleMiniInfo">
            RECETTE - nom ingrédient Cépage 1 + %
          </h4>
          <h4 className="titleMiniInfo">
            RECETTE - nom ingrédient Cépage 2 + %
          </h4>
          <h4 className="titleMiniInfo">
            RECETTE - nom ingrédient Cépage 3 + %
          </h4>
        </div>
        <div className="containerBoutonBasPage">
          <button className="boutonSupprimer" type="submit">
            SUPPRIMER
          </button>
          <button className="boutonPdf" type="submit">
            IMPRIMER EN PDF
          </button>
          <button className="boutonAjout" type="submit">
            AJOUTER UN VIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
