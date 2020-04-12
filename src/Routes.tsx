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
import NewHome from './modules/home/pages/NewHome';

const PrivateRoutes = () => {
  return (
    <>
      <PrivateRoute exact path="/home" component={NewHome} />
      <PrivateRoute exact path="/client" component={ClientPage} />
      <PrivateRoute exact path="/home-dev" component={ClientDevPage} />
    </>
  );
};

const Routes: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/login" component={IndexPage} />
      <Route exact path="/register" component={RegisterPage} />

      <PrivateRoute path="/" component={PrivateRoutes} />
    </Router>
  );
};

export default Routes;
