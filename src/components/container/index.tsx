import * as React from 'react';

interface IProps {}
const Container: React.FC<IProps> = props => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row md:justify-between shadow bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl"
      style={{
        minHeight: '500px',
        maxHeight: '600px'
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
