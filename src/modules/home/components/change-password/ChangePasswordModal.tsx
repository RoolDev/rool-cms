import React from 'react';

/** Dependencies
 * 
 */
import { ChangePasswordDTO } from '../../models/change-password.dto';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { HomeService } from '../../../home/home.service';
import { useMount } from 'react-use';
import { useApp } from '../../../../App.context';


/** Components
 * 
 */
import Modal from '../../../../components/modal';
import ModalBody from '../../../../components/modal/modal-body';
import Input from '../../../../components/input';
import { Lock } from 'react-feather';
import { toast } from 'react-toastify';
import { findErrors } from '../../utils';
import { useLocation } from 'react-use';
import RecaptchaContainer from '../../../../components/recaptcha';
import LoadingSpinner from '../../../../components/spinner';


const ChangePasswordModal: React.FC = (props) => {
  const { register, handleSubmit, errors, getValues, setError } = useForm();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const history = useHistory();
  const [state] = useApp();

  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isMounting, setIsMounting] = React.useState(true);
  const [recaptchaToken, setRecaptchaToken] = React.useState<string>('');

  useMount(() => {
    if (state.accessToken) {
      history.push('/');
    }
    setIsMounting(false);
  });

  const isDisabled = isLoading;
  const disabledCSS = isDisabled ? 'opacity-50 cursor-not-allowed' : '';

  const onSubmit = async (data: Record<string, string>) => {

    try {

      const key = query.get("token");

      if(!key || key === null){
        toast.error('O token de acesso não foi informado na URL. Verifique!')
        return;
      }

      const formData = new ChangePasswordDTO({...data, recaptchaToken});
      
      await HomeService.changePassword(formData, key, recaptchaToken);

      toast.success('Senha alterada com sucesso!');

      history.push('/login');

    }catch(e){
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
  
  const _goBack = () => {
    history.push('/');
  };

  const _handleCaptcha = (value: string | null) => {
    if (recaptchaToken && value === null) return setRecaptchaToken('');
    if (value === null) return;

    setIsLoading(false);
    setRecaptchaToken(value);
  };

  const _handleRecaptchaError = () => {
    setRecaptchaToken('');
  };

  if (isMounting) {
    return <LoadingSpinner />;
  }

  return (
   <Modal>
     <ModalBody title={"Alterar senha"} close={_goBack}>
       <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-5"> 
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
          </div>
          <div className="flex justify-center mt-5">
              <RecaptchaContainer
                onErrored={_handleRecaptchaError}
                onExpired={_handleRecaptchaError}
                onChange={_handleCaptcha}
              />
            </div>
          <div className="flex items-center justify-center mt-4" >
            <div className='pl-50%'>
            <button
                  className={`text-center focus:outline-none modal-close px-4 p-3 text-center rounded-lg text-white bg-blue-600 hover:bg-blue-800 ${disabledCSS}`}
                  type="submit"
                  disabled={isDisabled}
                >
                  Recuperar Senha
                </button>
              </div>
            </div>
        </form>
     </ModalBody>
    </Modal>
  );
};

export default ChangePasswordModal;