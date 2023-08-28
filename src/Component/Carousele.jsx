// Carousel.js
import React, { useState } from 'react';
import "./Css/carousel.css"
function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToLeft() {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? props.images.length - 1 : prevIndex - 1));
  }

  function goToRight() {
    setCurrentIndex(prevIndex => (prevIndex === props.images.length - 1 ? 0 : prevIndex + 1));
  }

  return (
   <>
    {/* <div className="container"> */}
    <div className="carousel-container">
      <button className="carousel-button left" onClick={goToLeft}>&laquo;</button>
      <div className="carousel-image-wrapper">
        <img src={props.images[currentIndex].url} alt="carousel" />
        <p className="carousel-caption">{props.images[currentIndex].caption}</p>
      </div>
      <button className="carousel-button right" onClick={goToRight}>&raquo;</button>
      <div className="carousel-pagination">
        {props.images.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
    {/* </div> */}
   </>
  );
}

export default Carousel;
