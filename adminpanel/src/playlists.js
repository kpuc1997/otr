import React from 'react';
import { Container,
    Row,
    } from 'react-bootstrap';

class Playlists extends React.Component{
   
    render() {
        return <Container>
                    <Row className='justify-content-around'>
                        {this.props.playlists}
                    </Row>
                </Container>
        
    }
}

export default Playlists;