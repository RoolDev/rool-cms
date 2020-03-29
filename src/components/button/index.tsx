import * as React from 'react';

interface IProps {
  classNames?: string;

  title?: string;
  subtitle?: string;
}
const Button: React.FC<IProps> = props => {
  const { classNames, title, subtitle } = props;

  return (
    <button
      className={`transition ease-in-out duration-700 text-white font-bold ${classNames} rounded`}
    >
      <p className={'text-3xl'}>{title}</p>
      {subtitle && <p className={'text-xl'}>{subtitle}</p>}
    </button>
  );
};

export default Button;
