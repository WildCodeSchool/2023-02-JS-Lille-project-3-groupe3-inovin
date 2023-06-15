import React, { useState } from "react";
import "./Footer.scss";

function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleLegalLinkClick = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <footer>
      <p>
        © 2023 INO VIN. Tous droits réservés.{" "}
        <button
          type="button"
          className="legal-link"
          onClick={handleLegalLinkClick}
          onKeyDown={handleLegalLinkClick}
          tabIndex={0}
        >
          Mention légale
        </button>
      </p>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="close"
              onClick={closeModal}
              onKeyDown={closeModal}
              type="button"
            >
              &times;
            </button>

            <h3>Mentions légales</h3>
            <p>Voici les mentions légales sur la consommation d'alcool...</p>
          </div>
        </div>
      )}
    </footer>
  );
}
export default Footer;
