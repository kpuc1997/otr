import React from 'react';
import './Custom.scss';
import Pic from './WUML 2.png';
import SmileGuy from './smilyguy.png';
import { Carousel, Col,
   Card,
  Row,
  Container,
  Button, } from 'react-bootstrap';
import BrainAthlete from './brainathlete.png';

function BrainPowder() {
  return (<div>
          <Container>
            <Row>
              <Col sm={4} className='pt-2'>
                <Card className='mx-auto' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/268/180?random=1" />
                    <Card.Body>
                        <Card.Title className='text-primary'>Brain Powder</Card.Title>
                        <Card.Text>
                        Its a jackhammer for your brain!
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
                              src={Pic}
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
                              src={SmileGuy}
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
                              src={BrainAthlete}
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
                      <Button variant='primary' className='mx-auto'>Buy All of It</Button>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col sm={4} className='pt-2'>
                <Card className='mx-auto' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/id/312/268/180?random=2" />
                    <Card.Body>
                        <Card.Title className='text-primary'>A whole lot of bees</Card.Title>
                        <Card.Text>
                        Its like having a hive of personal attack bees in your skull.
                        </Card.Text>
                    </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
    </div>
  );
}

export default BrainPowder;