import * as React from 'react';

/**
 * Dependencies
 */
import { HomeService } from '../../modules/home/home.service';

/**
 * Components
 */
import { Users } from 'react-feather';

/**
 * Styles
 */
import './index.style.scss';

interface IProps {
  mode?: 'index' | 'client';
}

const OnlineCounter: React.FC<IProps> = props => {
  const [onlines, setOnlines] = React.useState<number>();
  const [retry, setRetry] = React.useState<number>(0);
  const [error, setError] = React.useState<Error>();

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
    };

    try {
      _load();
    } catch (e) {
      setError(e);
    }
  }, [retry]);

  return (
    <div className="">
      {props.mode === 'client' ? (
        <div className="p-1 flex items-center justify-center animated pulse slower infinite border-gray-500 bg-gray-900 border-solid border-2 cursor-default select-none rounded">
          <Users className="text-white" size={16} />

          {error && <>{error.message}</>}

          <p className="flex text-white mt-1 ml-2">
            {onlines === undefined ? (
              <div className="">...</div>
            ) : (
              <div className="">{onlines}</div>
            )}
          </p>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default OnlineCounter;
