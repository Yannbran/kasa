// Importation des dépendances nécessaires
import { useState } from "react";
import Datas from "../data/data";
import "../style/slider.scss";
import "../style/collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar as fullStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import Collapse from "./Collapse";

// Définition du composant Slider
export default function Slider() {
  // Récupération de l'ID à partir des paramètres de l'URL
  const { id } = useParams();

  // Création d'un tableau d'identifiants à partir des données
  const ids = Datas.map((data) => data.id); 

  // Trouver l'index de l'identifiant actuel dans le tableau d'identifiants
  const currentIndex = ids.indexOf(id); 

  // Utilisation de cet index pour définir l'état initial de l'index
  const [index] = useState(currentIndex); 

  // Création d'un tableau d'images à partir des données de l'élément actuel
  const images = [...Datas[index].pictures];

  // Définition d'un autre état pour l'index de l'image
  const [imageIndex, setImageIndex] = useState(0);

  // Appel de la fonction setImageIndex qui est utilisée pour mettre à jour l'état imageIndex.
  const nextImage = () => {
    // Calcul du nouvel index. On ajoute 1 à l'index actuel pour passer à l'image suivante.
    setImageIndex((prevImageIndex) => {
      // L'opérateur modulo (%) est utilisé pour créer un effet de boucle dans le diaporama.
    // Si l'index atteint la fin du tableau d'images, il reviendra à 0 (le début du tableau).
      const newIndex = (prevImageIndex + 1) % images.length;
      // Retourne le nouvel index qui sera utilisé pour mettre à jour l'état imageIndex.
      return newIndex;
    });
  };
  
  // Fonction pour revenir à l'image précédente
  const prevImage = () => {
    setImageIndex((prevImageIndex) => {
      const newIndex = (prevImageIndex - 1 + images.length) % images.length;
      return newIndex;
    });
  };

  // Composant pour afficher la note sous forme d'étoiles
  const Rating = ({ rating }) => {
    const totalStars = 5;
    let stars = [];

    // Boucle pour générer les étoiles
    for (let i = 0; i < totalStars; i++) {
      if (i < rating) {
        stars.push(
          <FontAwesomeIcon className="star filled" key={i} icon={fullStar} />
        ); // étoile remplie
      } else {
        stars.push(
          <FontAwesomeIcon className="star empty" key={i} icon={emptyStar} />
        ); // étoile grise
      }
    }
    return <div className="rating">{stars}</div>;
  };

  // Rendu du composant

  return (
    <main>
      <div className="slider">
        <img
          className="slider_img"
          src={images[imageIndex]} 
          alt={Datas[index].title}
        />
             {images.length > 1 && (
          <>
            <FontAwesomeIcon
              className="chevron chevron_left"
              icon={faChevronLeft}
              onClick={prevImage}
            />
            <FontAwesomeIcon
              className="chevron chevron_right"
              icon={faChevronRight}
              onClick={nextImage}
            />
            <p id="number">
              {imageIndex + 1}/{images.length}
            </p>
          </>
        )}
      </div>

      <div className="slider-container">
        <div className="slider-content-one">
          <div id="title">
            <h2>{Datas[index].title}</h2>
          </div>
          <p id="location">{Datas[index].location}</p>
          <div id="tag">
            {Datas[index].tags.map((tag, i) => (
              <p id="tag_name" key={i}>
                {tag}
              </p>
            ))}
          </div>
        </div>

        <div className="slider-content-two">
          <div className="identity">
            <div className="host_name">
              {Datas[index].host.name.split(" ").map((part, i) => (
                <div key={i} className="host_name_part">
                  {part}
                </div>
              ))}
            </div>
            <div id="rond"></div>
          </div>
          <div className="rating">
            {" "}
            <Rating rating={Datas[index].rating} />
          </div>
        </div>
      </div>

      <div className="collapse_slider">
        <div className="collapse_slider_item1">
          <Collapse title={"Description"} content={Datas[index].description} />
        </div>
        <div className="collapse_slider_item2">
          <Collapse title={"Équipements"} content={Datas[index].equipments} />
        </div>
      </div>
    </main>
  );
}
