import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="nav">
      JE SUIS LA NAVBAR YAHAHOUUUUUU !
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/Inscription">Connexion</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
