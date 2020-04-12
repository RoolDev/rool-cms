import * as React from 'react';

/**
 * Components
 */
import { X } from 'react-feather';

interface IProps {
  title: string;

  close: () => void;
}

const ModalBody: React.FC<IProps> = (props) => {
  const { title, close } = props;

  return (
    <div className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
      <div className="border border-dGray shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">{title}</p>
            <div className="modal-close cursor-pointer z-50" onClick={close}>
              <X />
            </div>
          </div>

          <hr />

          {props.children}
        </div>
      </div>
    </div>
  );
};

export default ModalBody;
