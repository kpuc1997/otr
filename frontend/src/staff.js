import React from 'react';
import { Container,
    Row,
    Col,
    Card,
    Spinner } from 'react-bootstrap';
import Pic from './kcsp.jpg';
import Vic from './vic.png';

class Staff extends React.Component{
    constructor(props){
        super(props);
    
        this.state={ 
          BenDescription: <Spinner animation="border" />,
          VickiDescription: <Spinner animation="border" />,
          KyleDescription: <Spinner animation="border" />,
        };
    
      }

    componentDidMount() {
        fetch('/api/text/VickiDescription').then(res => res.json()).then(data => this.setState({VickiDescription: data.Text}));
        fetch('/api/text/BenDescription').then(res => res.json()).then(data => this.setState({BenDescription: data.Text}));
        fetch('/api/text/KyleDescription').then(res => res.json()).then(data => this.setState({KyleDescription: data.Text}))
    }

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
                                    {this.state.BenDescription}
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
                                    {this.state.VickiDescription}
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
                                    {this.state.KyleDescription}
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