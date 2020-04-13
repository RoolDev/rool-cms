import * as React from 'react';

/**
 * Dependencies
 */
import { animateCSS } from '../../utils';
import { useHistory } from 'react-router-dom';

/**
 * Components
 */
import OnlineCounter from '../../../../components/online-counter';

const HomeHeader: React.FC = () => {
  const logoElement = React.useRef<HTMLImageElement>(null);

  const history = useHistory();

  return (
    <div
      className="w-full h-40 object-contain bg-no-repeat"
      style={{
        backgroundColor: '#0E1D41',
        backgroundImage:
          'url(/assets/images/headers/furnimatic_backdrop_left_tempfix3.png)',
      }}
    >
      <div className="container mx-auto h-full flex flex-col justify-center">
        <div className="flex">
          <div className="flex flex-col items-center justify-center w-2/3">
            <img
              className="select-none cursor-pointer"
              onMouseEnter={(event) => {
                if (logoElement.current) {
                  animateCSS(logoElement.current, 'heartBeat');
                }
              }}
              onClick={() => {
                history.push('/');
              }}
              ref={logoElement}
              alt="logo"
              src="/assets/images/logo.png"
            />
          </div>
          <div
            className="flex flex-col justify-center items-center p-5"
            style={{
              width: '300px',
            }}
          >
            <OnlineCounter mode="home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
