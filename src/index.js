// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'path-browserify';
import 'os-browserify/browser';
import 'crypto-browserify';


require('dotenv').config();

// Add a fallback for the 'stream' module polyfill
if (!window.stream) {
  window.stream = require('stream-browserify');
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

