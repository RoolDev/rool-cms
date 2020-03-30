export class ClientSettingsDTO {
  url!: string;
  baseUrl!: string;
  externalVars!: string;
  externalTexts!: string;
  flashOverrideTexts!: string;
  flashOverrideVars!: string;
  figureData!: string;
  productData!: string;
  furniData!: string;
  baseSwf!: string;

  // Params for the SWF object
  params!: {
    base: string;
    allowScriptAccess: string;
    menu: string;
    wmode: string;
  };

  constructor(params: ClientSettingsDTO) {
    Object.assign(this, params);
  }
}
