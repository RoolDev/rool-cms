import * as React from 'react';

interface IProps {
  value: string | number;
  label: string;
  alt: string;
  imageUrl: string;
}

const InfoBoxWidgetItem: React.FC<IProps> = (props) => {
  const { value, label, alt, imageUrl } = props;

  return (
    <div className="border border-gray-200 flex flex-1 p-2 hover:bg-gray-100">
      <div className="p-1">
        <img alt={alt} src={imageUrl} />
      </div>
      <p className="mt-0.1">
        <b>{value}</b> {label}
      </p>
    </div>
  );
};

export default InfoBoxWidgetItem;
