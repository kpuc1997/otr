import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const player = <iframe title="stream" src="https://embed.radio.co/player/fa3c718.html" width="100%" allow="autoplay" scrolling="no" style={{border: 'none', overflow: 'hidden', maxWidth: '400px', margin: '0px auto', height: '100px',}}></iframe>;

const Footer = (props) => (
<Container>
  <Row>
    <Col></Col>
    <Col></Col>
    <Col>{player}</Col>
  </Row>
</Container>
)

export default Footer