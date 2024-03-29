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
          <p className="p-lexique">Robe: Couleur du vin</p>
          <p className="p-lexique">Arôme: Parfum au nez</p>
          <p className="p-lexique">Saveur: Une sensation gustative</p>
        </div>
      )}
    </div>
  );
}

export default Lexique;
