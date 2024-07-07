import React, { useState, useEffect } from "react";
import Foot from "../assets/images/D_Footer.png";
import FootMobile from "../assets/images/D_Footer_mobile.png";
import "../style/footer.scss";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer>
      <img
        src={isMobile ? FootMobile : Foot}
        alt="pied de page"
        className="footer"
      />
    </footer>
  );
}
