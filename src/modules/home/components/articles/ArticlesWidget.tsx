import * as React from 'react';

/**
 * Dependencies
 */
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../../graphql';

/**
 * Components
 */
import ArticleItem from './ArticleItem';
import ArticleItemViewMore from './ArticleItemViewMore';
import ArticleMainItem from './ArticleMainItem';
import ContentLoader from 'react-content-loader';

/**
 * Models
 */
import { IArticle } from '../../models/article';

interface IProps {}

const ArticlesWidget: React.FC<IProps> = (props) => {
  const { loading, data, error } = useQuery<{ articles: IArticle[] }>(
    GET_ARTICLES
  );

  if (error) {
    return <>{error.message}</>;
  }

  if (loading || !data) {
    return (
      <>
        <ContentLoader
          backgroundColor="#dbdbdb"
          foregroundColor="#b4b4b4"
          width={300}
          height={400}
        >
          <rect x="0" y="0" rx="1" ry="1" width="300" height="187" />
          <rect x="0" y="189" rx="0" ry="0" width="300" height="65" />
          <rect x="0" y="256" rx="0" ry="0" width="300" height="65" />
        </ContentLoader>
      </>
    );
  }

  const { articles } = data;

  if (articles.length === 0) {
    return <></>;
  }

  const mainArticle = articles[0];

  return (
    <div
      className="articles animated fadeIn"
      style={{
        width: '300px',
      }}
    >
      <div className="flex flex-col">
        <ArticleMainItem article={mainArticle} />

        <div className="shadow shadow-xl border border-dGray">
          {articles
            .filter((article, index) => index !== 0)
            .map((article) => {
              return <ArticleItem key={article.slug} article={article} />;
            })}

          <ArticleItemViewMore />
        </div>
      </div>
    </div>
  );
};

export default ArticlesWidget;
