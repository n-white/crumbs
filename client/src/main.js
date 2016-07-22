import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import io from 'socket.io-client'

let mainSocket = io()

ReactDOM.render(
  <App mainSocket={mainSocket} />,
  document.getElementById('app')
);

