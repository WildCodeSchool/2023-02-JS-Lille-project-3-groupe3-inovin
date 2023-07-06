import React from "react";
import PropTypes from "prop-types";
import "./ModalLexique.scss";

function ModalLexique({ isShowing, hide }) {
  return isShowing ? ( // if Showing true show modal
    <div className="modal-lexique">
      <div className="modal-header-lexique">
        <button
          type="button"
          className="modal-close-button-lexique"
          onClick={hide}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <h4 className="modal-lexique-title">Lexique</h4>
      <div className="modal-lexique-content">
        <p className="color-lexique">
          Robe (du vin) dégustation : la robe du vin désigne la couleur et
          l’aspect extérieur du vin.
        </p>
        <p className="arome-lexique">
          Arôme (du vin) dégustation : odeurs perçues en bouche par la voie
          rétro-nasale
        </p>
        <p className="taste-lexique">
          {" "}
          Saveur (du vin) dégustation :Les saveurs d’un vin se révèlent l’une
          après l’autre en fonction de la région de la langue concernée.{" "}
        </p>
      </div>
    </div>
  ) : null;
}
ModalLexique.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};
export default ModalLexique;
