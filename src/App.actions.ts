/**
 * Dependencies
 */
import { AppService } from './index.service';
import { HomeService } from './modules/home/home.service';

/**
 * Models
 */
import { Action } from './App.context';
import { SigninUserDTO } from './modules/index/models/signin-user.dto';
import { CreateUserDTO } from './modules/index/models/create-user.dto';
import { User } from './modules/index/models/user';

export const createUser = async (formData: CreateUserDTO): Promise<Action> => {
  const { accessToken } = await AppService.createUser(formData);

  const user = await AppService.decodeJWT(accessToken);

  window.localStorage.setItem('accessToken', accessToken);

  return {
    type: 'setAuth',
    value: {
      accessToken,
      user
    }
  };
};

export const authenticateUser = async (
  formData: SigninUserDTO
): Promise<Action> => {
  const { accessToken } = await AppService.authenticateUser(formData);
  const user = await AppService.decodeJWT(accessToken);

  window.localStorage.setItem('accessToken', accessToken);

  return {
    type: 'setAuth',
    value: {
      user,
      accessToken
    }
  };
};

export const revalidateToken = async (accessToken: string): Promise<Action> => {
  const user = await AppService.validateToken(accessToken);

  return {
    type: 'setAuth',
    value: {
      accessToken,
      user
    }
  };
};

export const setAuthTicket = async (
  user: User,
  accessToken: string
): Promise<Action> => {
  const { auth_ticket } = await HomeService.updateUserSSO(user.id, accessToken);

  return {
    type: 'setAuthTicket',
    value: auth_ticket
  };
};

export const setAccessToken = (value: string): Action => {
  return {
    type: 'setAccessToken',
    value
  };
};
