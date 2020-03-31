import * as React from 'react';

/**
 * Dependencies
 */
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/**
 * Components
 */
import IndexPage from './modules/index/pages/Index';
import RegisterPage from './modules/index/pages/Register';
import ClientPage from './modules/home/pages/Client';
import ClientDevPage from './modules/home/pages/ClientDev';

const Routes: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/login" component={IndexPage} />
      <Route exact path="/register" component={RegisterPage} />

      <PrivateRoute path="/home" component={ClientPage} />
      <PrivateRoute exact path="/home-dev" component={ClientDevPage} />
    </Router>
  );
};

export default Routes;
