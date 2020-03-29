import * as React from 'react';

interface IProps {
  label: string;
  type: string;
  styles?: {
    containerClassnames: string;
  };
}
const Input: React.FC<IProps> = props => {
  const { type, label, styles } = props;

  return (
    <div
      className={`flex flex-col justify-between ${styles?.containerClassnames ??
        ''}`}
    >
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        className="bg-gray-100 text-gray-600 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
        type={type}
      />
    </div>
  );
};

export default Input;
