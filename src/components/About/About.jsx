import React from 'react';
import './About.css';
import image1 from '../../Assets/match1.jpg';

function About() {
  return (
    <div className='container-fluied about'>
        <div className="row">
            <div className="col-12 col-md-6 about-content"  >
                <h1>Who We Are</h1>
                <p>Welcome to our sales and marketing company, where we specialize in helping customers snag great deals from the leading solar and cable companies in the DC, Maryland, and Virginia area.We understand that finding the right solar and cable solutions for your needs can be a daunting task, which is why we're here to make the process easier and more affordable for you.</p>
                <div className="dev-btn">
                    <a href="" className='btn btn-light btn-1'>Read More</a>
                    <a href="" className='btn btn-dark btn-1'>Contact us today</a>
                </div>
            </div>
            <div className="col-12 col-md-6 about-img"  >
                <img src={image1} alt="" className='img-fluid' />
            </div>
        </div>

    </div>
  )
}

export default About