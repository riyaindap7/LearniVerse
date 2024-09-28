// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming App is your main component
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
