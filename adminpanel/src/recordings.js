import React from 'react';
import { Container,
    Row,
    Col, } from 'react-bootstrap';
import RecordingsContext from './recordingsContext';


class Recordings extends React.Component{
    render() {
        return <Container>
                    <Row className='align-items-center'>
                        <Col xs={12} sm={8} className='align-self-center mx-auto'>
                            {this.props.Recordings}
                        </Col>
                    </Row>
                </Container>
        
    }
}
Recordings.contextType = RecordingsContext;

export default Recordings;