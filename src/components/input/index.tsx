import * as React from 'react';

interface IProps {
  name: string;
  label: string;
  type: string;

  placeholder?: string;

  icon?: React.ReactElement;

  value?: string;
  componentRef?: any;

  error?: any;

  styles?: Partial<{
    containerClassnames: string;
    inputClassnames: string;
  }>;
}
const Input: React.FC<IProps> = (props) => {
  const { name, type, label, placeholder: tip, styles } = props;

  return (
    <div
      className={`flex flex-col justify-between ${
        styles?.containerClassnames ?? ''
      }`}
    >
      <div className="flex items-center">
        <label className="block text-sm font-bold mb-2">{label}</label>
      </div>

      <div>
        <div className="flex flex-column">
          {props.icon && (
            <span
              className={`text-sm border border-2 rounded-l px-4 py-2 bg-gray-200 whitespace-no-wrap ${
                props?.error ? 'border-red-400' : ''
              }`}
            >
              {props.icon}
            </span>
          )}

          <input
            placeholder={tip}
            ref={props.componentRef}
            name={name}
            className={`bg-gray-100 text-gray-600 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${
              styles?.inputClassnames ?? ''
            } ${props?.error ? 'border-red-400' : ''}`}
            type={type}
          />
        </div>

        {props.error && (
          <p className="text-red-500 text-xs italic">
            *{' '}
            {props.error.message && props.error.message.length > 0
              ? props.error.message
              : 'campo obrigatório.'}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;
