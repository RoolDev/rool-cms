import * as React from "react";

/**
 * Dependencies
 */
import * as utils from "../utils";
import * as AppActions from "../../../App.actions";

import config from "../../../config/config";

import { useMount, useUnmount } from "react-use";
import { Helmet } from "react-helmet";
import { useApp } from "../../../App.context";

/**
 * Components
 */
import LoadingSpinner from "../../../components/spinner";
import RequestFlashPlayer from "../components/RequestFlashPlayer";

/**
 * Styles
 */
import "./Client.style.scss";

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
      scriptId: "swfobject",
      url: "assets/client/js/swfobject.js",
      callback: () => {
        setScriptLoaded(true);
      }
    });

    if (state.user && state.accessToken && !state.user?.auth_ticket) {
      dispatch(await AppActions.setAuthTicket(state.user, state.accessToken));
      setTokenUpdated(true);
    }
  });

  useUnmount(() => {
    const el = document.getElementById("swfobject");
    if (el) document.body.removeChild(el);
  });

  React.useEffect(() => {
    const swfObject = window.swfobject;

    if (!state.user?.auth_ticket) return;
    if (!tokenUpdate) return;
    if (!swfObject || typeof swfObject !== "object" || !swfObject.embedSWF)
      return;

    const settings = utils.generateClientSettings({
      url: config.url!,
      swfUrl: config.swf.url!
    });

    const vars = utils.generateClientVars({
      settings,
      ssoTicket: state.user.auth_ticket,
      ip: config.server.ip!,
      port: config.server.port!
    });

    swfObject.embedSWF(
      settings.baseSwf + "_R.swf",
      "client",
      "100%",
      "100%",
      "10.0.0",
      settings.baseSwf + "expressInstall.swf",
      {
        ...vars
      },
      {
        ...settings.params
      },
      null
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptLoaded, tokenUpdate]);

  if (!scriptLoaded || !tokenUpdate) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Helmet>
        <title>Habbo Rool: Jogue agora!</title>
        <script type="text/javascript" src="assets/client/js/habboapi.js" />
      </Helmet>

      <div id="client">
        <RequestFlashPlayer />
      </div>
    </>
  );
};

export default ClientPage;
