import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CryptoUI } from './CryptoUI';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { Analytics } from '@vercel/analytics/react';

ReactDOM.render(
  <React.StrictMode>
    <CryptoUI />
    <Analytics />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
