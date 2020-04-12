import * as React from 'react';

/**
 * Dependencies
 */
import { useLocation } from 'react-router-dom';
import { useAppState } from '../../../../App.context';

/**
 * Components
 */
import NavigationItem from './NavigationItem';
import NavigationJoinButton from './NavigationJoinButton';

const NavigationWidget: React.FC = () => {
  const { pathname } = useLocation();
  const { user } = useAppState();

  return (
    <div className="bg-gray-100 w-full shadow-2xl">
      <div className="bg-white">
        <div className="container mx-auto">
          <div className="flex flex-1 items-center">
            <div className="hidden sm:flex sm:items-center w-2/3">
              <NavigationItem
                title="Início"
                iconUrl="/assets/images/icons/home.png"
                color="#276749"
                pathname={'/'}
                active={pathname === '/'}
              />
              <NavigationItem
                title="Notícias"
                iconUrl="/assets/images/icons/articles.png"
                color="#44337a"
                pathname={'/articles'}
                active={pathname.includes('/articles')}
              />
            </div>

            <div
              className="hidden sm:flex sm:items-center justify-center"
              style={{
                width: '300px',
              }}
            >
              {user && <NavigationJoinButton />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationWidget;
