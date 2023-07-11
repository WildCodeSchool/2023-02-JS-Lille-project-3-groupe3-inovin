import React, { useState } from "react";
import "./Lexique.scss";

function Lexique() {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="lexique-contenair">
      {/* button open */}
      <button
        className="button-modal-lexique-open"
        type="button"
        onClick={toggle}
      >
        ?
      </button>
      {/* button close */}
      {isShowing && (
        <div className="modal-header-lexique">
          <button // button close
            type="button"
            className="modal-close-button-lexique"
            onClick={toggle}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      {/* Modal */}
      {isShowing && (
        <div className="modal-open">
          <p className="p-lexique">
            Robe (du vin) dégustation : la robe du vin désigne la couleur et
            l’aspect extérieur du vin.
          </p>
          <p className="p-lexique">
            Arôme (du vin) dégustation : odeurs perçues en bouche par la voie
            rétro-nasale
          </p>
          <p className="p-lexique">
            Saveur (du vin) dégustation :Les saveurs d’un vin se révèlent l’une
            après l’autre en fonction de la région de la langue concernée.
          </p>
        </div>
      )}
    </div>
  );
}

export default Lexique;
