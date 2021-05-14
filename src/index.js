import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import netlifyIdentity from 'netlify-identity-widget';


window.netlifyIdentity = netlifyIdentity;

netlifyIdentity.init([{APIUrl:'https://gracious-goodall-976590.netlify.app/',locale:'en'}]);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
