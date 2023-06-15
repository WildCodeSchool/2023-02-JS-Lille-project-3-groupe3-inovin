import { Link, useNavigate } from "react-router-dom";
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
    <div>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>

        <div>
          <button type="button" onClick={handleLogingLogout}>
            {isOnline ? "Déconnexion" : "Inscription"}
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
