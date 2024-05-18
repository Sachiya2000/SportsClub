import React from 'react';
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import PopOver from '../Button/PopOver'; // Assuming PopOver is defined elsewhere
import image1 from '../../Assets/match1.jpg';
import image2 from '../../Assets/match2.jpg';
import image3 from '../../Assets/match3.jpg';
import image4 from '../../Assets/match4.jpg';

export default function Slider() {
  const [showPopover, setShowPopover] = React.useState(false); // State for popover visibility
  const [activeTitle, setActiveTitle] = React.useState(null); // Track currently active title

  const handlePopoverClose = () => setShowPopover(false);
  const handlePopoverOpen = (title) => {
    setShowPopover(true);
    setActiveTitle(title);
  };

  return (
    <Container className='pt-5' style={{ backgroundColor: `#C6DBEA`,
      padding:`5% 0`
     }}>
      <Carousel>
        <Carousel.Item>
          <Row className="text-center align-items-center">
            <Col xs={3}>
              <Card>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title
                    aria-describedby="popover-content-1" // Aria attribute for screen readers
                    tabIndex={0} // Make title focusable (keyboard navigation)
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        handlePopoverOpen('Event'); // Open popover on Enter key
                      }
                    }}
                    onBlur={() => setActiveTitle(null)} // Reset active title on blur
                  >
                    <PopOver
                      id="popover-content-1" // Matches aria-describedby attribute
                      show={showPopover && activeTitle === 'Event'}
                      onHide={handlePopoverClose}
                      title="Event"
                      content="Your event description here"
                    />
                    Event
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3}>
              <Card>
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                  <Card.Title
                    aria-describedby="popover-content-1" // Aria attribute for screen readers
                    tabIndex={0} // Make title focusable (keyboard navigation)
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        handlePopoverOpen('Event'); // Open popover on Enter key
                      }
                    }}
                    onBlur={() => setActiveTitle(null)} // Reset active title on blur
                  >
                    <PopOver
                      id="popover-content-1" // Matches aria-describedby attribute
                      show={showPopover && activeTitle === 'Event'}
                      onHide={handlePopoverClose}
                      title="Event"
                      content="Your event description here"
                    />
                    Event
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3}>
              <Card>
                <Card.Img variant="top" src={image3} />
                <Card.Body>
                  <Card.Title
                    aria-describedby="popover-content-1" // Aria attribute for screen readers
                    tabIndex={0} // Make title focusable (keyboard navigation)
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        handlePopoverOpen('Event'); // Open popover on Enter key
                      }
                    }}
                    onBlur={() => setActiveTitle(null)} // Reset active title on blur
                  >
                    <PopOver
                      id="popover-content-1" // Matches aria-describedby attribute
                      show={showPopover && activeTitle === 'Event'}
                      onHide={handlePopoverClose}
                      title="Event"
                      content="Your event description here"
                    />
                    Event
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3}>
              <Card>
                <Card.Img variant="top" src={image4} />
                <Card.Body>
                  <Card.Title
                    aria-describedby="popover-content-1" // Aria attribute for screen readers
                    tabIndex={0} // Make title focusable (keyboard navigation)
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        handlePopoverOpen('Event'); // Open popover on Enter key
                      }
                    }}
                    onBlur={() => setActiveTitle(null)} // Reset active title on blur
                  >
                    <PopOver
                      id="popover-content-1" // Matches aria-describedby attribute
                      show={showPopover && activeTitle === 'Event'}
                      onHide={handlePopoverClose}
                      title="Event"
                      content="Your event description here"
                    />
                    Event
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="text-center align-items-center">
          <Col xs={3}>
              <Card>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title
                    aria-describedby="popover-content-1" // Aria attribute for screen readers
                    tabIndex={0} // Make title focusable (keyboard navigation)
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        handlePopoverOpen('Event'); // Open popover on Enter key
                      }
                    }}
                    onBlur={() => setActiveTitle(null)} // Reset active title on blur
                  >
                    <PopOver
                      id="popover-content-1" // Matches aria-describedby attribute
                      show={showPopover && activeTitle === 'Event'}
                      onHide={handlePopoverClose}
                      title="Event"
                      content="Your event description here"
                    />
                    Event
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3}>
              <Card>
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                  <Card.Title
                    aria-describedby="popover-content-1" // Aria attribute for screen readers
                    tabIndex={0} // Make title focusable (keyboard navigation)
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        handlePopoverOpen('Event'); // Open popover on Enter key
                      }
                    }}
                    onBlur={() => setActiveTitle(null)} // Reset active title on blur
                  >
                    <PopOver
                      id="popover-content-1" // Matches aria-describedby attribute
                      show={showPopover && activeTitle === 'Event'}
                      onHide={handlePopoverClose}
                      title="Event"
                      content="Your event description here"
                    />
                    Event
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3}>
              <Card>
                <Card.Img variant="top" src={image3} />
                <Card.Body>
                  <Card.Title
                    aria-describedby="popover-content-1" // Aria attribute for screen readers
                    tabIndex={0} // Make title focusable (keyboard navigation)
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        handlePopoverOpen('Event'); // Open popover on Enter key
                      }
                    }}
                    onBlur={() => setActiveTitle(null)} // Reset active title on blur
                  >
                    <PopOver
                      id="popover-content-1" // Matches aria-describedby attribute
                      show={showPopover && activeTitle === 'Event'}
                      onHide={handlePopoverClose}
                      title="Event"
                      content="Your event description here"
                    />
                    Event
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3}>
              <Card>
                <Card.Img variant="top" src={image4} />
                <Card.Body>
                  <Card.Title
                    aria-describedby="popover-content-1" // Aria attribute for screen readers
                    tabIndex={0} // Make title focusable (keyboard navigation)
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        handlePopoverOpen('Event'); // Open popover on Enter key
                      }
                    }}
                    onBlur={() => setActiveTitle(null)} // Reset active title on blur
                  >
                    <PopOver
                      id="popover-content-1" // Matches aria-describedby attribute
                      show={showPopover && activeTitle === 'Event'}
                      onHide={handlePopoverClose}
                      title="Event"
                      content="Your event description here"
                    />
                    Event
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        {/* Add more Carousel.Item elements if needed */}
      </Carousel>
    </Container>
  );
}
