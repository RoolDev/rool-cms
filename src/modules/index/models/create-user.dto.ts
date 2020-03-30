export class CreateUserDTO {
  username!: string;
  password!: string;
  passwordConfirmation!: string;
  mail!: string;
  ip!: string;

  constructor(params: Partial<CreateUserDTO>) {
    Object.assign(this, params);
  }
}
