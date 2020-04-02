import * as React from 'react';

/**
 * Dependencies
 */
import * as AppActions from './App.actions';
import { useMount } from 'react-use';
import { useApp } from './App.context';
import { Redirect, Route, useLocation } from 'react-router-dom';

/**
 * Components
 */
import LoadingSpinner from './components/spinner';

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const [state, dispatch] = useApp();

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const location = useLocation();

  useMount(async () => {
    try {
      if (state.accessToken && state.accessTokenValidated === false) {
        dispatch(await AppActions.revalidateToken(state.accessToken));
      }
    } catch (e) {
      dispatch(AppActions.removeAccessToken());
    } finally {
      setIsLoading(false);
    }
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (state.user && state.accessTokenValidated) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: location.pathname
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
