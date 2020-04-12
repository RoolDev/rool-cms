import * as React from 'react';

/**
 * Dependencies
 */
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Components
 */
import IndexPage from './modules/index/pages/Index';
import RegisterPage from './modules/index/pages/Register';
import ClientPage from './modules/home/pages/Client';
import ClientDevPage from './modules/home/pages/ClientDev';
import NewHome from './modules/home/pages/NewHome';
import HomeHeader from './modules/home/components/header/HomeHeader';
import NavigationWidget from './modules/home/components/navigation/NavigationWidget';
import Articles from './modules/home/pages/Articles';
import Footer from './modules/home/components/footer/Footer';

const RoutesWithTemplate: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/client" component={ClientPage} />
      <PrivateRoute exact path="/client-dev" component={ClientDevPage} />

      <div className="bg-gray-300 min-h-screen flex flex-col animated fadeIn">
        <div className="flex-grow">
          <HomeHeader />
          <NavigationWidget />

          <Switch>
            <PrivateRoute exact path="/home" component={NewHome} />
            <PrivateRoute exact path="/articles/:slug?" component={Articles} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Switch>
  );
};

const Routes: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/login" component={IndexPage} />
      <Route exact path="/register" component={RegisterPage} />

      <PrivateRoute path="/" component={RoutesWithTemplate} />
    </Router>
  );
};

export default Routes;
