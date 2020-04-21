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
import RecordingsContext from './recordingsContext';

// WUMl Stream Player
const player = <iframe title="stream" src="https://embed.radio.co/player/fa3c718.html" width="100%" allow="autoplay" scrolling="no" style={{border: 'none', overflow: 'hidden', maxWidth: '400px', margin: '0px auto', height: '100px',}}></iframe>;

// Bees button
const KNavButton = <div id='beebutton'>
  <Button variant='secondary' href="https://www.pollinator.org/">
    Bees? <img src={Pic} width='25' alt=""/>
  </Button>
  </div>

// React router components generated from external pages.js
const KLinks = pages.map((item) => (<KNavLink page={item} key={item.name}/>));
const KRoutes = pages.map((item) => (<KNavRoute page={item} key={item.name} />));

// Function to retrieve recordings list
async function getRecordings(){
  const url = 'https://api.dropboxapi.com/2/files/list_folder';
  const data = {
    path: "",
    shared_link: '{"url": "https://www.dropbox.com/sh/x803wja5vch2l7d/AACRsW0xmtdoLubihr8DE9pYa/Recorded%20Shows?dl=0&subfolder_nav_tracking=1"}',
    recursive: false,
    include_media_info: true,
    include_deleted: false,
    include_has_explicit_shared_members: false,
    include_mounted_folders: true,
    include_non_downloadable_files: true,
  };
  const otherParams = {
    headers:{
      "Authorization": "Bearer sl.AYmJzkWQbOWg_OutYvBlD78oSvUYv-7ppwkvohbhpzV2h6MOl5buVajj-4Yj_xV_rbDSWsBJ53zqYg8lirY1s134RCDmD7jnVHtcHnsKXrLlEILA7P5UC6Nyq05z6JrOwbKEqa2l",
      "Content-Type": "application/json",
    },
    body: data,
    method: "POST",
  };
  let response = await fetch(url, otherParams);
  console.log(response)
  let returndata = await response;
  console.log(returndata)
  // returndata.then(item => console.log(item));
}

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={ 
      recordings: null,
    };

  }

  // componentDidMount(){
  //   getRecordings()
  // }

  render() {
  return (
    <Router hashType='noslash' basename={process.env.PUBLIC_URL + '/'}>
      <KNavbar brand={"OTR"} button={KNavButton}>
        {KLinks}
        <NavDropdown title="Listen" id="basic-nav-dropdown" >
          <NavDropdown.Item>{player}</NavDropdown.Item>
        </NavDropdown>
      </KNavbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <>
        <RecordingsContext.Provider value={this.state.recordings}>
          {KRoutes}
        </RecordingsContext.Provider>
        </>
      </Switch>
      <img className='img-fluid pt-2 mx-auto' src={Pic2} alt="" />
    </Router>
  )
  }
}

export default App;