export class ChangePasswordDTO {
  password!: string;
  passwordConfirmation!: string;


  constructor(params: Partial<ChangePasswordDTO>){
    Object.assign(this, params);
  }
}