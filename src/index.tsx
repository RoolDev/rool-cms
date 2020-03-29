import * as React from 'react';
import * as serviceWorker from './serviceWorker';

import ReactDOM from 'react-dom';

/**
 * Dependencies
 */
import { BrowserRouter as Router, Route } from 'react-router-dom';

/**
 * Components
 */
import IndexPage from './modules/index/pages/Index';
import RegisterPage from './modules/index/pages/Register';

/**
 * Styles
 */
import './assets/app.scss';
import './assets/main.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={IndexPage} />
      <Route path="/register" component={RegisterPage} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
