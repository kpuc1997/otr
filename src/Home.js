import React from 'react';
import { Jumbotron, 
    Button,
    Container,
    Row,
    Col,
    Card, } from 'react-bootstrap';
import Pic2 from './WUML 1.png';
import Pic3 from './otrbanner.jpeg';

class Home extends React.Component{

    render(){
        return <div>
                        <Container className=''>
                            <Row className='align-items-center'>
                                <Col xs={12} sm={4} className='pt-4 align-self-center'>
                                    <Jumbotron className='pt-3 pb-3'>
                                        <h1>Off the Rails, On the Airwaves</h1>
                                        <p>
                                        This is a simple hero unit, a simple jumbotron-style component for calling
                                        extra attention to featured content or information.
                                        </p>
                                        <p>
                                        <Button variant="primary" href="http://wuml.org">Find us @ WUML.org</Button>
                                        </p>
                                    </Jumbotron>
                                </Col>
                                <Col xs={12} sm={8} className="align-self-center pb-sm-4 pb-4">
                                    <img className="img-fluid" alt="" src={Pic3} />
                                </Col>
                            </Row>
                        </Container>
                    <Container className=''>
                        <Row>
                            <Col className='pb-2'>
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
                            <Col className='pb-2'>
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
                            <Col className='pb-2'>
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
