import * as React from 'react';

/**
 * Dependencies
 */
import { Link } from 'react-router-dom';

const ArticleItemViewMore: React.FC = () => {
  return (
    <Link
      to={{
        pathname: '/articles',
      }}
    >
      <div className="flex flex-col h-16 bg-gray-100 hover:bg-gray-200 justify-center align-middle cursor-pointer">
        <div className="flex justify-center align-middle">
          <p className="text-sm font-semibold text-gray-800">
            Ver completo &raquo;
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleItemViewMore;
