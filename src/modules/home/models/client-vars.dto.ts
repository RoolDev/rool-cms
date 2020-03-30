export class ClientVarsDTO {
  'client.allow.cross.domain': '0' | '1';
  'client.notify.cross.domain': '0' | '1';
  'connection.info.host': string;
  'connection.info.port': string;
  'site.url': string;
  'url.prefix': string;
  'client.reload.url': string;
  'client.fatal.error.url': string;
  'client.connection.failed.url': string;
  'external.variables.txt': string;
  'external.texts.txt': string;
  'external.override.texts.txt': string;
  'external.override.variables.txt': string;
  'external.figurepartlist.txt': string;
  'productdata.load.url': string;
  'furnidata.load.url': string;
  'sso.ticket': string;
  'client.starting': string;
  'flash.client.url': string;
  'use.sso.ticket': '0' | '1';
  'processlog.enabled': '0' | '1';
  'client.starting.revolving': string;
  'flash.client.origin': 'popup';

  constructor(params: Partial<ClientVarsDTO>) {
    this['client.allow.cross.domain'] = '1';
    this['client.notify.cross.domain'] = '1';
    this['use.sso.ticket'] = '1';
    this['processlog.enabled'] = '0';

    this['client.starting'] = 'Please wait! {hotelName} is starting up.';
    this[
      'client.starting.revolving'
    ] = `For science, you monster/Loading funny message... please wait./Would you like fries with that?/Follow the yellow duck./Time is just an illusion./Are we there yet?!/I like your t-shirt./Look left. Look right. Blink twice. Ta da!/It's not you, it's me./Shhh! I'm trying to think here./Loading pixel universe.`;
    this['flash.client.origin'] = 'popup';

    Object.assign(this, params);
  }
}
