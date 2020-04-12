import * as React from 'react';

/**
 * Dependencies
 */

/**
 * Components
 */
import HomeGrid from '../../../components/home-grid';
import ArticlesWidget from '../components/articles/ArticlesWidget';
import HabboWidget from '../components/habbo-widget/HabboWidget';
import NavigationWidget from '../components/navigation/NavigationWidget';
import HomeHeader from '../components/header/HomeHeader';

/**
 * Models
 */
import './NewHome.style.scss';

const NewHome: React.FC = () => {
  return (
    <div className="bg-gray-300 w-full min-h-screen m-0">
      <HomeHeader />
      <NavigationWidget />

      <HomeGrid
        className="py-2 animated fadeIn"
        leftChildren={<HabboWidget />}
        rightChildren={<ArticlesWidget />}
      />
    </div>
  );
};

export default NewHome;
