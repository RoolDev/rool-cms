import * as React from 'react';

interface IProps {
  classNames?: string;
  backgroundImage?: string;
  style?: React.CSSProperties;
}
const Box: React.FC<IProps> = props => {
  const { backgroundImage, classNames, style } = props;

  return (
    <div
      className={`${classNames}`}
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      {props.children}
    </div>
  );
};

export default Box;
