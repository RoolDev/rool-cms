import * as React from 'react';

/**
 * Dependencies
 */
import { Link } from 'react-router-dom';

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

        <Link
          className="bg-green-700 hover:bg-green-900 rounded text-white font-bold rounded w-64 h-24 transition ease-in-out duration-300 flex justify-center items-center flex-col"
          to={{
            pathname: '/register',
          }}
        >
          <p className="text-xl">Novo por aqui?!</p>
          <p className="text-sm">Crie uma nova conta!</p>
        </Link>

        <p className="text-white p-2 text-shadow antialiased subpixel-antialiased">
          ou
        </p>
         <div className="flex">
           <div className="flex-1 ml-1">
            <Link
              className="bg-blue-600 hover:bg-blue-800 rounded text-white font-bold rounded w-48 h-12 transition ease-in-out duration-300 flex justify-center items-center flex-col"
              to={{
                pathname: '/login',
              }}
            >
              <p className="text-base">Acesse sua conta!</p>
            </Link>
          </div> 
          <div className="flex-1 ml-1"> 
            <Link
              className="bg-gray-700 hover:bg-gray-900 rounded text-white font-bold rounded w-48 h-12 transition ease-in-out duration-300 flex justify-center items-center flex-col"
              to={{
                pathname: '/recover',
              }}
            >
              <p className="text-base">Esqueci minha senha</p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotAuthenticatedWidget;
