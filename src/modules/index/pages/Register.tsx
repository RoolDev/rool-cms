import * as React from 'react';

/**
 * Dependencies
 */
import * as AppActions from '../../../App.actions';
import { useApp } from '../../../App.context';
import { toast } from 'react-toastify';
import { useMount } from 'react-use';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

/**
 * Components
 */
import { Mail, Lock, User } from 'react-feather';
import Button from '../../../components/button';
import Input from '../../../components/input';
import Box from '../../../components/box';
import LoadingSpinner from '../../../components/spinner';
import Header from '../../../components/header';
import Container from '../../../components/container';

/**
 * Models
 */
import { CreateUserDTO } from '../models/create-user.dto';
import RecaptchaContainer from '../../../components/recaptcha';

const backgroundImage = require('../../../assets/images/container-bg-opacity.png');

const findErrors = (payload: any): string[] => {
  return payload.map((item: { property: string }) => item.property);
};

const RegisterPage: React.FC = () => {
  const { register, handleSubmit, errors, getValues, setError } = useForm();

  const history = useHistory();
  const [state, dispatch] = useApp();

  const [isMounting, setIsMounting] = React.useState<boolean>(true);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [recaptchaToken, setRecaptchaToken] = React.useState<string>('');

  useMount(() => {
    if (state.accessToken) {
      history.push('/home');
    }

    setIsMounting(false);
  });

  if (isMounting) {
    return <LoadingSpinner />;
  }

  const onSubmit = async (formData: Record<string, string>) => {
    try {
      setIsLoading(true);

      const data = new CreateUserDTO({ ...formData, recaptchaToken });

      dispatch(await AppActions.createUser(data));

      history.push('/home');
    } catch (e) {
      if (e?.data) {
        const { message } = e?.data;

        findErrors(message ?? []).forEach(property => {
          setError(property, 'notMatch', '');
        });

        toast.error(`${e.data.error}`);
      } else {
        toast.error(
          'Serviço indisponível no momento. Tente novamente em alguns minutos.'
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const _handleCaptcha = (value: string | null) => {
    if (recaptchaToken && value === null) return setRecaptchaToken('');
    if (value === null) return;

    setRecaptchaToken(value);
  };

  const _handleRecaptchaError = () => {
    setRecaptchaToken('');
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
                disabled={isLoading}
              />
            </Link>
          </div>
        </Box>

        <Box classNames="flex flex-col justify-center w-full p-8 md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              componentRef={register({
                required: true,
                pattern: /^[a-z0-9@_-]{2,20}$/i
              })}
              icon={<User />}
              name="username"
              label="Usuário"
              placeholder="Não pode conter caracteres especiais."
              type="username"
              error={errors.username}
              styles={{
                containerClassnames: 'mt-4'
              }}
            />

            <Input
              componentRef={register({ required: true, maxLength: 64 })}
              icon={<Mail />}
              name="mail"
              label="E-mail"
              placeholder="Um e-mail válido"
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
              placeholder="Entre 6 e 30 caracteres"
              type="password"
              error={errors.password}
              styles={{
                containerClassnames: 'mt-4'
              }}
            />

            <Input
              componentRef={register({
                required: 'senhas não coincidem!',
                minLength: 6,
                maxLength: 30,
                validate: value => {
                  return value === getValues().password;
                }
              })}
              icon={<Lock />}
              name="passwordConfirmation"
              label="Confirmação da senha"
              placeholder="Repita a senha"
              type="password"
              error={errors.passwordConfirmation}
              styles={{
                containerClassnames: 'mt-4'
              }}
            />

            <div className="flex justify-center mt-5">
              <RecaptchaContainer
                onErrored={_handleRecaptchaError}
                onExpired={_handleRecaptchaError}
                onChange={_handleCaptcha}
              />
            </div>

            <div className="flex justify-center md:justify-end mt-8">
              <Button
                disabled={isLoading || recaptchaToken?.length === 0}
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
