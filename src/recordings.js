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
                        <div className='embed-responsive embed-responsive-16by9'>
                            <a
                                href="https://www.dropbox.com/sh/x803wja5vch2l7d/AABXN0cbekuthNMUWXFiAwmca?dl=0"
                                className="dropbox-embed embed-responsive-item"
 
                            ></a>
                        </div>
                        </Col>
                    </Row>
                </Container>
        
    }
}
Recordings.contextType = RecordingsContext;

export default Recordings;