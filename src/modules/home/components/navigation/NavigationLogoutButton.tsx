import * as React from 'react';

/**
 * Dependencies
 */
import { Link } from 'react-router-dom';
import { animateCSS } from '../../utils';
import * as AppActions from '../../../../App.actions';
import { useApp } from '../../../../App.context';
import { useHistory } from 'react-router-dom';

const NavigationLogoutButton: React.FC = () => {
  const element = React.useRef<HTMLButtonElement>(null);

  const history = useHistory();
  const [state, dispatch] = useApp();

  const handleOnClick = async () => {

    dispatch(AppActions.signoutUser());
    history.push('/');
  } 

  return (
    <Link
      onMouseEnter={(event) => {
        if (element.current) {
          animateCSS(element.current, 'pulse');
        }
      }}
      to={{
        pathname: '/',
      }}
    >
      <button
        ref={element}
        className="bg-red-700 hover:bg-red-900 py-2 px-4 rounded inline-flex items-center"
        onClick={handleOnClick}
      >
      <p className="text-white font-semibold text-sm">
        Sair
      </p>
      </button>
    </Link>
  );
};

export default NavigationLogoutButton;
