import * as React from 'react';

/**
 * Dependencies
 */
import * as utils from '../utils';
import * as AppActions from '../../../App.actions';

import config from '../../../config/config';

import { useMount, useUnmount } from 'react-use';
import { Helmet } from 'react-helmet';
import { useApp } from '../../../App.context';

/**
 * Components
 */
import LoadingSpinner from '../../../components/spinner';
import RequestFlashPlayer from '../components/RequestFlashPlayer';
import OnlineCounter from '../../../components/online-counter';

/**
 * Styles
 */
import './Client.style.scss';

declare global {
  interface Window {
    swfobject: {
      [key: string]: any;
      embedSWF: any;
    };
  }
}

const ClientPage: React.FC = () => {
  const [state, dispatch] = useApp();

  const [scriptLoaded, setScriptLoaded] = React.useState<boolean>(false);
  const [tokenUpdate, setTokenUpdated] = React.useState<boolean>(false);

  useMount(async () => {
    utils.loadDynamicScript({
      scriptId: 'swfobject',
      url: 'assets/client/js/swfobject.js',
      callback: () => {
        setScriptLoaded(true);
      },
    });

    utils.loadDynamicScript({
      scriptId: 'habboapi',
      url: 'assets/client/js/habboapi.js',
      callback: () => {},
    });

    if (state.user && state.accessToken) {
      dispatch(await AppActions.setAuthTicket(state.user, state.accessToken));
      setTokenUpdated(true);
    }
  });

  useUnmount(() => {
    const swfobject = document.getElementById('swfobject');
    const habboapi = document.getElementById('habboapi');

    if (swfobject) swfobject.parentNode?.removeChild(swfobject);
    if (habboapi) habboapi.parentNode?.removeChild(habboapi);
  });

  React.useEffect(() => {
    const swfObject = window.swfobject;

    if (!state.user?.auth_ticket) return;
    if (!tokenUpdate) return;
    if (!swfObject || typeof swfObject !== 'object' || !swfObject.embedSWF)
      return;

    const settings = utils.generateClientSettings({
      url: config.url!,
      swfUrl: config.swf.url!,
    });

    const vars = utils.generateClientVars({
      settings,
      ssoTicket: state.user.auth_ticket,
      ip: config.server.ip!,
      port: config.server.port!,
    });

    swfObject.embedSWF(
      settings.baseSwf + 'Habbo.swf',
      'client',
      '100%',
      '100%',
      '10.0.0',
      settings.baseSwf + 'expressInstall.swf',
      {
        ...vars,
      },
      {
        ...settings.params,
      },
      null
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptLoaded, tokenUpdate]);

  if (!scriptLoaded || !tokenUpdate) {
    return <LoadingSpinner />;
  }

  return (
    <div id="game-client">
      <Helmet title={'Habbo Rool: Jogar!'} />

      <div className="inline float-left m-2">
        <OnlineCounter mode="client" />
      </div>

      <div id="client">
        <RequestFlashPlayer />
      </div>
    </div>
  );
};

export default ClientPage;
