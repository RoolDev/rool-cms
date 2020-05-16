export class ChangePasswordDTO {
  password!: string;
  passwordConfirmation!: string;
  recaptchaToken!: string;
  
  constructor(params: Partial<ChangePasswordDTO>){
    Object.assign(this, params);
  }
}