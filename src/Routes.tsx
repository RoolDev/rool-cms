import * as React from 'react';

/**
 * Dependencies
 */
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Components
 */
import ClientPage from './modules/home/pages/Client';
import ClientDevPage from './modules/home/pages/ClientDev';
import NewHome from './modules/home/pages/NewHome';
import HomeHeader from './modules/home/components/header/HomeHeader';
import NavigationWidget from './modules/home/components/navigation/NavigationWidget';
import Articles from './modules/home/pages/Articles';
import Footer from './modules/home/components/footer/Footer';
import LoginModal from './modules/home/components/login/LoginModal';
import RegisterModal from './modules/home/components/register/RegisterModal';
import RecoverPasswordModal from './modules/home/components/recover-password/RecoverPasswordModal';
import ChangePasswordModal from './modules/home/components/change-password/ChangePasswordModal';

const ModalRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginModal} />
      <Route path="/register" component={RegisterModal} />
    </Switch>
  );
};

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/client" component={ClientPage} />
        <PrivateRoute exact path="/client-dev" component={ClientDevPage} />

        <div className="bg-gray-300 min-h-screen flex flex-col animated fadeIn">
          <div className="flex-grow">
            <HomeHeader />
            <NavigationWidget />

            <Switch>
              <Route exact path="/" component={NewHome} />
              <Route exact path="/articles/:slug?" component={Articles} />
              <Route exact path="/recover" component={RecoverPasswordModal} />
              <Route exact path="/recover/changePassword" component={ChangePasswordModal} />

            </Switch>
          </div>
          <Footer />

          <ModalRoutes />
        </div>
      </Switch>
    </Router>
  );
};

export default Routes;
