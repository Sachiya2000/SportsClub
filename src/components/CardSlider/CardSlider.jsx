import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CardSlider.css';
import image1 from '../../Assets/match1.jpg';

function CardSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container container">
      <Slider {...settings} className="container">
        <div className="cardBox">
          <h3>1</h3>
          <img className="img-slide" src={image1} alt="" />
        </div>
        <div className="cardBox">
          <h3>2</h3>
          <img className="img-slide" src={image1} alt="" />
        </div>
        <div className="cardBox">
          <h3>3</h3>
          <img className="img-slide" src={image1} alt="" />
        </div>
        <div className="cardBox">
          <h3>4</h3>
          <img className="img-slide" src={image1} alt="" />
        </div>
        <div className="cardBox">
          <h3>5</h3>
          <img className="img-slide" src={image1} alt="" />
        </div>
        <div>
          <h3>6</h3>
          <img className="img-slide" src={image1} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default CardSlider;
