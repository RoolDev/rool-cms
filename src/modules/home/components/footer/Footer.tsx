import * as React from 'react';

/**
 * Dependencies
 */
import { animateCSS } from '../../utils';

const Footer: React.FC = () => {
  const reisEl = React.useRef<HTMLDivElement>(null);

  return (
    <footer className="bg-white border border-dGray text-2xl p-5">
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-lg font-semibold">RoolCMS</p>
          <p className="text-sm font-light">
            Built with <b className="text-blue-900">T</b>
            <b className="text-teal-800">R</b>
            <b className="text-gray-500">E</b>
            <b className="text-red-900">N</b>.
          </p>
          <div ref={reisEl}>
            <a
              onMouseEnter={(event) => {
                if (reisEl.current !== null)
                  animateCSS(reisEl.current, 'heartBeat');
              }}
              className="text-sm text-purple-900 hover:underline"
              href="https://github.com/thereis"
              target="_blank"
              rel="noopener noreferrer"
            >
              @thereis / @Reis#7739
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-lg">Sociais</p>
          <a
            className="text-sm"
            href="https://facebook.com/habborool"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="text-sm"
            href="https://discord.gg/wKt2atC"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
