import * as React from 'react';

/**
 * Dependencies
 */
import { HomeService } from '../../modules/home/home.service';

/**
 * Styles
 */
import './index.style.scss';

const OnlineCounter: React.FC = () => {
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
    <div className="flex justify-between px-2 py-2 bg-blue-100 rounded">
      <p className="flex text-gray-700">
        <svg
          className="h2 w-2 text-teal-500 mx-2 blink"
          viewBox="0 0 8 8"
          fill="currentColor"
        >
          <circle cx="4" cy="4" r="3" />
        </svg>
        {error && <>{error.message}</>}

        {onlines === undefined
          ? 'Atualizando...'
          : `${onlines} ${onlines === 1 ? `habbo online` : `habbos online`}!`}
      </p>
    </div>
  );

  // return (
  //   <div className="font-thin bg-white rounded-full p-3 text-center">
  //     {error && <>{error.message}</>}

  //     {onlines === undefined
  //       ? 'Atualizando...'
  //       : `${onlines} ${onlines === 1 ? `habbo online` : `habbos online`}!`}
  //   </div>
  // );
};

export default OnlineCounter;
