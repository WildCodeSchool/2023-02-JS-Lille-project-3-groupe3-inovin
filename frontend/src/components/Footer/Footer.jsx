import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <Link to="https://www.inovin.fr/" className="inovinSiteLink">
        © 2023 INO VIN. Tous droits réservés.{" "}
      </Link>
      <button
        type="button"
        className="legal-link"
        onClick={handleLegalLinkClick}
        onKeyDown={handleLegalLinkClick}
        tabIndex={0}
      >
        Mentions légales
      </button>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3 className="modalTitle">Mentions légales</h3>
            <p className="modalText">
              « L’abus d’alcool est dangereux pour la santé, à consommer avec
              modération ».
            </p>
            <button
              className="close"
              onClick={closeModal}
              onKeyDown={closeModal}
              type="button"
            >
              Lu et accepté
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
export default Footer;
