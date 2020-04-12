import * as React from 'react';

/**
 * Dependencies
 */
import { useQuery } from '@apollo/client';
import { GET_ARTICLE_BY_SLUG, GET_LATEST_ARTICLE } from '../../graphql';

/**
 * Components
 */

import ContentLoader from 'react-content-loader';
import RenderMD from '../../../../components/md-render';

/**
 * Models
 */
import { IArticle } from '../../models/article';
import ViewArticleBottom from './ViewArticleBottom';
import ViewArticleHeader from './ViewArticleHeader';

interface IProps {
  slug?: string;
}

const ViewArticle: React.FC<IProps> = (props) => {
  const { slug } = props;

  const { data, loading, error } = useQuery<{ articles: IArticle[] }>(
    !slug ? GET_LATEST_ARTICLE : GET_ARTICLE_BY_SLUG,
    {
      variables: { slug },
    }
  );

  if (error) {
    return <>{error.message}</>;
  }

  if (loading) {
    return (
      <ContentLoader
        className="w-full"
        speed={2}
        width={670}
        height={200}
        viewBox="0 0 670 200"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect className="w-full" x="0" y="0" rx="0" ry="0" height="89" />
        <rect className="w-full" x="0" y="91" rx="0" ry="0" height="81" />
        <rect className="w-full" x="0" y="174" rx="0" ry="0" height="81" />
      </ContentLoader>
    );
  }

  const article = data?.articles[0];

  if (!article) {
    return (
      <div className="flex justify-center bg-white p-5 flex-col flex-1 items-center">
        <p className="text-2xl font-semibold">Notícia não encontrada!</p>
        <img
          className="object-contain mt-6"
          src="/assets/images/icons/notFound.png"
          alt="not-found"
        />

        <p className="mt-6">Tente procurar pela notícia na lista ao lado ;)</p>
      </div>
    );
  }

  return (
    <div className="animated fadeIn">
      <div className="bg-white flex flex-col rounded rounded-b-none">
        <ViewArticleHeader article={article} />
        <hr />
        <div className="mt-1 p-6">
          <RenderMD content={article.content} />
        </div>
        <hr />
        <ViewArticleBottom article={article} />
      </div>
    </div>
  );
};

export default ViewArticle;
