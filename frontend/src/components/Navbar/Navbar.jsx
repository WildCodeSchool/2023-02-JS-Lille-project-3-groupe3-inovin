import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { useContext } from "react";
import { LogingContext } from "../../contexts/LogingContext";

function Navbar() {
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
    <div className="navHeader">
      <p className="logo">
        <Link to="/">Accueil</Link>
      </p>

      <h1 className="inovinTitle">Ino Vin</h1>

      <div className="loginLinks">
        <button type="button" onClick={handleLogingLogout}>
          {isOnline ? "Déconnexion" : "Inscription"}
        </button>
        Déjà inscrit ?
      </div>
    </div>
  );
}

export default Navbar;
