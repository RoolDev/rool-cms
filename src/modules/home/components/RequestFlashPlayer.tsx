import * as React from 'react';

const RequestFlashPlayer: React.FC = () => {
  return (
    <>
      <div className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
        <div className="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">Flash player necessário!</p>
            </div>
            <div className="my-5">
              Para jogar no <b>Habbo Rool</b>, você precisa ativar o{' '}
              <b>Flash player</b>!
              <br /> <br />
              Clique no botão <b>Habilitar Flash player</b> e depois clique em
              permitir!
              <br /> <br />
              Caso tenha mais dúvidas, clique no botão para visualizar a imagem
              auto explicativa.
            </div>
            <div className="flex justify-end pt-2">
              <a
                target="_blank"
                href="/assets/client/images/tutorial.png"
                className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
              >
                Tutorial
              </a>
              <a
                href="https://get.adobe.com/flashplayer"
                className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
              >
                Habilitar Flash player
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestFlashPlayer;
