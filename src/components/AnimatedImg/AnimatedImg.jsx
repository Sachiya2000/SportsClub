import React from 'react'
import './AnimatedImg.css';
import HeroImg from '../../Assets/herobg.jpg';
import cricket from '../../Assets/cricket.jpg';
import basketball from '../../Assets/basketball2.jpg';
import tenis from '../../Assets/tenis.jpg';
import football from '../../Assets/football.jpg';
import vollyball from '../../Assets/volleyball.jpg';
import jump from '../../Assets/jump.jpg';

function AnimatedImg() {
  return (
    <div className="gallery-body">
        <div className="gallery">
          <img src={basketball} alt="Basketball"/>
          <img src={cricket} alt="Cricket"/>
          <img src={tenis} alt="Tenis"/>
          <img src={football} alt="Football"/>
          <img src={vollyball} alt="Vollayball"/>
          <img src={jump} alt="High Jump"/>
       </div>

       </div>
  )
}

export default AnimatedImg