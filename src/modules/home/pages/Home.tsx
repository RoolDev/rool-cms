import * as React from 'react';
import ClientPage from './Client';
import Helmet from 'react-helmet';

const HomePage: React.FC = () => {
  return (
    <>
      Autenticado
      <ClientPage />
    </>
  );
};

export default HomePage;
