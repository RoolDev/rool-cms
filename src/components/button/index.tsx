import * as React from 'react';

interface IProps {
  type?: 'button' | 'submit' | 'reset';

  onClick?: (data: any) => void;

  classNames?: string;
  colors?: string;

  title?: string;
  subtitle?: string;
}
const Button: React.FC<IProps> = props => {
  const { classNames, title, subtitle } = props;

  const colors = props.colors ?? 'bg-blue-600 hover:bg-blue-700';

  return (
    <button
      onClick={props?.onClick}
      type={props?.type}
      className={`${colors} transition ease-in-out duration-700 text-white font-bold ${classNames} rounded`}
    >
      {title && <p className={'text-3xl'}>{title}</p>}
      {subtitle && <p className={'text-xl'}>{subtitle}</p>}
      {props.children && props.children}
    </button>
  );
};

export default Button;
