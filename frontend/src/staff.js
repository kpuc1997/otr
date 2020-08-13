import React from 'react';
import { Container,
    Row,
    Col,
    Card, } from 'react-bootstrap';
import Pic from './kcsp.jpg';
import Vic from './vic.png';

class Staff extends React.Component{

    render(){
        return <div>
            <h1 className='text-center text-primary'>Our Staff</h1>
                <Container>
                    <Row>
                        <Col className='mb-2'>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/268/180?random=9" />
                                <Card.Body>
                                    <Card.Title>Ben</Card.Title>
                                    <Card.Text>
                                    Tell me, O Muse, the cause; wherein thwarted in will or wherefore angered, 
                                    did the Queen of heaven drive a man, of goodness so wondrous, 
                                    to traverse so many perils, to face so many toils. 
                                    Can heavenly spirits cherish resentment so dire?
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mb-2'>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Vic} />
                                <Card.Body>
                                    <Card.Title>Vicki</Card.Title>
                                    <Card.Text>
                                    In nature's fight pit, a host of ruthless bugs as bizarre as they are 
                                    lethal slug it out in real-life battles to the death. Witness epic 
                                    encounters between swarms of marauding assassins, and vicious 
                                    one-on-one clashes where only one bug survives. The world of monster 
                                    bugs is a jungle, where there's just one law: eat or be eaten.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mb-2'>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" className="kimg" src={Pic} height="180" width="268" />
                                <Card.Body>
                                    <Card.Title>Kyle</Card.Title>
                                    <Card.Text>
                                    The hip hopenest, rip tearenest, jack hammerenest, bip bopenest DJ this side of the Nile River.
                                    Stuck in Wyoming trying to get his plane repaired.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mb-2'>
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
                        <Col className='mb-2'>
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
                        <Col className='mb-2'>
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
                    <Row>
                        <Col className='mb-2'>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/id/1027/268/180" />
                                <Card.Body>
                                    <Card.Title>Lucy</Card.Title>
                                    <Card.Text>
                                    The muscle. Also a journalist with trust issues.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mb-2'>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/id/804/268/180" />
                                <Card.Body>
                                    <Card.Title>Vulfrich</Card.Title>
                                    <Card.Text>
                                    A funky ex-cop with nothing to lose. Works as our wardrobe artist. He's pretty jaded in general.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mb-2'>
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