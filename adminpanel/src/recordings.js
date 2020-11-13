import React from 'react';
import { Container,
    Row,
    Col, } from 'react-bootstrap';
import RecordingsContext from './recordingsContext';
import CreateRecordingForm from './components/Forms/CreateRecordingForm';


class Recordings extends React.Component{
    render() {
        return <Container>
                    <div align='center' className='pb-4'>
                        <CreateRecordingForm />
                    </div>
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