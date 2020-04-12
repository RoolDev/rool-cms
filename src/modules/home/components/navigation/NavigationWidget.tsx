import * as React from 'react';

/**
 * Dependencies
 */

/**
 * Components
 */
import NavigationItem from './NavigationItem';
import NavigationJoinButton from './NavigationJoinButton';

const NavigationWidget: React.FC = () => {
  return (
    <div className="bg-gray-100 w-full">
      <div className="bg-white shadow">
        <div className="container mx-auto">
          <div className="flex flex-1 items-center">
            <div className="hidden sm:flex sm:items-center w-2/3">
              <NavigationItem
                title="Início"
                iconUrl="/assets/images/icons/home.png"
                color="#276749"
                pathname={'/home'}
              />
              <NavigationItem
                title="Notícias"
                iconUrl="/assets/images/icons/articles.png"
                color="#44337a"
                pathname={'/articles'}
              />
            </div>

            <div
              className="hidden sm:flex sm:items-center justify-center"
              style={{
                width: '300px',
              }}
            >
              <NavigationJoinButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationWidget;
