import React from 'react';
import { Container,
    Row,
    } from 'react-bootstrap';
import CreatePlaylistForm from './components/Forms/CreatePlaylistForm';

class Playlists extends React.Component{
   
    render() {
        return <Container>
                    <div align='center' className='pb-4'>
                        <CreatePlaylistForm />
                    </div>
                    <Row className='justify-content-around'>
                        {this.props.playlists}
                    </Row>
                </Container>
        
    }
}

export default Playlists;