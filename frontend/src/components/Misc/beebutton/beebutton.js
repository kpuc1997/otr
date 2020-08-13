import React from 'react';
import { Button } from 'react-bootstrap';
import Pic from './bee.png';


// Bees button. A button for bees.

const BeeButton = <div id='beebutton'>
  <Button variant='secondary' href="https://www.pollinator.org/">
    Bees? <img src={Pic} width='25' alt=""/>
  </Button>
  </div>

export default BeeButton;