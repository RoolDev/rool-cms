export class SigninUserDTO {
  mail!: string;
  password!: string;
  recaptchaToken!: string;

  constructor(init: Partial<SigninUserDTO>) {
    Object.assign(this, init);
  }
}
