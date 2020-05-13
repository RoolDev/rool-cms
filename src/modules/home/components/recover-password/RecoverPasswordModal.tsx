import * as React from 'react';

/** Dependencies
 * 
 */
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { HomeService } from '../../../home/home.service';

/**
 * Components
 */
import Modal from '../../../../components/modal';
import ModalBody from '../../../../components/modal/modal-body';
import Input from '../../../../components/input';
import { Mail } from 'react-feather';
import { RecoverPasswordDTO } from '../../models/recover-password.dto';
import { toast } from 'react-toastify';

const RescoverPasswordModal: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const history = useHistory();
  
  const _goBack = () => {
    history.push('/');
  };

  const isDisabled = isLoading;
  const disabledCSS = isDisabled ? 'opacity-50 cursor-not-allowed' : '';

  const onSubmit = async(data: Record<string, string>) => {
    try {
      setIsLoading(true);

      const formData = new RecoverPasswordDTO(data);

      await HomeService.recoverPassword(formData);
      
      toast.success(`O link de recuperação foi enviado para o e-mail ${formData.mail}`)

    } catch(err){
      toast.error(`Não foi possível enviar o e-mail para ${data.mail}. Verifique e tente novamente!`);
      
      _goBack();
    }
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

          <div className="flex items-center justify-center">
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