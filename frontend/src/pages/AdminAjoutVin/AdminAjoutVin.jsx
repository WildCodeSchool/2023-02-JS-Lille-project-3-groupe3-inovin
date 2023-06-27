import "./AdminAjoutVin.scss";

function AdminAjoutVin() {
  return (
    <div className="generalContainer">
      <h2 className="adminTitle">ADMINISTRATION</h2>
      <h3 className="titreAjoutVin">Ajout d'un vin :</h3>
      <form className="containerFormAjout">
        <label className="titleMiniInfo">
          Nom du vin:
          <input type="text" name="name" className="inputAjoutLabel" />
        </label>

        <label className="titleMiniInfo">
          Région:
          <input type="text" name="name" className="inputAjoutLabel" />
        </label>
        <label className="titleMiniInfo">
          Couleur:
          <input type="text" name="name" className="inputAjoutLabel" />
        </label>

        <label className="titleMiniInfo">
          Année:
          <input type="text" name="name" className="inputAjoutLabel" />
        </label>

        <label className="titleMiniInfo">
          Cépage:
          <input type="text" name="name" className="inputAjoutLabel" />
        </label>
        <input
          type="submit"
          value="Ajouter un vin"
          className="boutonSubmitAdmin2"
        />
      </form>

      <div className="containerTraitNoir" />

      <div className="containerRechercheAjoutVin">
        <h3 className="rechercheAjoutVin">RECHERCHER :</h3>
        <input
          type="search"
          placeholder="R. par nom de vin"
          className="inputRechercheVin"
        />
      </div>
      <div className="containerInfoRechercheVin">
        <h3 className="titleMiniInfo">Nom de la bouteille de vin :</h3>
        <h3 className="titleMiniInfo">Région :</h3>
        <h3 className="titleMiniInfo">Couleur :</h3>
        <h3 className="titleMiniInfo">Année :</h3>
        <h3 className="titleMiniInfo">Cépage :</h3>
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
