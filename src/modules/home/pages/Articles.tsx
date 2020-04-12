import * as React from 'react';

/**
 * Dependencies
 */
import { useParams } from 'react-router-dom';

/**
 * Components
 */
import ArticlesGrid from '../../../components/articles-grid';
import ViewArticle from '../components/articles/ViewArticle';
import ArticlesList from '../components/articles/ArticlesList';

interface IRouteParams {
  slug?: string;
}

const Articles: React.FC = () => {
  const { slug } = useParams<IRouteParams>();

  return (
    <ArticlesGrid
      className="py-2 animated fadeIn"
      leftChildren={
        <>
          <ArticlesList activeSlug={slug} />
        </>
      }
      rightChildren={
        <>
          <ViewArticle slug={slug} />
        </>
      }
    />
  );
};

export default Articles;
