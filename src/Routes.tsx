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
import HomePage from './modules/home/pages/Home';

const HomeRoutes: React.FC = () => {
  return (
    <>
      <Route exact path="/home" component={HomePage} />
    </>
  );
};

const Routes: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/login" component={IndexPage} />
      <Route exact path="/register" component={RegisterPage} />

      <PrivateRoute path="/" component={HomeRoutes} />
    </Router>
  );
};

export default Routes;
