import * as React from 'react';

/**
 * Dependencies
 */
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookShareCount,
} from 'react-share';
import { Facebook, Twitter } from 'react-feather';

/**
 * Models
 */
import { IArticle } from '../../models/article';

interface IProps {
  article: IArticle;
}

const ViewArticleBottom: React.FC<IProps> = (props) => {
  const { article } = props;

  return (
    <div
      className="flex flex-col bg-no-repeat flex-1 bg-right-top"
      style={{
        backgroundImage: 'url(/assets/images/articles/icons/shareBottom.png)',
      }}
    >
      <p className="ml-5 mt-3 text-sm font-light">
        E aí, que tal dar aquela força nas redes sociais?
      </p>

      <div className="ml-5 mt-2 mb-3">
        <FacebookShareButton
          quote={`${article.header} - ${article.subheader}`}
          url={window.location.href}
        >
          <div className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded inline-flex items-center">
            <Facebook className="fill-current w-4 h-4 mr-2" />
            <FacebookShareCount url={window.location.href}>
              {(shareCount) => (
                <p className="p-1 font-light text-sm">{shareCount ?? 0}</p>
              )}
            </FacebookShareCount>
          </div>
        </FacebookShareButton>

        <TwitterShareButton
          className="ml-3"
          url={window.location.href}
          title={`${article.header} - ${article.subheader}`}
          hashtags={['habborool', 'habbo', 'rool']}
        >
          <div className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded inline-flex items-center">
            <Twitter className="fill-current w-4 h-4 mr-2" />

            <p className="p-1 font-light text-sm">Tweetar</p>
          </div>
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default ViewArticleBottom;
