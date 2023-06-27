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
          Nom du vin:
          <input type="text" name="name" className="inputAjoutLabel" />
        </label>
        <label className="titleMiniInfo">
          Nom du vin:
          <input type="text" name="name" className="inputAjoutLabel" />
        </label>

        <label className="titleMiniInfo">
          Nom du vin:
          <input type="text" name="name" className="inputAjoutLabel" />
        </label>

        <label className="titleMiniInfo">
          Nom du vin:
          <input type="text" name="name" className="inputAjoutLabel" />
        </label>
        <input
          type="submit"
          value="Ajouter un vin"
          className="boutonSubmitAdmin2"
        />
      </form>
      <div className="containerTraitNoir" />
    </div>
  );
}

export default AdminAjoutVin;
