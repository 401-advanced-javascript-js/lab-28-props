import React from 'react';

import Message from './components/message/message';

import('./app.scss');

class App extends React.Component {
  render() {
    return (
      <>
        <Message />
      </>
    );
  }
}

export default App;
