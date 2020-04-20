import React from 'react';
import { Container,
    Row,
    Col,
    Card, } from 'react-bootstrap';

class Staff extends React.Component{

    render(){
        return <div>
            <h1 className='text-center text-primary'>Our Staff</h1>
                <Container>
                    <Row>
                        <Col>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/268/180?random=9" />
                                <Card.Body>
                                    <Card.Title>Ben</Card.Title>
                                    <Card.Text>
                                    Love is an important component in a persons relationships and in this radio show.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/268/180?random=8" />
                                <Card.Body>
                                    <Card.Title>Vicki</Card.Title>
                                    <Card.Text>
                                    Love is an important component in a persons relationships and in this radio show.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/268/180?random=7" />
                                <Card.Body>
                                    <Card.Title>Kyle</Card.Title>
                                    <Card.Text>
                                    The hip hopenest, rip tearenest, jack hammerenest, bip bopenest DJ this side of the Nile River.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='pt-2'>
                        <Col>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/id/823/268/180?random=4" />
                                <Card.Body>
                                    <Card.Title>Emily</Card.Title>
                                    <Card.Text>
                                    Avid listener and expert on trashy reality television with a focus in hot people doing stupid things.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/id/1005/268/180" />
                                <Card.Body>
                                    <Card.Title>Chad</Card.Title>
                                    <Card.Text>
                                    A graphic design artist with a heart of gold and a closet full of skeletons.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/id/1011/268/180" />
                                <Card.Body>
                                    <Card.Title>Sarah</Card.Title>
                                    <Card.Text>
                                    Executive producer, craft services, and part time whaler. Can hold her breath for a shockingly long time.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>
                    <Row className='pt-2'>
                        <Col>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/id/1027/268/180" />
                                <Card.Body>
                                    <Card.Title>Lucy</Card.Title>
                                    <Card.Text>
                                    The muscle.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/id/804/268/180" />
                                <Card.Body>
                                    <Card.Title>Vulfrich</Card.Title>
                                    <Card.Text>
                                    A funky ex-cop with nothing to lose. Works as our wardrobe artist.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/id/1074/268/180" />
                                <Card.Body>
                                    <Card.Title>Grace</Card.Title>
                                    <Card.Text>
                                    She's the supervisor. Also very proud of her lushous soft coat of hair and elusive nature.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                </div>
    }
}

export default Staff;