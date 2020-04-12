import * as React from 'react';

/**
 * Dependencies
 */
import { useQuery } from '@apollo/client';
import { GET_ARTICLES_LIST } from '../../graphql';
import { Link } from 'react-router-dom';

/**
 * Components
 */
import { ChevronsRight } from 'react-feather';

/**
 * Models
 */
import { IArticle } from '../../models/article';
import ContentLoader from 'react-content-loader';

interface IArticleListItemProps {
  article: IArticle;
  active: boolean;
}

const ArticleListItem: React.FC<IArticleListItemProps> = (props) => {
  const { article, active } = props;

  return (
    <Link
      className={`p-4 border border-dGray hover:bg-gray-200 flex ${
        active ? 'bg-gray-200' : ''
      }`}
      to={{
        pathname: `/articles/${article.slug}`,
      }}
    >
      <div className="flex flex-1">{article.header}</div>
      <ChevronsRight />
    </Link>
  );
};

interface IProps {
  activeSlug?: string;
}

const ArticlesList: React.FC<IProps> = (props) => {
  const { activeSlug } = props;

  const { loading, data, error } = useQuery<{ articles: IArticle[] }>(
    GET_ARTICLES_LIST
  );

  if (error) {
    return <>{error.message}</>;
  }

  if (loading || !data?.articles) {
    return (
      <ContentLoader
        speed={2}
        width={336}
        height={180}
        viewBox="0 0 336 180"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="600" height="89" />
        <rect x="0" y="92" rx="0" ry="0" width="600" height="81" />
      </ContentLoader>
    );
  }

  return (
    <div className="bg-white rounded rounded-b-none flex flex-col">
      <div className="text-center p-5">
        <p className="text-lg font-semibold ">Outras notícias</p>
        <p className="text-sm">Interaja mais conosco ;)</p>
      </div>

      <hr />

      <div className="flex flex-col">
        {data.articles.map((article, index) => {
          return (
            <ArticleListItem
              active={
                article.slug === activeSlug
                  ? true
                  : activeSlug === undefined && index === 0
              }
              key={article.slug}
              article={article}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ArticlesList;
