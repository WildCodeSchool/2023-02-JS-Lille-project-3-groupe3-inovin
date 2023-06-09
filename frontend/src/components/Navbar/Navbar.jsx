import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
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
