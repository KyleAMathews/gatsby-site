import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';

const ReactClock = React.createClass({

  render() {
    return (
      <ReactCountdownClock
         seconds={60}
         color="#275add"
         alpha={0.9}
         size={300}/>
    );
  },
});

export default ReactClock;
