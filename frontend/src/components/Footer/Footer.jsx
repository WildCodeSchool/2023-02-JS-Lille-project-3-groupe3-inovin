import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLegalLinkClick = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };
  return (
    <footer className="footerContainer">
      <Link
        to="https://www.inovin.fr/"
        className="inovinSiteLink"
        target="_blank"
      >
        © 2023 INO VIN. Tous droits réservés.{" "}
      </Link>
      <button type="button" onClick={handleThemeToggle}>
        Changer de thème : {theme === "dark" ? "Clair" : "Sombre"}
      </button>
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
