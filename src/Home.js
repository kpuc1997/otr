import React from 'react';
import { Jumbotron, 
    Button,
    Container,
    Row,
    Col,
    Card, } from 'react-bootstrap';
import Pic2 from './WUML 1.png';

class Home extends React.Component{

    render(){
        return <div>
                    <Jumbotron>
                        <Container>
                            <Row>
                                <Col xs={16}>
                                    <h1>Off the Rails, On the Airwaves</h1>
                                    <p>
                                    This is a simple hero unit, a simple jumbotron-style component for calling
                                    extra attention to featured content or information.
                                    </p>
                                    <p>
                                    <Button variant="primary" href="http://wuml.org">Find us @ WUML.org</Button>
                                    </p>
                                </Col>
                                <Col xs={16} className="d-sm-none">
                                    <img className="img-fluid" alt="" src={Pic2} />
                                </Col>
                            </Row>
                        </Container>
                        {/* <h1>Off the Rails, On the Airwaves</h1>
                        <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                        </p>
                        <p>
                        <Button variant="primary" href="http://wuml.org">Find us @ WUML.org</Button>
                        </p> */}
                    </Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <Card className='mx-auto' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://picsum.photos/268/180?random=1" />
                                    <Card.Body>
                                        <Card.Title>Music for your Ears</Card.Title>
                                        <Card.Text>
                                        Listen to the show for an ecclectic mix of alternative and underground Music
                                        from a large list of genres.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='mx-auto' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://picsum.photos/268/180?random=2" />
                                    <Card.Body>
                                        <Card.Title>Ideas for your Brain</Card.Title>
                                        <Card.Text>
                                        Our talking segments will inoculate your brain width
                                        ideas and concepts you would not have otherwise come across.
                                        
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='mx-auto' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://picsum.photos/268/180?random=3" />
                                    <Card.Body>
                                        <Card.Title>Love for your Heart</Card.Title>
                                        <Card.Text>
                                        Love is an important component in a persons relationships and in this radio show.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
    }
}

export default Home;
