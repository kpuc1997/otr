import React from 'react';
import Playlist from './components/Misc/playlist.js';
import { Container,
    Row,
    Col, } from 'react-bootstrap';

class Playlists extends React.Component{
    render() {
        return <Container>
                    <Row className='align-items-center mx-auto'>

                        {/* 7/18/2020 */}
                        <Playlist>
                            <iframe src="https://open.spotify.com/embed/playlist/6fuDDUaszOEmjFomRto5mx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </Playlist>

                        {/* 7/11/2020 */}
                        <Playlist>
                            <iframe src="https://open.spotify.com/embed/playlist/1dQzzTykM4zYKPn3f1xQvQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </Playlist>

                        {/* 7/4/2020 */}
                        <Playlist>
                            <iframe src="https://open.spotify.com/embed/playlist/7yCgGU3pPEdNXVXtRCh39o" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </Playlist>

                        {/* 6/27/2020 */}
                        <Playlist>
                            <iframe src="https://open.spotify.com/embed/playlist/5pWzwJ16WsLpEIIQHolIM7" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </Playlist>

                        {/* 6/20/2020 */}
                        <Playlist>
                            <iframe src="https://open.spotify.com/embed/playlist/1oZasc96wEtTMcThfRsssW" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </Playlist>

                        {/* 6/13/2020 */}
                        <Playlist>
                            <iframe src="https://open.spotify.com/embed/playlist/5JqRfU1WqCLDXRDevq8Coj" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </Playlist>

                        {/* 6/6/2020 */}
                        <Playlist>
                            <iframe src="https://open.spotify.com/embed/playlist/61N7FF3bJqPRu7QO6Rnn4N" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
                        </Playlist>

                        {/* 5/30/2020 */}
                        <Playlist>
                            <iframe src="https://open.spotify.com/embed/playlist/3Hf8qzFuVvpKdnM1mdXOzV" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </Playlist>
                    </Row>
                </Container>
        
    }
}

export default Playlists;