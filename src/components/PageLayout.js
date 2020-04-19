import React from 'react';
import Navbar from '../components/navbar';
// import Footer from '../components/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BrainPowder from "../BrainPowder";
import Nav from 'react-bootstrap/Nav'


const PageLayout = (props) => (
  <div className=''>
      <Navbar className='navbar-dark mb-3' bg="primary" expand="lg">
        <Link to='/'><Navbar.Brand>Off The Rails, On the Airwaves</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="text-decoration-none nav-link" activeClassName="active" to='/BrainPowder' >Brain Powder</Link>
            {/* <Link className="text-decoration-none nav-link" activeClassName="active" to='/BrainPowder' >Brain Powder</Link> */}

          </Nav>
          <Link className="text-decoration-none" activeClassName="active" to='/Contact' ><button className="btn btn-outline-primary bg-light">Contact</button></Link>
        </Navbar.Collapse>
      </Navbar>
        <Switch>
          <Route path="/BrainPowder">
            <BrainPowder />
          </Route>
          <Route path="/">
          {/* <BrainPowder /> */}
          </Route>
          
        </Switch>
        {/* {props.children} */}
    {/* <Footer /> */}
  </div>
)

export default PageLayout