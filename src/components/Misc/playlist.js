import React from 'react';
import { Container,
    Row,
    Col, } from 'react-bootstrap';

// const Playlist = (props) => (<Col xs={12} sm={8} className='align-self-center mx-auto'>
//                     {props.children}
//                 </Col>)

const Playlist = (props) => (<Col>
                        <div align='center'>
                        {props.children}
                        </div>
                </Col>)

export default Playlist;



