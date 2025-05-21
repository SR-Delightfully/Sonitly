import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CurrentUserProvider } from './components/CurrentUserContext';

import './css/0-global-styles.css';
import './css/1-home-page-styles.css';
import './css/2-about-page-styles.css';
import './css/3-shop-page-styles.css';
import './css/4-explore-page-styles.css';
import './css/5-product-details-styles.css';
import './css/6-login-signup-styles.css';
import './css/7-bar-styles.css';
import './css/8-small-product-styles.css';
import './css/9-settings-styles.css';
import './css/10-book-shelf-styles.css';
import './css/11-profile-styles.css';
import './css/12-product-suggestion-styles.css';
import './css/13-user-cart-styles.css';
import './css/14-footer.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CurrentUserProvider>
    <App />
  </CurrentUserProvider>
);
