export class RecoverPasswordDTO {
  mail!: string;
  recaptchaToken!: string;

  constructor(params: Partial<RecoverPasswordDTO>){
    Object.assign(this, params);
  }
}