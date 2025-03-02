import * as React from 'react';

/**
 * Models
 */
import { IUserDetails } from '../../models/user-details';

interface IProps {
  user: IUserDetails;
}

const HabboAvatarWidget: React.FC<IProps> = (props) => {
  const { look, username, online } = props.user;

  const isOnline = online === '1' ? 'userOnline' : 'userOffline';

  return (
    <div className="h-40 bg-gray-300 rounded md:m-4 md:w-40 sm:justify-center">
      <img
        className="absolute p-4"
        src={`/assets/images/icons/${isOnline}.gif`}
        alt="status"
      />
      <div
        className="absolute bg-no-repeat bg-bottom ml-6 mt-3"
        style={{
          backgroundImage: `url(/assets/images/icons/platform.png)`,
          padding: `0 25px 25px 22px`,
        }}
      >
        <img
          alt={username}
          src={`https://www.habbo.nl/habbo-imaging/avatarimage?figure=${look}`}
        />
      </div>
    </div>
  );
};

export default HabboAvatarWidget;
