import { SigninUserDTO } from './models/signin-user.dto';

class Service {
  async authenticateUser(user: SigninUserDTO) {}
}

export const IndexService = new Service();
