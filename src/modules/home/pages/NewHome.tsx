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

/**
 * Models
 */

const NewHome: React.FC = () => {
  return (
    <>
      <HomeGrid
        className="py-2 animated fadeIn"
        leftChildren={<HabboWidget />}
        rightChildren={<ArticlesWidget />}
      />
    </>
  );
};

export default NewHome;
