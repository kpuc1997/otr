import React from 'react';
import './Custom.scss';
import { Col,
   Card,
  Row,
  Container,} from 'react-bootstrap';

function Poll() {
  return (<div>
          <Container>
            <Row className='align-items-center'>
              <Col sm={8} className='pt-2 mx-auto'>
                <Card className='mx-auto' >
                    <Card.Img variant="top" src="https://picsum.photos/532/90?random=100" />
                    <Card.Body>
                        <Card.Title className='text-primary'>Munch, Marry, Murder!</Card.Title>
                        <Card.Text>
                        Vote on which baked good you would rather munch, marry, or muder and keep up 
                        with your favorite radio hosts.
                        </Card.Text>
                        <div class="embed-responsive embed-responsive-1by1">
                            <iframe title='Munch Marry Murder' className="embed-responsive-item" src="https://docs.google.com/forms/d/e/1FAIpQLSeR1bf7yOHo8WhZOTmndGQApmWRrmq8Vyk-tn0X3byUhMoctQ/viewform?embedded=true" width="986" height="986" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </div>
                    </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
    </div>
  );
}

export default Poll;