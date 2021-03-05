import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Index.css';
import App from './Components/App';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
