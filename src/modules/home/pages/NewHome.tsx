import * as React from 'react';

/**
 * Dependencies
 */

/**
 * Components
 */
import HomeGrid from '../../../components/home-grid';
import HabboWidget from '../components/habbo-widget/HabboWidget';
import ArticlesWidget from '../components/articles/ArticlesWidget';
import Helmet from 'react-helmet';

/**
 * Models
 */
import './NewHome.style.scss';

const NewHome: React.FC = () => {
  return (
    <>
      <Helmet title={`Habbo Rool: Seja bem vindo!`} />

      <HomeGrid
        className="py-2 animated fadeIn"
        leftChildren={<HabboWidget />}
        rightChildren={<ArticlesWidget />}
      />
    </>
  );
};

export default NewHome;
