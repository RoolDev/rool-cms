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

interface IProps {}

const HabboWidget: React.FC<IProps> = (props) => {
  const { user } = useAppState();

  if (!user) return <>Não autenticado</>;

  return (
    <div className="md:flex flex-col bg-white border border-dGray shadow-lg">
      <div className="md:flex p-1">
        <HabboAvatarWidget
          username={user.username}
          look={user.look}
          online={user.online}
        />

        <HabboDetailsWidget
          username={user.username}
          lastOnline={user.last_online}
        />
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
