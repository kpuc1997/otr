import React from 'react';
import './Custom.scss';
import { KNavbar, KNavLink, KNavRoute } from './components/Navbar/KNavbar';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import pages from './pages';
import { NavDropdown } from 'react-bootstrap';
import Home from './Home';
import Pic2 from './WUML 1.png';
import RecordingsContext from './recordingsContext';
import player from './components/Misc/wumlplayer';
import BeeButton from './components/Misc/beebutton/beebutton';
import Secret from './Secret';

// React router components generated from external pages.js
const KLinks = pages.map((item) => (<KNavLink page={item} key={item.name}/>));
const KRoutes = pages.map((item) => (<KNavRoute page={item} key={item.name} />));


// Main app
class App extends React.Component{
  constructor(props){
    super(props);

    this.state={ 
      recordings: null,
    };

  }

  render() {
  return (
    <Router hashType='noslash' basename={process.env.PUBLIC_URL + '/'}>
      <KNavbar brand={"OTR"} button={BeeButton}>
        {KLinks}
        <NavDropdown title="Listen" id="basic-nav-dropdown" >
          <NavDropdown.Item>{player}</NavDropdown.Item>
        </NavDropdown>
      </KNavbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/secret" component={Secret} />
        <>
        <RecordingsContext.Provider value={this.state.recordings}>
          {KRoutes}
        </RecordingsContext.Provider>
        </>
      </Switch>
      <img className='img-fluid pt-2 mx-auto d-block' src={Pic2} alt="" />
    </Router>
  )
  }
}

export default App;