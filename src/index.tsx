import * as React from 'react';
import * as serviceWorker from './serviceWorker';

import ReactDOM from 'react-dom';

/**
 * Dependencies
 */
import * as Sentry from '@sentry/browser';
import { client } from './config/graphql';
import { AppProvider, AppTokenVerification } from './App.context';
import { ToastContainer, toast } from 'react-toastify';
import { ApolloProvider } from '@apollo/client';

import Routes from './Routes';

/**
 * Styles
 */
import './assets/app.scss';
import './assets/main.css';
import './assets/animate.scss';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn:
      'https://3aef0af80bfa449abedcdbce7d682ca2@o375600.ingest.sentry.io/5195439',
  });
}

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AppTokenVerification>
        <ApolloProvider client={client}>
          <ToastContainer />

          <Routes />
        </ApolloProvider>
      </AppTokenVerification>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
