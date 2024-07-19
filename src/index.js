import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App'; // Ensure the path is correct
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();
