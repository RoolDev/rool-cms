import * as React from 'react';

/** Dependencies
 * 
 */
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { HomeService } from '../../../home/home.service';
import { useMount } from 'react-use';
import { useApp } from '../../../../App.context';

/**
 * Components
 */
import Modal from '../../../../components/modal';
import ModalBody from '../../../../components/modal/modal-body';
import Input from '../../../../components/input';
import { Mail } from 'react-feather';
import { RecoverPasswordDTO } from '../../models/recover-password.dto';
import RecaptchaContainer from '../../../../components/recaptcha';
import LoadingSpinner from '../../../../components/spinner';
import { toast } from 'react-toastify';

const RescoverPasswordModal: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isMounting, setIsMounting] = React.useState(true);
  const [recaptchaToken, setRecaptchaToken] = React.useState<string>('');
  
  const history = useHistory();
  const [state] = useApp();
  
  const _goBack = () => {
    history.push('/');
  };

  useMount(() => {
    if (state.accessToken) {
      history.push('/');
    }
    setIsMounting(false);
  });

  const isDisabled = isLoading;
  const disabledCSS = isDisabled ? 'opacity-50 cursor-not-allowed' : '';

  const onSubmit = async(data: Record<string, string>) => {
    try {

      const formData = new RecoverPasswordDTO({...data, recaptchaToken});

      await HomeService.recoverPassword(formData, recaptchaToken);

      toast.success(`O link de recuperação foi enviado para o e-mail ${formData.mail}`)

      _goBack();

    } catch(err){
      toast.error(`Não foi possível enviar o e-mail para ${data.mail}. Verifique o e-mail e tente novamente!`);
      
      _goBack();
    } finally {
      setIsLoading(false);
    }
  }

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
      <ModalBody title={'Recuperar senha'} close={_goBack}>
      <form onSubmit={handleSubmit(onSubmit)}> 
          <div className="my-5">
            <p className="text-center">Caso o cadastro e o e-mail exista, enviaremos um link para a redefinição de senha.</p>
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
          </div>
          
            <div className="flex justify-center mt-5">
              <RecaptchaContainer
                onErrored={_handleRecaptchaError}
                onExpired={_handleRecaptchaError}
                onChange={_handleCaptcha}
              />
            </div>
            <div className="flex items-center justify-center m-4">
            <div className='pl-50%'>
            <button
                  className={`text-center focus:outline-none modal-close px-4 p-3 text-center rounded-lg text-white bg-blue-600 hover:bg-blue-800 ${disabledCSS}` }
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

export default RescoverPasswordModal;