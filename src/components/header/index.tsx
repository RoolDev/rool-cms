import * as React from 'react';

interface IProps {}

const logo = require('../../assets/images/logo.png');

const Header: React.FC<IProps> = props => {
  return (
    <>
      <div className="flex flex-col justify-between items-center h-32 md:h-auto md:flex-row md:w-1/2">
        <div className="md:flex md:flex-1 md:justify-center md:pl-40">
          <img src={logo} alt="Rool logo" />
        </div>
        <div className="">
          <div className="font-thin bg-white rounded-full p-3">
            100 usuários online!
          </div>
        </div>
      </div>

      <span className="border-b w-1/2 mt-5 mb-5 border-gray-500" />
    </>
  );
};

export default Header;
