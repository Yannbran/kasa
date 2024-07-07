import Logo from "../assets/images/logo_Kasa_acceuil.png";
import Navigation from "./Navigation";
import "../style/header.scss";
export default function Header() {
  return (
    <header>
      <img className="logo" src={Logo} alt="logo kasa" />
      <Navigation />
    </header>
  );
}
