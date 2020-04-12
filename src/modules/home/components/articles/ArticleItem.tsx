import * as React from 'react';

/**
 * Dependencies
 */
import { Link } from 'react-router-dom';
import { convertTimestampToDate } from '../../utils';

/**
 * Models
 */
import { IArticle } from '../../models/article';

interface IProps {
  article: IArticle;
}

const ArticleItem: React.FC<IProps> = (props) => {
  const { header, created_at, slug } = props.article;

  const createdAt = convertTimestampToDate(created_at);

  return (
    <div className="flex flex-row h-16 bg-white hover:bg-gray-200">
      <div className="flex flex-col flex-1 justify-center align-middle pl-2 cursor-pointer">
        <Link
          to={{
            pathname: `/articles/${slug}`,
          }}
        >
          <p className="font-semibold">{header}</p>
          <p className="text-sm font-light">{createdAt}</p>
        </Link>
      </div>
      <div className="flex flex-col align-middle justify-center p-2">
        <img
          className="cursor-pointer"
          alt="heart"
          src="/assets/images/articles/icons/heart.png"
        />
      </div>
      <div className="flex flex-col align-middle justify-center p-2">
        <img
          className="cursor-pointer"
          alt="comments"
          src="/assets/images/articles/icons/comments.png"
        />
      </div>
    </div>
  );
};

export default ArticleItem;
