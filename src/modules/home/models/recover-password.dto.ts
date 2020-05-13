export class RecoverPasswordDTO {
  mail!: string;

  constructor(params: Partial<RecoverPasswordDTO>){
    Object.assign(this, params);
  }
}