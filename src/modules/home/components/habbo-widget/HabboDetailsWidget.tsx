import * as React from 'react';

/**
 * Dependencies
 */
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';

/**
 * Models
 */
import { IUserDetails } from '../../models/user-details';

const ptLocale = require('date-fns/locale/pt-BR');

interface IProps {
  user: IUserDetails;
}

const HabboDetailsWidget: React.FC<IProps> = (props) => {
  const { username, last_online } = props.user;

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
          Online pela última vez: {getTimestampDifference(last_online)}.
        </p>

        <Link
          className="mt-10 bg-green-700 hover:bg-green-900 text-white font-bold p-4 rounded w-64 text-center"
          to={{
            pathname: '/client',
          }}
        >
          Jogue agora!
        </Link>
      </div>

      <div className="invisible md:visible flex justify-end -mt-20">
        <img src="/assets/images/icons/welcomeFrank.png" alt="" />
      </div>
    </div>
  );
};

export default HabboDetailsWidget;
