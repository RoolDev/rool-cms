import * as React from 'react';

/**
 * Dependencies
 */
import { Link } from 'react-router-dom';

/**
 * Models
 */
import { IArticle } from '../../models/article';

interface IProps {
  article: IArticle;
}

const ArticleMainItem: React.FC<IProps> = (props) => {
  const { thumbnailURL, header, subheader, slug } = props.article;

  return (
    <div
      className=""
      style={{
        height: '187px',
        width: '300px',
      }}
    >
      <img
        className="absolute"
        src={thumbnailURL}
        alt="article_image"
        style={{
          zIndex: -1,
        }}
      />

      <div className="flex h-full flex-1 flex-col mt-5 p-4">
        <p className="font-semibold text-white text-2xl antialiased text-shadow">
          {header}
        </p>
        <p
          className="font-light text-white text-sm antialiased text-shadow"
          style={{
            maxWidth: '190px',
          }}
        >
          {subheader}
        </p>
        <Link
          to={{
            pathname: `/articles/${slug}`,
          }}
        >
          <p className="text-white text-sm mt-2 font-semibold hover:underline cursor-pointer text-shadow">
            Leia mais &raquo;
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ArticleMainItem;
