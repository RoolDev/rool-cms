import { ClientSettingsDTO } from '../models/client-settings.dto';
import { ClientVarsDTO } from '../models/client-vars.dto';

export const loadDynamicScript = ({
  scriptId,
  url,
  callback
}: {
  scriptId: string;
  url: string;
  callback: () => void;
}) => {
  const existingScript = document.getElementById(scriptId);

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = url;
    script.id = scriptId;

    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};

export const generateClientSettings = ({
  url,
  swfUrl
}: {
  url: string;
  swfUrl: string;
}) => {
  return new ClientSettingsDTO({
    url,
    baseUrl: swfUrl,
    baseSwf: `${swfUrl}/gordon/PRODUCTION-201904011212-888653470/`,
    externalTexts: `${swfUrl}/gamedata/external_flash_texts.txt`,
    externalVars: `${swfUrl}/gamedata/external_variables.txt`,
    flashOverrideTexts: `${swfUrl}/gamedata/override/external_flash_override_texts.txt`,
    flashOverrideVars: `${swfUrl}/gamedata/override/external_override_variables.txt`,
    figureData: `${swfUrl}/gamedata/figuredata.xml`,
    furniData: `${swfUrl}/gamedata/furnidata.xml`,
    productData: `${swfUrl}/gamedata/productdata.txt`,
    params: {
      base: `${swfUrl}/gordon/PRODUCTION-201904011212-888653470/`,
      allowScriptAccess: 'always',
      menu: 'false',
      wmode: 'opaque'
    }
  });
};

export const generateClientVars = ({
  settings,
  ssoTicket,
  ip,
  port
}: {
  settings: ClientSettingsDTO;
  ssoTicket: string;
  ip: string;
  port: string;
}) => {
  const vars: ClientVarsDTO = new ClientVarsDTO({
    'connection.info.host': ip,
    'connection.info.port': port,
    'client.reload.url': `${settings.url}/disconnected`,
    'client.fatal.error.url': `${settings.url}/disconnected`,
    'client.connection.failed.url': `${settings.url}/disconnected`,
    'external.variables.txt': settings.externalVars,
    'external.texts.txt': settings.externalTexts,
    'external.override.texts.txt': settings.flashOverrideTexts,
    'external.override.variables.txt': settings.flashOverrideVars,
    'external.figurepartlist.txt': settings.figureData,
    'productdata.load.url': settings.productData,
    'furnidata.load.url': settings.furniData,
    'flash.client.url': settings.baseSwf,
    'sso.ticket': ssoTicket
  });

  return vars;
};
