export interface IUserCurrencies {
  DUCKETS: {
    amount: number;
  };
  DIAMONDS: {
    amount: number;
  };
}

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
  last_online!: number;

  currencies!: IUserCurrencies;

  // From JWT
  isAdmin!: boolean;

  constructor(params: Partial<IUserDetails>) {
    Object.assign(this, params);
  }
}
