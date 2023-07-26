import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { useContext, useState } from "react";
import signout from "../../assets/images/signout.png";
import ProfileIcone from "../../assets/images/🦆 icon _profile circle_.png";
import LogoInovin from "../../assets/images/logo_inovin.png";
import UserContext from "../../contexts/UserContext";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import lightnav from "../../assets/images/lightnav.png";
import { LightModeContext } from "../../contexts/LightModeContext";

function Navbar() {
  const { firstname } = useContext(UserContext);
  const [disconnect, setDisconnect] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { lightMode, toggleLightMode } = useContext(LightModeContext);
  const inscription = () => {
    navigate("/Inscription");
  };

  const deconnexion = () => {
    setUser(null);
    navigate("/");
    setDisconnect(false);
    window.location.reload();
  };

  const openModal = () => {
    if (user) {
      setDisconnect(true);
    }
  };

  const closeModal = () => {
    setDisconnect(false);
  };

  return (
    <div className={lightMode ? "lightModeNav" : "backgroundHeader"}>
      <div className="navHeader">
        <p className="logo">
          <Link to="/">
            <img
              className={lightMode ? "lightLogo" : "darkLogo"}
              src={LogoInovin}
              alt="Logo Ino Vin"
            />
          </Link>
        </p>
        <h1 className={lightMode ? "InovinlightMode" : "inovinTitle"}>
          Ino Vin
        </h1>
        <div className="connect">
          {firstname ? (
            <h3 className="username">{firstname}</h3>
          ) : (
            <h3 className="username">Invité</h3>
          )}
          <div
            className="loginLinks"
            role="presentation"
            onClick={openModal}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                openModal();
              }
            }}
          >
            {user ? (
              <img
                src={signout}
                alt=""
                role="presentation"
                onClick={deconnexion} // Pass the 'deconnexion' function here
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    deconnexion();
                  }
                }}
                aria-label="Déconnexion"
              />
            ) : (
              <img
                src={lightMode ? lightnav : ProfileIcone}
                className="profileIcone"
                alt="Lien cliquable vers la page d'inscription"
                role="presentation"
                onClick={inscription} // Pass the 'inscription' function here
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    inscription();
                  }
                }}
                aria-label="Inscription"
              />
            )}
            <div className="mode_icons">
              <button type="button" className="icon" onClick={toggleLightMode}>
                {" "}
                <img
                  id={lightMode ? "sun" : "moon"}
                  className="mode"
                  src={lightMode ? sun : moon}
                  alt={lightMode ? "moon" : "sun"}
                />
              </button>
            </div>
          </div>
          {disconnect && (
            <div className="modal">
              <div className="modal-content" id="Mcontent">
                <span className="modalText  Mtext">
                  <p>Êtes-vous sûr(e) de vouloir vous déconnecter ?</p>
                </span>
              </div>
              <div className="modal-actions">
                <div className="modal-btn">
                  <button
                    className="btn_M"
                    id="deconnexionBtn"
                    onClick={deconnexion}
                    type="button"
                    tabIndex="0"
                  >
                    Oui
                  </button>
                  <button
                    type="button"
                    className="btn_M"
                    id="cancel"
                    onClick={closeModal}
                    tabIndex="0"
                  >
                    Non
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
