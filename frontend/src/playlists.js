import React from 'react';
import Playlist from './components/Misc/playlist.js';
import { Container,
    Row,
    Spinner,
    } from 'react-bootstrap';

class Playlists extends React.Component{
    constructor(props){
        super(props);
    
        this.state={ 
          playlists: <Playlist>
                        <Spinner animation="border" />
                    </Playlist>,
        };
    
      }
    
    componentDidMount() {
        fetch('/api/playlists').then(res => res.json()).then(data => this.setState({playlists: data.map((playlist) => (
            <Playlist>
                <iframe title={playlist.Date} src={playlist.Link} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </Playlist>
        ))}))
    }
    
    render() {
        return <Container>
                    <Row className='justify-content-around'>
                        {this.state.playlists}
                    </Row>
                </Container>
        
    }
}

export default Playlists;