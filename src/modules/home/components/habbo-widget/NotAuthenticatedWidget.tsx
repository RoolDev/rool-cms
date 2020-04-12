import * as React from 'react';

const NotAuthenticatedWidget: React.FC = () => {
  return (
    <div className="md:flex flex-col bg-white  shadow-lg border border-dGray rounded rounded-b-none">
      <div
        className="w-full p-5 flex flex-col justify-center items-center border border-dGray rounded rounded-b-none bg-left-top"
        style={{
          backgroundColor: '#0F1E42',
          backgroundImage: `url('/assets/images/hotelview_april10.png')`,
        }}
      >
        <p className="hidden text-3xl text-white font-bold font-normal md:block text-shadow antialiased subpixel-antialiased">
          Bem vindo!
        </p>
        <p className="hidden text-2xl text-white p-2 md:block md:text-xl text-shadow antialiased subpixel-antialiased">
          Um ambiente incrível está a sua espera =)
        </p>

        <button className="bg-green-700 hover:bg-green-900 rounded text-white font-bold py-2 px-4 rounded w-64 h-24 transition ease-in-out duration-300">
          <p className="text-xl">Novo por aqui?!</p>
          <p className="text-sm">Crie uma nova conta!</p>
        </button>

        <p className="text-white p-2 text-shadow antialiased subpixel-antialiased">
          ou
        </p>

        <button className="bg-blue-600 hover:bg-blue-800 rounded text-white font-bold rounded w-48 h-12 transition ease-in-out duration-300">
          <p className="text-base">Acesse sua conta!</p>
        </button>
      </div>
    </div>
  );
};

export default NotAuthenticatedWidget;
