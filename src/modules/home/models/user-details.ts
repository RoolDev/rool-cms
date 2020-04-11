export class IUserDetails {
  id!: number;
  username!: string;
  motto!: string;
  auth_ticket!: string;
  ip_current!: string;
  credits!: number;
  pixels!: number;
  points!: number;
  online!: '0' | '1';
  look!: string;

  // From JWT
  isAdmin!: boolean;

  constructor(params: Partial<IUserDetails>) {
    Object.assign(this, params);
  }
}
