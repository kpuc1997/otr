import React from 'react';
import { Col, } from 'react-bootstrap';

const Playlist = (props) => (<Col>
                        <div align='center'>
                        {props.children}
                        </div>
                </Col>)

export default Playlist;



