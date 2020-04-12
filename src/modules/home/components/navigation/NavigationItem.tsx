import * as React from 'react';

/**
 * Dependencies
 */
import { animateCSS } from '../../utils';
import { Link } from 'react-router-dom';

interface IProps {
  iconUrl: string;
  title: string;
  color: string;

  pathname: string;
  active: boolean;
}

const NavigationItem: React.FC<IProps> = (props) => {
  const element = React.useRef<HTMLDivElement>(null);

  const { iconUrl, title, color, pathname, active } = props;

  return (
    <Link to={{ pathname }}>
      <div
        ref={element}
        className={`border border-dGray bottom hover:bg-sGray cursor-pointer select-none ${
          active ? 'bg-dGray' : ''
        }`}
        onMouseEnter={(event) => {
          if (element.current) {
            animateCSS(element.current, 'pulse');
          }
        }}
      >
        <div
          className="flex items-center w-32 h-20"
          style={{
            marginLeft: '-1px',
          }}
        >
          <img className="pl-4" src={iconUrl} alt="home" />
          <p className="font-semibold pl-2 mt-0.3 antialiased text-optimize-legibility">
            {title}
          </p>
        </div>

        <div
          className="relative w-full h-1"
          style={{ backgroundColor: color }}
        />
      </div>
    </Link>
  );
};

export default NavigationItem;
