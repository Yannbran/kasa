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
import { useParams, Navigate } from "react-router-dom";
import Collapse from "./Collapse";

// Définition du composant Slider
export default function Slider() {
  // J'utilise useParams pour extraire l'ID du logement à partir 
  //des paramètres de l'URL
  const { id } = useParams();

  // Je crée un tableau d'identifiants (ids) en parcourant les données (Datas)
  // et en extrayant l'ID de chaque élément
  const ids = Datas.map((data) => data.id);

  // J'utilise la méthode indexOf pour trouver l'index de l'ID actuel dans
  // le tableau d'identifiants (ids)
  // Si l'ID n'est pas trouvé, indexOf retourne -1
  const currentIndex = ids.indexOf(id);

  // J'utilise le Hook useState pour créer une variable d'état (index) et 
  //initialiser sa valeur à currentIndex
  const [index] = useState(currentIndex); 

  // J'utilise le Hook useState pour créer une autre variable d'état 
  //(imageIndex) qui représente l'index de l'image actuellement affichée
  // J'initialise imageIndex à 0, ce qui signifie que la première image 
  //sera affichée par défaut
  const [imageIndex, setImageIndex] = useState(0);

  // Si l'index est -1 (ce qui signifie que l'ID n'a pas été trouvé dans les 
  //données), je renvoie un composant Navigate qui redirige l'utilisateur 
  //vers la page d'erreur
  if (index === -1) {
    return <Navigate to="/Error" />;
  }

  // Je crée un tableau d'images en extrayant le tableau de pictures de 
  //l'élément actuel dans les données (Datas[index])
  const images = [...Datas[index].pictures];

  // Je définis une fonction (nextImage) pour passer à l'image suivante dans 
  //le diaporama
  const nextImage = () => {
    // J'utilise la fonction setImageIndex pour mettre à jour l'état imageIndex
    setImageIndex((prevImageIndex) => {
      // Je calcule le nouvel index en ajoutant 1 à l'index de l'image 
      //actuelle (prevImageIndex) et en utilisant l'opérateur modulo (%) 
      //avec la longueur du tableau d'images
      // Cela permet de créer un effet de boucle dans le diaporama 
      //(lorsque l'index atteint la fin du tableau d'images, il revient à 0)
      const newIndex = (prevImageIndex + 1) % images.length;

      // Je retourne le nouvel index qui sera utilisé pour mettre à jour 
      //l'état imageIndex
      return newIndex;
  });
};
  
// Fonction pour passer à l'image précédente
const prevImage = () => {
  // On met à jour l'index de l'image
  setImageIndex((prevImageIndex) => {
    // On calcule le nouvel index pour revenir à l'image précédente
    const newIndex = (prevImageIndex - 1 + images.length) % images.length;
    // On retourne le nouvel index
    return newIndex;
  });
};

// Composant pour afficher la note sous forme d'étoiles
const Rating = ({ rating }) => {
  // Nombre total d'étoiles
  const totalStars = 5;
  // Tableau pour stocker les étoiles
  let stars = [];

  // Boucle pour générer les étoiles
  for (let i = 0; i < totalStars; i++) {
    // Si l'index est inférieur à la note, on ajoute une étoile remplie
    if (i < rating) {
      stars.push(
        <FontAwesomeIcon className="star filled" key={i} icon={fullStar} />
      );
    } else {
      // Sinon, on ajoute une étoile grise
      stars.push(
        <FontAwesomeIcon className="star empty" key={i} icon={emptyStar} />
      );
    }
  }
  // On retourne un div contenant toutes les étoiles
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
