import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect'; 
import HeroImg from '../../Assets/herobg.jpg';

export default function HeroImage() {
  return (
    <header>
      <Container fluid className="pt-3 px-5 h-100" style={{backgroundColor: `#C6DBEA`}}>
        <Row>
          <Col xs={12} style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%), url(${HeroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '80vh', // Set height as desired
            display: 'flex',
            alignItems: 'center', // Center content vertically
            color: '#fff',
          }}>
            <div className="text-left mx-5">  {/* Text alignment to left */}
              <h1 style={{fontSize:`60px`}}>Saegis Campus  </h1>
              <h2 style={{fontSize:`40px`}}>Sports Club</h2>
              <ReactTypingEffect
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta iure nihil porro distinctio dolorum id vero quo numquam exercitationem!"
                typingSpeed={100} // Adjust typing speed (optional)
                cursorRenderer={({ isEmpty }) => isEmpty ? '▮' : ''} // Customize cursor (optional)
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
