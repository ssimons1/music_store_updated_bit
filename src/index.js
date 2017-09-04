import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import songlist from './songlist.js';


ReactDOM.render(<App songlist={songlist.results} />, document.getElementById('root'));
registerServiceWorker();
