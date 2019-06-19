import React from 'react';

import('./message.scss');

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World',
    };
  }

  render() {
    return (
      <div id="message">
        <p>{this.state.text}</p>
      </div>
    );
  }
}
