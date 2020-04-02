import * as React from 'react';
import * as serviceWorker from './serviceWorker';

import ReactDOM from 'react-dom';

/**
 * Dependencies
 */
import { AppProvider } from './App.context';
import { ToastContainer, toast } from 'react-toastify';
import Routes from './Routes';

/**
 * Styles
 */
import './assets/app.scss';
import './assets/main.css';
import './assets/animate.scss';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ToastContainer />

      <Routes />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
