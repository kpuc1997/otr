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
                        
                        {/* 5/16/2020 */}
                        <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbmillzthedefector%2Foff-the-rails-on-the-airwaves-may-16-2020%2F" frameBorder="0" ></iframe>
                        
                        {/* 5/2/2020 */}
                        <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbmillzthedefector%2Foff-the-rails-on-the-airwaves-may-02-2020%2F" frameBorder="0" ></iframe>
                        
                        </Col>
                    </Row>
                </Container>
        
    }
}
Recordings.contextType = RecordingsContext;

export default Recordings;