import * as React from 'react';
import Header from '../../../components/header';
import Container from '../../../components/container';
import Box from '../../../components/box';
import { useForm } from 'react-hook-form';
import Button from '../../../components/button';
import Input from '../../../components/input';
import { Link } from 'react-router-dom';

import { User, Mail, Lock } from 'react-feather';

const backgroundImage = require('../../../assets/images/container-bg-opacity.png');

const RegisterPage: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center h-screen">
      <Header />

      <Container>
        <Box
          classNames="md:flex md:flex-col md:justify-center md:justify-evenly lg:w-1/2 bg-cover text-center"
          backgroundImage={backgroundImage}
        >
          <p className="hidden text-5xl text-white font-bold font-normal md:block">
            Falta pouco!
          </p>
          <p className="hidden text-2xl text-white p-2 md:block md:text-3xl">
            Em alguns segundos você estará se divertindo!
          </p>
          <div className="mt-5 mb-5 md:mt-0 md:mb-0">
            <Link to={'/'}>
              <Button
                classNames={`w-64 h-24 w-2/3`}
                title={'Já tem uma conta?'}
                subtitle={'Faça o login!'}
              />
            </Link>
          </div>
        </Box>

        <Box classNames="flex flex-col justify-center w-full p-8 md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              componentRef={register({ required: true })}
              icon={<User />}
              name="username"
              label="Usuário"
              type="username"
              error={errors.mail}
              styles={{
                containerClassnames: 'mt-4'
              }}
            />

            <Input
              componentRef={register({ required: true })}
              icon={<Mail />}
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
              icon={<Lock />}
              name="password"
              label="Senha"
              type="password"
              error={errors.password}
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
              icon={<Lock />}
              name="passwordConfirmation"
              label="Confirmação da senha"
              type="password"
              error={errors.password}
              styles={{
                containerClassnames: 'mt-4'
              }}
            />

            <div className="flex justify-center mt-8">
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
  );
};

export default RegisterPage;
