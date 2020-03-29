import * as React from 'react';

import './Index.style.scss';
import Box from '../../../components/box';

import './Index.style.scss';
import Button from '../../../components/button';

const logo = require('../../../assets/images/logo.png');
const backgroundImage = require('../../../assets/images/container-bg-opacity.png');

const IndexPage: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <img src={logo} alt="" />
        </div>

        <span className="border-b w-1/2 mt-5 mb-5 border-gray-500"></span>

        <div
          className="flex flex-col-reverse md:flex-row md:justify-between shadow bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl"
          style={{
            height: '500px'
          }}
        >
          <div
            className="md:flex md:flex-col md:justify-center md:justify-evenly lg:w-1/2 bg-cover text-center"
            style={{
              backgroundImage: `url(${backgroundImage})`
            }}
          >
            <p className="hidden text-5xl text-white font-bold font-normal md:block">
              Bem vindo!
            </p>
            <p className="hidden text-2xl text-white p-2 md:block md:text-3xl">
              Um ambiente incrível está a sua espera =)
            </p>
            <div className="mt-5 mb-5 md:mt-0 md:mb-0">
              <Button
                classNames={`bg-blue-600 hover:bg-blue-700 w-64 h-24 w-2/3`}
                title={'Registre-se!'}
                subtitle={'É de graça!'}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full p-8 md:w-1/2">
            <div className="mt-10 font-thin text-center md:text-2xl md:mb-5">
              Um lugar divertido <br /> com gente incrível!
            </div>

            <div className="mt-5">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                E-mail
              </label>
              <input
                className="bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Senha
                </label>
              </div>
              <input
                className="bg-gray-100 text-gray-600 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
              />
            </div>
            <div className="flex justify-center md:justify-end mt-8">
              <button className="text-white font-bold py-2 px-4 md:w-1/3 rounded-full bg-blue-600 hover:bg-blue-700 transition ease-in-out duration-700 ">
                Vamos lá!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="flex md:items-center md:justify-center h-screen">
  //     <div
  //       className="md:flex md:flex-row p-5 md:p-0"
  //       style={{
  //         height: '70%'
  //       }}
  //     >
  //       <Box
  //         classNames={
  //           'flex flex-col md:w-full justify-center justify-evenly text-center'
  //         }
  //         backgroundImage={backgroundImage}
  //       >
  //         <p className="mt-5 md:mt-0 text-5xl text-white font-bold font-normal">
  //           Bem vindo!
  //         </p>
  //         <p className="hidden md:block text-2xl md:text-3xl text-white p-2">
  //           Um ambiente incrível está a sua espera =)
  //         </p>
  //         <div className="mb-5 md:mb-0">
  //           <Button
  //             classNames={`bg-blue-600 hover:bg-blue-700 w-64 h-24 w-2/3`}
  //             title={'Registre-se!'}
  //             subtitle={'É de graça!'}
  //           />
  //         </div>
  //       </Box>
  //       <Box
  //         classNames={'flex flex-1 md:ml-5'}
  //         style={{
  //           width: '530px'
  //         }}
  //       >
  //         oi
  //       </Box>
  //     </div>
  //   </div>
  // );
};

export default IndexPage;
