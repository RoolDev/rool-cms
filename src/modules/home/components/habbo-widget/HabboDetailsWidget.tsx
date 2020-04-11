import * as React from 'react';

/**
 * Dependencies
 */
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';

const ptLocale = require('date-fns/locale/pt-BR');

interface IProps {
  username: string;
  lastOnline: number;
}

const HabboDetailsWidget: React.FC<IProps> = (props) => {
  const { username, lastOnline } = props;

  const getTimestampDifference = (time: number) => {
    return formatDistanceToNow(new Date(time * 1000), {
      locale: ptLocale.default,
    });
  };

  return (
    <div className="flex-1">
      <div className="flex mt-4">
        <p className="font-semibold text-lg">{username}</p>
        <div className="ml-5 my-1.75">
          <img src="/assets/images/icons/avatarIcon.png" alt="avatar icon" />
        </div>
      </div>

      <div className="flex mt-1 flex-col">
        <p className="font-light">
          Online pela última vez: {getTimestampDifference(lastOnline)}.
        </p>

        <Link
          to={{
            pathname: '/client',
          }}
        >
          <button className="mt-10 bg-green-700 hover:bg-green-900 text-white font-bold p-4 rounded w-64">
            Jogue agora!
          </button>
        </Link>
      </div>

      <div className="invisible md:visible flex justify-end -mt-20">
        <img src="/assets/images/icons/welcomeFrank.png" alt="" />
      </div>
    </div>
  );
};

export default HabboDetailsWidget;
