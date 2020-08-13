import React from 'react';
import './Custom.scss';
import { Carousel, Col,
   Card,
  Row,
  Container,
  Button, } from 'react-bootstrap';

function Skating() {
  return (<div>
          <Container>
            <Row>
              <Col sm={4} className='pt-2'>
                <Card className='mx-auto' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/268/180?random=1" />
                    <Card.Body>
                        <Card.Title className='text-primary'>Matador Skating</Card.Title>
                        <Card.Text>
                        Always remember to check your surroundings when skating with matador clothes. 
                        Check your local government bull ordinances to ensure you will not be malled
                        by a randy steer.
                        </Card.Text>
                    </Card.Body>
                </Card>
              </Col>
              
              <Col sm={4} className='mx-auto pt-2'>
                <Container>
                  <Row>
                    <Col xs={12} className='mx-auto'>
                      <Card className="bg-primary">
                        <Card.Body>
                        <Carousel>
                          <Carousel.Item>
                            
                            <img
                              className="d-block w-100 img-fluid rounded"
                              src='https://picsum.photos/268/180?random=52'
                              alt="First slide"
                            />
                            {/* <Carousel.Caption className='text-primary'>
                              <h3>Brain Powder</h3>
                              <p>Its like a jackhammer for your brain!</p>
                            </Carousel.Caption> */}
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 img-fluid rounded"
                              src='https://picsum.photos/268/180?random=50'
                              alt="Third slide"
                            />

                            {/* <Carousel.Caption>
                              <h3>Beef it Up!</h3>
                              <p>Brain gains make body gains.</p>
                            </Carousel.Caption> */}
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 img-fluid rounded"
                              src='https://picsum.photos/268/180?random=51'
                              alt="Third slide"
                            />

                            {/* <Carousel.Caption>
                              <h3>A whole lot of bees</h3>
                              <p>Its like having a hive of personal attack bees in your skull.</p>
                            </Carousel.Caption> */}
                          </Carousel.Item>
                        </Carousel>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} className='mx-auto text-center pt-2'>
                      <Button variant='primary' className='mx-auto' href='http://library.amlegal.com/nxt/gateway.dll/New%20Mexico/albuqwin/cityofalbuquerquenewmexicocodeofordinanc?f=templates$fn=default.htm$3.0$vid=amlegal:albuquerque_nm_mc'>
                          Check here for local skating ordinances
                        </Button>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col sm={4} className='pt-2'>
                <Card className='mx-auto' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://thecoastalpassage.com/boat%20graphics/xit/xit2.jpg" />
                    <Card.Body>
                        <Card.Title className='text-primary'>Skating can be fun</Card.Title>
                        <Card.Text>
                        And super dangerous. 
                        </Card.Text>
                    </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
    </div>
  );
}

export default Skating;