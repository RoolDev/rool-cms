export class SigninUserDTO {
  mail!: string;
  password!: string;

  constructor(init: Partial<SigninUserDTO>) {
    Object.assign(this, init);
  }
}
