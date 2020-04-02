import * as React from 'react';

/**
 * Dependencies
 */
import OnlineCounter from '../online-counter';

const logo = require('../../assets/images/logo.png');

interface IProps {}
const Header: React.FC<IProps> = props => {
  return (
    <>
      <div className="flex flex-col justify-between items-center h-32 md:h-auto md:flex-row md:w-1/2">
        <div className="md:flex md:flex-1 md:justify-center md:pl-40">
          <img src={logo} alt="Rool logo" />
        </div>
        <div>
          <OnlineCounter />
        </div>
      </div>

      <span className="border-b w-1/2 mt-5 mb-5 border-gray-500" />
    </>
  );
};

export default Header;
