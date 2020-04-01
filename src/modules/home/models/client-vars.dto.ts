export class ClientVarsDTO {
  "client.allow.cross.domain": "0" | "1";
  "client.notify.cross.domain": "0" | "1";
  "connection.info.host": string;
  "connection.info.port": string;
  "site.url": string;
  "url.prefix": string;
  "client.reload.url": string;
  "client.fatal.error.url": string;
  "client.connection.failed.url": string;
  "external.variables.txt": string;
  "external.texts.txt": string;
  "external.override.texts.txt": string;
  "external.override.variables.txt": string;
  "external.figurepartlist.txt": string;
  "productdata.load.url": string;
  "furnidata.load.url": string;
  "sso.ticket": string;
  "client.starting": string;
  "flash.client.url": string;
  "use.sso.ticket": "0" | "1";
  "processlog.enabled": "0" | "1";
  "client.starting.revolving": string;
  "flash.client.origin": "popup";

  constructor(params: Partial<ClientVarsDTO>) {
    this["client.allow.cross.domain"] = "1";
    this["client.notify.cross.domain"] = "0";
    this["use.sso.ticket"] = "1";
    this["processlog.enabled"] = "0";

    this["client.starting"] =
      "Hey! O Rool está carregando, aguarde um pouquinho ;)";
    this[
      "client.starting.revolving"
    ] = `Pela ciência, seu monstro/Carregando uma mensagem engraçada... por favor aguarde./Gostaria de batatas fritas com isso?/Siga o pato amarelo./Tempo é apenas uma ilusão./Já estamos lá?!/Eu gosto da sua camisa./Olhe para a esquerda. Olhe para a direita. Pisque duas vezes. Ta da!/Não é você, sou eu./Shhh! Eu estou tentando pensar aqui./Carregando o universo do pixels.`;
    this["flash.client.origin"] = "popup";

    Object.assign(this, params);
  }
}
