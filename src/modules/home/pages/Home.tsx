import * as React from 'react';
import ClientPage from './Client';
import { useQuery, gql } from '@apollo/client';

import ReactMarkdown from 'react-markdown';

const GET_ARTICLE = gql`
  {
    article(id: "2") {
      header
      content
    }
  }
`;

const HomePage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ARTICLE);

  return (
    <>
      {/* <ClientPage /> */}

      <div className="tracking-wider tracking-normal">
        <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
          <div className="w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal">
            <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">
              Notícias
            </p>
            <div className="block lg:hidden sticky inset-0">
              <button
                id="menu-toggle"
                className="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-purple-500 appearance-none focus:outline-none"
              >
                <svg
                  className="fill-current h-3 float-right"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
            </div>
            <div
              className="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"
              id="menu-content"
            >
              <ul className="list-reset">
                <li className="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                  <a
                    href="##"
                    className="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:border-purple-500 lg:hover:border-purple-500"
                  >
                    <span className="pb-1 md:pb-0 text-sm text-gray-900 font-bold">
                      Home
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">
            <div className="">
              <span className="text-base text-purple-500 font-bold">
                &laquo;
              </span>{' '}
              <a
                target="_blank"
                href="##"
                className="text-base md:text-sm text-purple-500 font-bold no-underline hover:underline"
              >
                Back Link
              </a>
              <h1 className="break-normal text-gray-900 pt-6 pb-2 text-xl">
                {data?.article?.header}
              </h1>
              <hr className="border-b border-gray-400" />
            </div>

            <div className="mt-3"></div>

            <hr className="border-b border-gray-400 py-4" />
            <div className="flex items-center">
              <svg
                className="h-16 fill-current text-gray-600 hover:shadow hover:bg-purple-100 hover:text-green-500 p-4 mr-2 border rounded"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
              </svg>
              <svg
                className="h-16 fill-current text-gray-600 hover:shadow hover:bg-purple-100 hover:text-red-500 p-4 mr-2 border rounded"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
              </svg>
              <div className="pl-4">
                <p className="text-gray-800 font-bold">
                  Did you find this article useful?
                </p>
                <p className="text-xs text-gray-600 pt-2">
                  0 out of 0 found this useful
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-500 px-4 py-6">
            <span className="text-base text-purple-500 font-bold">&lt;</span>{' '}
            <a
              href="##"
              className="text-base md:text-sm text-purple-500 font-bold no-underline hover:underline"
            >
              Back to Help
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
