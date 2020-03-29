import * as React from 'react';

import './Index.style.scss';
import Box from '../../../components/box';

import './Index.style.scss';
import Button from '../../../components/button';
import Input from '../../../components/input';

const logo = require('../../../assets/images/logo.png');
const backgroundImage = require('../../../assets/images/container-bg-opacity.png');

const IndexPage: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col justify-between items-center h-32 md:h-auto md:flex-row md:w-1/2">
          <div className="md:flex md:flex-1 md:justify-center md:pl-40">
            <img src={logo} alt="" className="" />
          </div>
          <div className="">
            <div className="font-thin bg-white rounded-full p-3">
              100 usuários online!
            </div>
          </div>
        </div>

        <span className="border-b w-1/2 mt-5 mb-5 border-gray-500" />

        <div
          className="flex flex-col-reverse md:flex-row md:justify-between shadow bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl"
          style={{
            height: '500px'
          }}
        >
          <Box
            classNames="md:flex md:flex-col md:justify-center md:justify-evenly lg:w-1/2 bg-cover text-center"
            backgroundImage={backgroundImage}
          >
            <p className="hidden text-5xl text-white font-bold font-normal md:block">
              Bem vindo!
            </p>
            <p className="hidden text-2xl text-white p-2 md:block md:text-3xl">
              Um ambiente incrível está a sua espera =)
            </p>
            <div className="mt-5 mb-5 md:mt-0 md:mb-0">
              <Button
                classNames={`w-64 h-24 w-2/3`}
                title={'Registre-se!'}
                subtitle={'É de graça!'}
              />
            </div>
          </Box>
          <Box classNames="flex flex-col justify-center w-full p-8 md:w-1/2">
            <div className="mt-10 font-thin text-center md:text-2xl md:mb-5">
              Um lugar divertido <br /> com gente incrível!
            </div>

            <Input
              label="E-mail"
              type="email"
              styles={{
                containerClassnames: 'mt-4'
              }}
            />
            <Input
              label="Senha"
              type="password"
              styles={{
                containerClassnames: 'mt-4'
              }}
            />
            <div className="flex justify-center md:justify-end mt-8">
              <Button classNames="text-white font-bold py-2 px-4 md:w-1/3 rounded-full">
                Vamos lá
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
