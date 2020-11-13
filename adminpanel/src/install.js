import React from 'react';
import { Card } from 'react-bootstrap';
import { Container,
    Row,
    Col
    } from 'react-bootstrap';

class Install extends React.Component {
    render() {
        return <Container>
        <Row className='mx-auto justify-content-center'>
        <Col sm={10}>
        <Card>
        <Card.Body>
            <Card.Title>

            </Card.Title>
            <Card.Text>
                <pwa-install>INSTALL</pwa-install>
            </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        </Row>
    </Container>
    }
}

export default Install;