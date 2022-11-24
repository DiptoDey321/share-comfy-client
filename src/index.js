import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Authentication from './Authentication/Authentication';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Authentication>
      <App />
    </Authentication>
  </React.StrictMode>
);

reportWebVitals();
