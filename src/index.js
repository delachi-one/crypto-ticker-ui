import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CryptoUI } from './CryptoUI';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <CryptoUI />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
