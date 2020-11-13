import React from 'react';
import { Container,
    Row,
    Col,
    Card, } from 'react-bootstrap';
import Pic from './kcsp.jpg';
import Vic from './vic.png';
import TextForm from './components/Forms/TextForm';
import StaffForm from './components/Forms/StaffForm';

class Staff extends React.Component{

    render(){
        var staff = [
            {Name: '', Description: ''},
            {Name: '', Description: ''},
            {Name: '', Description: ''},
            {Name: '', Description: ''},
            {Name: '', Description: ''},
            {Name: '', Description: ''},
        ];
        if (this.props.staff.length === 6) {
            staff = this.props.staff
        }
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
                                    {this.props.ben}
                                    <br/>
                                    <TextForm title="Edit Ben's Description" name='BenDescription' />
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
                                    {this.props.vicki}
                                    <br/>
                                    <TextForm title="Edit Vicki's Description" name='VickiDescription' />
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
                                    {this.props.kyle}
                                    <br/>
                                    <TextForm title="Edit Kyle's Description" name='KyleDescription' />
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
                                    <Card.Title> {staff[0].Name} </Card.Title>
                                    <Card.Text>
                                    {staff[0].Description}
                                    </Card.Text>
                                    <StaffForm staffnumber={1} title='Staff Member 1 Edit'/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mb-2'>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/id/1005/268/180" />
                                <Card.Body>
                                    <Card.Title>{staff[1].Name}</Card.Title>
                                    <Card.Text>
                                    {staff[1].Description}
                                    </Card.Text>
                                    <StaffForm staffnumber={2} title='Staff Member 2 Edit'/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mb-2'>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/id/1011/268/180" />
                                <Card.Body>
                                    <Card.Title>{staff[2].Name}</Card.Title>
                                    <Card.Text>
                                        {staff[2].Description}
                                    </Card.Text>
                                    <StaffForm staffnumber={3} title='Staff Member 3 Edit'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mb-2'>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/id/1027/268/180" />
                                <Card.Body>
                                    <Card.Title>{staff[3].Name}</Card.Title>
                                    <Card.Text>
                                        {staff[3].Description}
                                    </Card.Text>
                                    <StaffForm staffnumber={4} title='Staff Member 4 Edit'/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mb-2'>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/id/804/268/180" />
                                <Card.Body>
                                    <Card.Title>{staff[4].Name}</Card.Title>
                                    <Card.Text>
                                        {staff[4].Description}
                                    </Card.Text>
                                    <StaffForm staffnumber={5} title='Staff Member 5 Edit'/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mb-2'>
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/id/1074/268/180" />
                                <Card.Body>
                                    <Card.Title>{staff[5].Name}</Card.Title>
                                    <Card.Text>
                                        {staff[5].Description}
                                    </Card.Text>
                                    <StaffForm staffnumber={6} title='Staff Member 6 Edit'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                </div>
    }
}

export default Staff;