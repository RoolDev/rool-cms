import * as React from 'react';

/**
 * Dependencies
 */
import { HomeService } from '../../modules/home/home.service';
import { animateCSS } from '../../modules/home/utils';

/**
 * Components
 */
import { Users } from 'react-feather';

/**
 * Styles
 */
import './index.style.scss';

interface IProps {
  mode?: 'index' | 'client' | 'home';
}

const OnlineCounter: React.FC<IProps> = (props) => {
  const [onlines, setOnlines] = React.useState<number>();
  const [retry, setRetry] = React.useState<number>(0);
  const [error, setError] = React.useState<Error>();

  const counterHomeEl = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let id = setInterval(() => {
      setRetry(retry + 1);
      setOnlines(undefined);
    }, 10000);

    return () => clearInterval(id);
  });

  React.useEffect(() => {
    const _load = async () => {
      const onlines = await HomeService.getUsersOnlineCount();

      setOnlines(onlines.usersOnline);

      if (counterHomeEl.current) {
        animateCSS(counterHomeEl.current, 'flash');
      }
    };

    try {
      _load();
    } catch (e) {
      setError(e);
    }
  }, [retry]);

  switch (props.mode) {
    case 'home':
      return (
        <div className="flex flex-col w-32 h-24 bg-white rounded justify-center border border-dGray select-none">
          <div className="flex justify-center items-center p-1">
            <img
              className="p-2"
              src="/assets/images/icons/headCounter.png"
              alt="habbos"
            />
            <p ref={counterHomeEl} className="font-semibold mt-2">
              {!onlines ? `...` : `${onlines}`}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm">Habbos conectados!</p>
          </div>
        </div>
      );

    case 'client':
      return (
        <div className="p-1 flex items-center justify-center animated pulse slower infinite border-gray-500 bg-gray-900 border-solid border-2 cursor-default select-none rounded">
          <Users className="text-white" size={16} />

          {error && <>{error.message}</>}

          <div className="flex text-white mt-1 ml-2">
            {onlines === undefined ? (
              <p className="">...</p>
            ) : (
              <p className="">{onlines}</p>
            )}
          </div>
        </div>
      );

    default:
      return (
        <div className="px-2 py-2 flex rounded font-thin bg-white rounded-full p-3 text-center">
          <p className="flex text-gray-700">
            {error && <>{error.message}</>}

            {onlines === undefined
              ? 'Atualizando...'
              : `${onlines} ${
                  onlines === 1 ? `habbo online` : `habbos online`
                }!`}
          </p>
        </div>
      );
  }
};

export default OnlineCounter;
