import React from "react";

class Streamer extends React.Component {
    render() {
        return  <audio controls>
                    <source src="https://s3.radio.co/s5e286e909/listen" type="audio/mpeg" />
                    Your browser does not support the audio tag.
                </audio> 
    }
}

export default Streamer;