import * as React from 'react';

interface IProps {
  name: string;
  label: string;
  type: string;

  value?: string;
  componentRef?: any;

  error?: string;

  styles?: Partial<{
    containerClassnames: string;
    inputClassnames: string;
  }>;
}
const Input: React.FC<IProps> = props => {
  const { name, type, label, styles } = props;

  return (
    <div
      className={`flex flex-col justify-between ${styles?.containerClassnames ??
        ''}`}
    >
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        ref={props.componentRef}
        name={name}
        className={`bg-gray-100 text-gray-600 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${styles?.inputClassnames ??
          ''} ${props?.error ? 'border-red-400' : ''}`}
        type={type}
      />
      {props.error && (
        <p className="text-red-500 text-xs italic">* campo obrigatório.</p>
      )}
    </div>
  );
};

export default Input;
