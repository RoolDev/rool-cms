export class User {
  id!: number;
  username!: string;
  mail!: string;
  rank!: number;
  namedRank!: string;
  isAdmin!: boolean;
  account_created!: number;

  constructor(init: User) {
    Object.assign(this, init);
  }
}
