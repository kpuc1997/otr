import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";

const KNavbar = (props) => (
<Navbar className='navbar-dark mb-3' bg="primary" expand="lg">
  <Link to='/'><Navbar.Brand>{props.brand}</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {props.children}
    </Nav>
    {props.button}
  </Navbar.Collapse>
</Navbar>
)

export default KNavbar;