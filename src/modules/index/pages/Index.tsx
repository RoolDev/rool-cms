import * as React from 'react';

import './Index.style.scss';
import Box from '../../../components/box';

import './Index.style.scss';
import Button from '../../../components/button';
import Input from '../../../components/input';

import { useForm } from 'react-hook-form';
import Header from '../../../components/header';
import Container from '../../../components/container';

const backgroundImage = require('../../../assets/images/container-bg-opacity.png');

const IndexPage: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();

  React.useEffect(() => {
    console.log('errors: ', errors);
  }, [errors]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen">
        <Header />

        <Container>
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

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                componentRef={register({ required: true })}
                name="mail"
                label="E-mail"
                type="email"
                error={errors.mail}
                styles={{
                  containerClassnames: 'mt-4'
                }}
              />

              <Input
                componentRef={register({
                  required: true,
                  minLength: 6,
                  maxLength: 30
                })}
                name="password"
                label="Senha"
                type="password"
                error={errors.password}
                styles={{
                  containerClassnames: 'mt-4'
                }}
              />

              <div className="flex justify-center md:justify-end mt-8">
                <Button
                  type="submit"
                  classNames="text-white font-bold py-2 px-4 md:w-1/3 rounded-full"
                >
                  Vamos lá
                </Button>
              </div>
            </form>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default IndexPage;
