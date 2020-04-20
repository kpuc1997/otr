import React from 'react';
import './Custom.scss';
import KNavbar from './components/KNavbar';
import KNavLink from './components/KNavLink';
import KNavRoute from './components/KNavRoute';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import pages from './pages';
import { Button, NavDropdown } from 'react-bootstrap';
import Pic from './bee.png';
import Home from './Home';
import Pic2 from './WUML 1.png';


const player = <iframe title="stream" src="https://embed.radio.co/player/fa3c718.html" width="100%" allow="autoplay" scrolling="no" style={{border: 'none', overflow: 'hidden', maxWidth: '400px', margin: '0px auto', height: '100px',}}></iframe>;

const KNavButton = <div id='beebutton'>
  <Button variant='secondary' href="https://www.pollinator.org/">
    Bees? <img src={Pic} width='25' alt=""/>
  </Button>
  </div>

const KLinks = pages.map((item) => (<KNavLink page={item} key={item.name}/>));
const KRoutes = pages.map((item) => (<KNavRoute page={item} key={item.name} />));

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <KNavbar brand={"OTR"} button={KNavButton}>
        {KLinks}
        <NavDropdown title="Listen" id="basic-nav-dropdown" >
          <NavDropdown.Item>{player}</NavDropdown.Item>
        </NavDropdown>
      </KNavbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <>
        {KRoutes}
        </>
      </Switch>
      <img className='img-fluid pt-2 mx-auto' src={Pic2} alt="" />
    </Router>
  );
}

export default App;