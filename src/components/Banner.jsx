import { useLocation } from "react-router-dom";
import "../style/banner.scss";
import ImgBandeau from "../assets/images/Image source 1.png";
import ImgAbout from "../assets/images/Image source 2.png";

export default function Bandeau() {
  const location = useLocation();

  let image, altText, imgClass;
  if (location.pathname === "/") {
    image = ImgBandeau;
    altText = "photo représentant la mer";
    imgClass = "img-base img-acceuil";
  } else if (location.pathname === "/About") {
    image = ImgAbout;
    altText = "photo représentant la montagne";
    imgClass = "img-base img-about";
  }
  return (
    <div className="bandeau">
      <div className="img-base">
        <img src={image} alt={altText} className={imgClass} />
        {location.pathname === "/" && <h1>Chez vous, partout et ailleurs</h1>}
        {location.pathname === "/About"}
      </div>
    </div>
  );
}
