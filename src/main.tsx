import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import './index.css';
import 'virtual:windi-utilities.css';
import 'virtual:windi-devtools';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
