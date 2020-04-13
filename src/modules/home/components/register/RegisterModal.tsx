import * as React from 'react';

/**
 * Dependencies
 */
import * as AppActions from '../../../../App.actions';
import { toast } from 'react-toastify';
import { useMount } from 'react-use';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useApp } from '../../../../App.context';
import { findErrors } from '../../utils';

/**
 * Components
 */
import Modal from '../../../../components/modal';
import ModalBody from '../../../../components/modal/modal-body';
import LoadingSpinner from '../../../../components/spinner';
import RecaptchaContainer from '../../../../components/recaptcha';
import Input from '../../../../components/input';
import Helmet from 'react-helmet';
import { User, Mail, Lock } from 'react-feather';

/**
 * Models
 */
import { CreateUserDTO } from '../../../index/models/create-user.dto';

interface IProps {}

const RegisterModal: React.FC<IProps> = (props) => {
  const { register, handleSubmit, errors, getValues, setError } = useForm();

  const history = useHistory();
  const [state, dispatch] = useApp();

  const [isMounting, setIsMounting] = React.useState<boolean>(true);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [recaptchaToken, setRecaptchaToken] = React.useState<string>('');

  useMount(() => {
    if (state.accessToken) {
      history.push('/');
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

      history.push('/');
    } catch (e) {
      if (e?.data) {
        const { message } = e?.data;

        findErrors(message ?? []).forEach((property) => {
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

  const _goBack = () => {
    history.push('/');
  };

  const isDisabled = isLoading || recaptchaToken.length === 0;
  const disabledCSS = isDisabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <Modal>
      <Helmet title={`Habbo Rool: Criar nova conta!`} />

      <ModalBody title="Registre-se!" close={_goBack}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            componentRef={register({
              required: true,
              pattern: /^[a-z0-9@_-]{2,20}$/i,
            })}
            icon={<User />}
            name="username"
            label="Usuário"
            placeholder="Não pode conter caracteres especiais."
            type="username"
            error={errors.username}
            styles={{
              containerClassnames: 'mt-4',
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
              containerClassnames: 'mt-4',
            }}
          />

          <Input
            componentRef={register({
              required: true,
              minLength: 6,
              maxLength: 30,
            })}
            icon={<Lock />}
            name="password"
            label="Senha"
            placeholder="Entre 6 e 30 caracteres"
            type="password"
            error={errors.password}
            styles={{
              containerClassnames: 'mt-4',
            }}
          />

          <Input
            componentRef={register({
              required: 'senhas não coincidem!',
              minLength: 6,
              maxLength: 30,
              validate: (value) => {
                return value === getValues().password;
              },
            })}
            icon={<Lock />}
            name="passwordConfirmation"
            label="Confirmação da senha"
            placeholder="Repita a senha"
            type="password"
            error={errors.passwordConfirmation}
            styles={{
              containerClassnames: 'mt-4',
            }}
          />

          <div className="flex justify-center mt-5">
            <RecaptchaContainer
              onErrored={_handleRecaptchaError}
              onExpired={_handleRecaptchaError}
              onChange={_handleCaptcha}
            />
          </div>

          <hr className="mt-2 mb-2" />

          <div className="flex justify-end pt-2">
            <div>
              <button
                className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                onClick={_goBack}
              >
                Voltar
              </button>

              <button
                className={`focus:outline-none modal-close px-4 p-3 rounded-lg text-white bg-blue-600 hover:bg-blue-800 ml-3 ${disabledCSS}`}
                disabled={isDisabled}
                type="submit"
              >
                Vamos lá!
              </button>
            </div>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default RegisterModal;
