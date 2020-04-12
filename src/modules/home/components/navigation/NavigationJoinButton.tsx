import * as React from 'react';

/**
 * Dependencies
 */
import { Link } from 'react-router-dom';
import { animateCSS } from '../../utils';

const NavigationJoinButton: React.FC = () => {
  const element = React.useRef<HTMLButtonElement>(null);

  return (
    <Link
      onMouseEnter={(event) => {
        if (element.current) {
          animateCSS(element.current, 'pulse');
        }
      }}
      to={{
        pathname: '/client',
      }}
    >
      <button
        ref={element}
        className="bg-green-700 hover:bg-green-900 py-2 px-4 rounded inline-flex items-center"
      >
        <img
          className="mr-2"
          alt="entrar"
          src="/assets/images/icons/joinHotel.png"
        />
        <p className="text-white font-semibold text-sm">
          Entrar no Habbo Rool!
        </p>
      </button>
    </Link>
  );
};

export default NavigationJoinButton;
