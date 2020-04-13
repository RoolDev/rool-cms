import * as React from 'react';

/**
 * Styles
 */
import './index.style.scss';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-900 animated fadeOut slow">
      <img
        className="animated rubberBand infinite slow"
        src="/assets/images/logo.png"
        alt="logo"
      />
    </div>
  );
};

export default LoadingSpinner;
