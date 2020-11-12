import React from 'react';
import { Jumbotron, 
    Button,
    Container,
    Row,
    Col,
    Card,
    Spinner, } from 'react-bootstrap';
import Pic3 from './otrbanner.jpeg';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Streamer from './components/Streamer/Streamer';
import billiebaby from './billiebaby.jpg';

class Home extends React.Component{
    constructor(props){
        super(props);
    
        this.state={ 
          MainDescription: <Spinner animation="border" />,
        };
    
      }
  
    componentDidMount() {
        fetch('/api/text/Main Description').then(res => res.json()).then(data => this.setState({MainDescription: data.Text}))
    }

    render(){
        return <div>
                {/* <Streamer /> */}
                <Container className=''>
                    <Row className='align-items-center'>
                        <Col xs={12} sm={4} className='pt-4 align-self-center'>
                            <Jumbotron className='pt-3 pb-3'>
                                <h1>Off the Rails, On the Airwaves</h1>
                                <p>
                                {this.state.MainDescription}
                                <br/><br/>
                                Text in! <a href='sms:9789344969'>978-934-4969</a> We can't answer your calls but we can answer your texts.
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
                <Row className='mx-auto align-items-center'>
                    <Col xs={12} sm={4} className='mx-auto align-self-center'>
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="wumlradio"
                            options={{height: 400}}
                            />
                    </Col>
                    <Col xs={12} sm={4} align='center' className='mx-auto align-self-center'>
                        <iframe title='8-29-2020' src="https://open.spotify.com/embed/playlist/67h4SJhMyNHE3v3986bLNn" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </Col>
                    <Col xs={12} sm={4} className='mx-auto align-self-center'>
                        <Card className='mx-auto' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={billiebaby} />
                            <Card.Body>
                                <Card.Title>Name this Panda</Card.Title>
                                <Card.Text>
                                We here at Off the Rails Radio believe the newest baby panda at the 
                                Smithsonian's National Zoo MUST be named Billie Eilish. Join your voice
                                in our chorus here at <a href="http://chng.it/pMQDW8R99Q">change.org</a>
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
