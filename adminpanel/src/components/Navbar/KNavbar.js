import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link,
  NavLink,
  Route, } from "react-router-dom";

// Custom components for a react navbar styled with react-bootstrap
// and regular bootstrap. Uses named exports.


//////////////////////////////////////

// Navbar boilerplate
// requires react-bootstrap and bootstrap

// children components should be <KNavLink />
// button prop will give you a button to the right
// brand prop gives you brand text

export const KNavbar = (props) => (
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

//////////////////////////////////////

// Navlink for the KNavBar component

// Should be given a page prop which is an object having
// a url and name field which are both strings. 
// the url field of the page prop object is the react router link path
// the name will be the string thats shown in the navbar

export const KNavLink = (props) => (
  <NavLink exact strict
      className="text-decoration-none nav-link" 
      activeClassName="active" 
      to={props.page.url}>

      {props.page.name}

  </NavLink>
)

//////////////////////////////////////

// React Router route to use with KNavbar and KNavLink
// takes a page object as prop page. The page object should
// have a field url for the react router path and a field component
// for the component to render.

export const KNavRoute = (props) => (
  <Route path={props.page.url} component={props.page.component} />
  )

// export default KNavbar;