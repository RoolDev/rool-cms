import * as React from 'react';

interface IProps {}

const InfoBoxWidget: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <div className="w-max max-h-full bg-sGray border-dGray flex justify-evenly border">
      {children}
    </div>
  );
};

export default InfoBoxWidget;
