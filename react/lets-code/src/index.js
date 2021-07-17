import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line 
import App from './components/App';
// eslint-disable-next-line
import App2 from './components/App2';
import App3 from './components/App3';
import reportWebVitals from './components/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App3 />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();