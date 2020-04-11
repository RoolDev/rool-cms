import * as React from 'react';
import { UserPlus } from 'react-feather';
import InfoBoxWidget from '../components/InfoBoxWidget';
import InfoBoxWidgetItem from '../components/InfoBoxWidgetItem';
import HabboAvatarWidget from '../components/HabboAvatarWidget';
import { useAppState } from '../../../App.context';
import HabboDetailsWidget from '../components/HabboDetailsWidget';

const NewHome: React.FC = () => {
  const { user } = useAppState();

  if (!user) {
    return <>You need to login</>;
  }

  return (
    <div className="">
      <div className="md:flex flex-col bg-white">
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
    </div>
  );
};

export default NewHome;
