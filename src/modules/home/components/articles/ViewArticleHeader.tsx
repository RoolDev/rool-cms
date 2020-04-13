import * as React from 'react';

/**
 * Dependencies
 */
import { convertTimestampToDate } from '../../utils';

/**
 * Models
 */
import { IArticle } from '../../models/article';

interface IProps {
  article: IArticle;
}

const ViewArticleHeader: React.FC<IProps> = (props) => {
  const { article } = props;

  return (
    <div className="flex flex-row p-5">
      <div className="flex flex-col flex-1">
        <div className="text-2xl font-semibold">{article.header}</div>
        <div className="text-sm">{article.subheader}</div>
      </div>
      <div className="flex justify-end items-end">
        <div className="text-sm">
          Publicado por <b>{article.authorName}</b> em{' '}
          {convertTimestampToDate(article.created_at, 'dd-MM-Y')} às{' '}
          {convertTimestampToDate(article.created_at, 'HH:mm a')}
        </div>
      </div>
    </div>
  );
};

export default ViewArticleHeader;
