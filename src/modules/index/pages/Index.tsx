import * as React from 'react';

/**
 * Dependencies
 */
import * as AppActions from '../../../App.actions';
import { toast } from 'react-toastify';
import { useMount } from 'react-use';
import { useForm } from 'react-hook-form';
import { useApp } from '../../../App.context';
import { Link, useHistory } from 'react-router-dom';

/**
 * Components
 */
import { Mail, Lock } from 'react-feather';
import Button from '../../../components/button';
import Input from '../../../components/input';
import Box from '../../../components/box';
import LoadingSpinner from '../../../components/spinner';
import Header from '../../../components/header';
import Container from '../../../components/container';

/**
 * Models
 */
import { SigninUserDTO } from '../models/signin-user.dto';

/**
 * Styles
 */
import './Index.style.scss';
import RecaptchaContainer from '../../../components/recaptcha';

const backgroundImage = require('../../../assets/images/container-bg-opacity.png');

const findErrors = (payload: any): string[] => {
  return payload.map((item: { property: string }) => item.property);
};

const IndexPage: React.FC = () => {
  const { register, handleSubmit, errors, setError } = useForm();

  const [isLoading, setIsLoading] = React.useState(false);
  const [isMounting, setIsMounting] = React.useState(true);
  const [recaptchaToken, setRecaptchaToken] = React.useState<string>('');

  const [state, dispatch] = useApp();
  const history = useHistory();

  useMount(() => {
    if (state.accessToken) {
      history.push('/home');
    }

    setIsMounting(false);
  });

  const onSubmit = async (data: Record<string, string>) => {
    try {
      setIsLoading(true);

      const formData = new SigninUserDTO({ ...data, recaptchaToken });

      dispatch(await AppActions.authenticateUser(formData));

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

  if (isMounting) {
    return <LoadingSpinner />;
  }

  return (
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
            <Link to={'/register'}>
              <Button
                disabled={isLoading}
                classNames={`w-64 h-24 w-2/3`}
                title={'Registre-se!'}
                subtitle={'É de graça!'}
              />
            </Link>
          </div>
        </Box>
        <Box classNames="flex flex-col justify-center w-full p-8 md:w-1/2">
          <div className="mt-10 font-thin text-center md:text-2xl md:mb-5">
            Um lugar divertido <br /> com gente incrível!
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
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

            <div className="flex justify-center mt-5">
              <RecaptchaContainer
                onErrored={_handleRecaptchaError}
                onExpired={_handleRecaptchaError}
                onChange={_handleCaptcha}
              />
            </div>

            <div className="flex justify-center md:justify-end mt-8">
              <Button
                disabled={isLoading || recaptchaToken.length === 0}
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

export default IndexPage;
