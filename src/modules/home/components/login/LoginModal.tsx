import * as React from 'react';

/**
 * Dependencies
 */
import * as AppActions from '../../../../App.actions';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useApp } from '../../../../App.context';
import { useMount } from 'react-use';
import { toast } from 'react-toastify';
import { findErrors } from '../../utils/';

/**
 * Components
 */
import Input from '../../../../components/input';
import Modal from '../../../../components/modal';
import RecaptchaContainer from '../../../../components/recaptcha';
import LoadingSpinner from '../../../../components/spinner';
import ModalBody from '../../../../components/modal/modal-body';

import { Lock, Mail } from 'react-feather';

/**
 * Models
 */
import { SigninUserDTO } from '../../../index/models/signin-user.dto';

const LoginModal: React.FC = () => {
  const { register, handleSubmit, errors, setError } = useForm();

  const [isLoading, setIsLoading] = React.useState(false);
  const [isMounting, setIsMounting] = React.useState(true);
  const [recaptchaToken, setRecaptchaToken] = React.useState<string>('');

  const [state, dispatch] = useApp();
  const history = useHistory();

  useMount(() => {
    if (state.accessToken) {
      history.push('/');
    }

    setIsMounting(false);
  });

  const onSubmit = async (data: Record<string, string>) => {
    try {
      setIsLoading(true);

      const formData = new SigninUserDTO({ ...data, recaptchaToken });

      dispatch(await AppActions.authenticateUser(formData));

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

  if (isMounting) {
    return <LoadingSpinner />;
  }

  const isDisabled = isLoading || recaptchaToken.length === 0;
  const disabledCSS = isDisabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <Modal>
      <ModalBody title={'Conecte-se'} close={_goBack}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-5">
            <Input
              componentRef={register({ required: true })}
              icon={<Mail />}
              name="mail"
              label="E-mail"
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
              type="password"
              error={errors.password}
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
          </div>

          <hr />

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

export default LoginModal;
