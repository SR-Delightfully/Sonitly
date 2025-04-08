import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// importing style sheets:
import './css/0-global-styles.css';
import './css/1-home-page-styles.css';
import './css/2-about-page-styles.css';
import './css/3-shop-page-styles.css';
import './css/4-explore-page-styles.css';
import './css/5-product-details-styles.css';
import './css/6-login-signup-styles.css';
import './css/7-nav-bar-styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);