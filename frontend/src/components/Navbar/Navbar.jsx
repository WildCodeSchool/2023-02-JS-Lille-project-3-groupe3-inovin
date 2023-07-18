import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Navbar.scss";
import { LogingContext } from "../../contexts/LogingContext";
import ProfileIcone from "../../assets/images/🦆 icon _profile circle_.png";
import LogoInovin from "../../assets/images/logo_inovin.png";
import UserContext from "../../contexts/UserContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  const { firstname } = useContext(UserContext);

  const navigate = useNavigate();
  const { isOnline, loging, logout } = useContext(LogingContext);

  const inscription = () => {
    navigate("/Inscription");
  };

  const deconnexion = () => {
    navigate("/");
  };

  const handleLogingLogout = () => {
    if (isOnline) {
      logout();
      deconnexion();
    } else {
      loging();
      inscription();
    }
  };

  return (
    <div className={`navHeader ${theme}`}>
      <p className="logo">
        <Link to="/">
          <img src={LogoInovin} alt="Logo Ino Vin" className="logoLogin" />
        </Link>
      </p>

      <h1 className="inovinTitle" data-text="Ino Vin">
        Ino Vin
      </h1>

      <div>
        {firstname ? (
          <h3 className="username">{firstname}</h3>
        ) : (
          <h3 className="username">Invité</h3>
        )}
        <button
          type="button"
          className="loginLinks"
          onClick={handleLogingLogout}
        >
          <img
            src={ProfileIcone}
            className="profileIcone"
            alt="Lien cliquable vers la page d'inscription"
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
