import * as React from 'react';

/**
 * Dependencies
 */
import { useAppState } from '../../../../App.context';

/**
 * Components
 */
import HabboAvatarWidget from './HabboAvatarWidget';
import HabboDetailsWidget from './HabboDetailsWidget';
import InfoBoxWidget from './InfoBoxWidget';
import InfoBoxWidgetItem from './InfoBoxWidgetItem';
import NotAuthenticatedWidget from './NotAuthenticatedWidget';

interface IProps {}

const HabboWidget: React.FC<IProps> = (props) => {
  const { user } = useAppState();

  if (!user) return <NotAuthenticatedWidget />;

  return (
    <div className="md:flex flex-col bg-white border border-dGray shadow-lg rounded rounded-b-none">
      <div className="md:flex p-1">
        <HabboAvatarWidget user={user} />

        <HabboDetailsWidget user={user} />
      </div>

      <InfoBoxWidget>
        <InfoBoxWidgetItem
          value={user.credits}
          label="moedas"
          alt="moedas"
          imageUrl="/assets/images/icons/creditIcon.png"
        />
        <InfoBoxWidgetItem
          value={user.currencies.DUCKETS?.amount ?? 0}
          label="duckets"
          alt="duckets"
          imageUrl="/assets/images/icons/ducketIcon.png"
        />
        <InfoBoxWidgetItem
          value={user.currencies.DIAMONDS?.amount ?? 0}
          label="diamantes"
          alt="diamantes"
          imageUrl="/assets/images/icons/diamondIcon.png"
        />
      </InfoBoxWidget>
    </div>
  );
};

export default HabboWidget;
