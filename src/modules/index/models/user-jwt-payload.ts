export class IUserJWTPayload {
  id!: number;
  username!: string;
  mail!: string;
  rank!: number;
  isAdmin!: boolean;
  account_created!: number;

  // Fetched from API
  auth_ticket!: string;

  constructor(init: IUserJWTPayload) {
    Object.assign(this, init);
  }
}
