import React from 'react';
import './Custom.scss';
import { KNavbar, KNavLink, KNavRoute } from './components/Navbar/KNavbar';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import pages from './pages';
import { NavDropdown,
          Spinner, } from 'react-bootstrap';
import Home from './Home';
import Pic2 from './WUML 1.png';
import player from './components/Misc/wumlplayer';
import BeeButton from './components/Misc/beebutton/beebutton';
import Secret from './Secret';
import TOS from './termsofservice'
import BrainPowder from './BrainPowder';
import Staff from './staff';
import Recordings from './recordings';
import Skating from './matadorskating';
import Poll from './mmmPoll';
import Playlists from './playlists';
import Playlist from './components/Misc/playlist.js';
import PlaylistForm from './components/Forms/PlaylistForm';
import RecordingForm from './components/Forms/RecordingForm';

// React router components generated from external pages.js
const KLinks = pages.map((item) => (<KNavLink page={item} key={item.name}/>));
const KRoutes = pages.map((item) => (<KNavRoute page={item} key={item.name} />));


// Main app
class App extends React.Component{
  constructor(props){
    super(props);

    this.state={ 
      recordings: null,
      MainDescription: <Spinner animation="border" />,
      BenDescription: <Spinner animation="border" />,
      VickiDescription: <Spinner animation="border" />,
      KyleDescription: <Spinner animation="border" />,
      Recordings: <Spinner animation="border" />,
      playlists: <Spinner animation="border" />,
      staff: [],

    };

  }

  componentDidMount() {
    fetch('/api/text/Main Description').then(res => res.json()).then(data => this.setState({MainDescription: data.Text}));
    fetch('/api/text/VickiDescription').then(res => res.json()).then(data => this.setState({VickiDescription: data.Text}));
    fetch('/api/text/BenDescription').then(res => res.json()).then(data => this.setState({BenDescription: data.Text}));
    fetch('/api/text/KyleDescription').then(res => res.json()).then(data => this.setState({KyleDescription: data.Text}));
    fetch('/api/recordings').then(res => res.json()).then(data => this.setState({Recordings: data.map((recording) => (
      <>
      <iframe key= {recording.Date} title={recording.Date} width="100%" height="120" src={recording.Link} frameBorder="0" ></iframe>
      <RecordingForm date={recording.Date} />
      </>
    ))}));
    fetch('/api/playlists').then(res => res.json()).then(data => this.setState({playlists: data.map((playlist) => (
      <Playlist>
          <iframe title={playlist.Date} src={playlist.Link} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <PlaylistForm date={playlist.Date} />
      </Playlist>
    ))}));
    fetch('/api/staff/allstaff').then(res => res.json()).then(data => {
      this.setState({staff: data})
    });
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
        <Route exact path="/">
          <Home MainDescription={this.state.MainDescription} />
        </Route>
        <Route exact path="/secret" component={Secret} />
        <Route exact path='/termsofservice' component={TOS} />
        <>
          <Route path='/staff'>
            <Staff ben={this.state.BenDescription} 
                  vicki={this.state.VickiDescription} 
                  kyle={this.state.KyleDescription}
                  staff={this.state.staff} />
          </Route>
          <Route path='/Recordings'>
            <Recordings Recordings={this.state.Recordings} />
          </Route>
          <Route path='/playlist'>
            <Playlists playlists={this.state.playlists} />
          </Route>
          <Route path='/mmm' component={Poll} />
          <Route path='/BrainPowder' component={BrainPowder} />
          <Route path='/Skating' component={Skating} />
        </>
      </Switch>
      <img className='img-fluid pt-2 mx-auto d-block' src={Pic2} alt="" />
      <KNavLink page={{url:'/termsofservice', name:'Terms of Service'}}>Terms of Service</KNavLink>
    </Router>
  )
  }
}

export default App;