import React from 'react';
import './Custom.scss';
import KNavbar from './components/KNavbar';
import KNavLink from './components/KNavLink';
import KNavRoute from './components/KNavRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import pages from './pages';
import { Button } from 'react-bootstrap';

const player = <iframe title="stream" src="https://embed.radio.co/player/fa3c718.html" width="100%" allow="autoplay" scrolling="no" style={{border: 'none', overflow: 'hidden', maxWidth: '400px', margin: '0px auto', height: '100px',}}></iframe>;

const KNavButton = <div>
  <Button variant='secondary' href="https://thehoneybeeconservancy.org/">Bees</Button>
  </div>

function App() {
  return (
    <Router>
      <KNavbar brand={"OTR"} button={KNavButton}>
        {pages.map((item) => (<KNavLink page={item} key={item.name}/>))}
      </KNavbar>
      <Switch>
        {pages.map((item) => (<KNavRoute page={item} key={item.name} />))}
        <Route path="/" component={null} />
      </Switch>
    </Router>
  );
}

export default App;
