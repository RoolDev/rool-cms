import * as React from 'react';

interface IProps {
  className: React.HTMLAttributes<HTMLDivElement>['className'];
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
}

const HomeGrid: React.FC<IProps> = (props) => {
  const { leftChildren, rightChildren, className } = props;

  return (
    <div className={`flex flex-col ${className ?? ''}`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row w-960 mx-auto">
          <div className="w-2/3">{leftChildren}</div>
          <div className="w-1/3 ml-5">{rightChildren}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
