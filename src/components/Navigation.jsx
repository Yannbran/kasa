// Importation des dépendances nécessaires
import { useMatch, Link } from "react-router-dom";
import "../style/header.scss";

// Définition du composant Navigation
export default function Navigation() {
  // Utilisation du Hook useMatch pour vérifier si l'URL actuelle correspond à "/"
  const matchAccueil = useMatch("/");
  // Utilisation du Hook useMatch pour vérifier si l'URL actuelle correspond à "/About"
  const matchAbout = useMatch("/About");

  // Rendu du composant
  return (
    <nav>
      <div className="nav">
        {/* Création d'un lien vers la page d'accueil ("/") */}
        <Link to="/" className="link">
          {/* Si l'URL actuelle est "/", la classe "link-acceuil" est ajoutée au texte du lien */}
          <p className={matchAccueil ? "link-text link-acceuil" : "link-text"}>
            Accueil
          </p>
        </Link>
        {/* Création d'un lien vers la page "À propos" ("/About") */}
        <Link to="/About" className="link">
          {/* Si l'URL actuelle est "/About", la classe "link-about" est ajoutée au texte du lien */}
          <p className={matchAbout ? "link-text link-about" : "link-text"}>
            À propos
          </p>
        </Link>
      </div>
    </nav>
  );
}