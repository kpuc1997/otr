import React from 'react';

// A component which renders the wuml livestream. 
// May look weird at widths below 400px.
// Uses default export.

const player = <iframe title="stream" src="https://embed.radio.co/player/fa3c718.html" width="100%" allow="autoplay" scrolling="no" style={{border: 'none', overflow: 'hidden', maxWidth: '400px', margin: '0px auto', height: '100px',}}></iframe>;

export default player;