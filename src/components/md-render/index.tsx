import * as React from 'react';

/**
 * Dependencies
 */
import ReactMarkdown from 'react-markdown';

interface IProps {
  content: string;
}

const RenderMD: React.FC<IProps> = (props) => {
  const { content } = props;

  return (
    <ReactMarkdown
      escapeHtml={false}
      source={content}
      renderers={{
        code: (args) => {
          return (
            <pre className="bg-gray-900 rounded text-white font-mono text-sm p-2 md:p-4">
              <code className="break-words whitespace-pre-wrap">
                {args.value}
              </code>
            </pre>
          );
        },
        inlineCode: (args) => {
          return (
            <pre className="bg-gray-900 rounded text-white font-mono text-sm p-2 md:p-4">
              <code className="break-words whitespace-pre-wrap">
                {args.value}
              </code>
            </pre>
          );
        },
        strong: (args) => {
          return <b className="font-semibold">{args.children}</b>;
        },
        table: (args) => {
          return <table className="table-auto">{args.children}</table>;
        },
        tableCell: (args) => {
          if (args.isHeader)
            return <th className="px-4 py-2 text-center">{args.children}</th>;
          return (
            <td className="border px-4 py-2 text-center">{args.children}</td>
          );
        },
        link: (args) => {
          return (
            <a
              className="hover:underline text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
              href={args.href}
            >
              {args.children}
            </a>
          );
        },
        paragraph: (args) => {
          return (
            <div className="leading-tight text-base antialiased text-justify">
              {args.children}
            </div>
          );
        },
        list: (args) => {
          return <ul className="list-inside list-disc">{args.children}</ul>;
        },
        blockquote: (args) => {
          return (
            <blockquote className="border-l-4 border-purple-500 italic my-8 pl-8 md:pl-12">
              {args.children}
            </blockquote>
          );
        },
        heading: (args) => {
          switch (args.level) {
            case 1:
              return <h1 className="text-4xl">{args.children}</h1>;

            case 2:
              return <h2 className="text-3xl">{args.children}</h2>;

            case 3:
              return <h2 className="text-2xl">{args.children}</h2>;

            case 4:
              return <h2 className="text-xl">{args.children}</h2>;

            case 5:
              return <h2 className="text-lg">{args.children}</h2>;

            case 6:
              return <h2 className="text-sm">{args.children}</h2>;

            default:
              return <>{args.children}</>;
          }
        },
      }}
    />
  );
};

export default RenderMD;
