import React, { useState } from 'react';
import Datas from '../data/data';
import '../style/Slider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-solid-svg-icons';


export default function Slider() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % Datas.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + Datas.length) % Datas.length);
    };

    const Rating = ({ rating }) => {
        const totalStars = 5;
        let stars = [];

        for(let i = 0; i < totalStars; i++) { 
            if(i < rating) {
                stars.push(<FontAwesomeIcon className="star filled" key={i} icon={fullStar} />); // étoile remplie
            } else {
                stars.push(<FontAwesomeIcon className="star empty" key={i} icon={emptyStar} />); // étoile grise
            }
        }
        return <div className='rating'>{stars}</div>;
    };

    return (
        <main>
            <div className='slider'>
                <img className= 'slider-img' src={Datas[index].cover} alt={Datas[index].title} />
                <div className='slider-title-container'>
                    <h2 id='title'>{Datas[index].title}</h2>
                    <p id='host'>{Datas[index].host.name}</p>
                </div>
                <p id='location'>{Datas[index].location}</p>
                <FontAwesomeIcon className='chevron chevron-left' icon={faChevronLeft} onClick={prevSlide} />
                <FontAwesomeIcon className='chevron chevron-right' icon={faChevronRight} onClick={nextSlide} />
                <div id='tags'>
                {Datas[index].tags.map((tag, i) => (
                    <p id='tag-name' key={i}>{tag}</p>
                ))}
                  <Rating rating={Datas[index].rating} />
                </div>
          
            </div>
        </main>
    );
}