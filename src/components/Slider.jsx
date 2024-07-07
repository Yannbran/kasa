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

export default function Slider() {
  const { id } = useParams();

  const ids = Datas.map((data) => data.id); // Crée un tableau d'identifiants
  const currentIndex = ids.indexOf(id); // Trouve l'index de l'identifiant actuel

  const [index, setIndex] = useState(currentIndex); // Utilise cet index pour le state initial

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % Datas.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + Datas.length) % Datas.length);
  };

  const Rating = ({ rating }) => {
    const totalStars = 5;
    let stars = [];

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

  return (
    <body>
      <main>
        <div className="slider">
          <img
            className="slider_img"
            src={Datas[index].cover}
            alt={Datas[index].title}
          />
          <FontAwesomeIcon
            className="chevron chevron_left"
            icon={faChevronLeft}
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            className="chevron chevron_right"
            icon={faChevronRight}
            onClick={nextSlide}
          />
          <p id="number">
            {index + 1}/{Datas.length}
          </p>
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
            <Collapse
              title={"Description"}
              content={Datas[index].description}
            />
          </div>
          <div className="collapse_slider_item2">
            <Collapse title={"Équipements"} content={Datas[index].equipments} />
          </div>
        </div>
      </main>
    </body>
  );
}
