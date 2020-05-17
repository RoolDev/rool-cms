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
import { IUserDetails } from './modules/home/models/user-details';

export const createUser = async (formData: CreateUserDTO): Promise<Action> => {
  const { accessToken } = await AppService.createUser(formData);
  const user = await fetchUserDetails(accessToken);

  window.localStorage.setItem('accessToken', accessToken);

  return {
    type: 'setAuth',
    value: {
      accessToken,
      user,
    },
  };
};

export const authenticateUser = async (
  formData: SigninUserDTO
): Promise<Action> => {
  const { accessToken } = await AppService.authenticateUser(formData);
  const user = await fetchUserDetails(accessToken);

  window.localStorage.setItem('accessToken', accessToken);

  return {
    type: 'setAuth',
    value: {
      user,
      accessToken,
    },
  };
};

export const revalidateToken = async (accessToken: string): Promise<Action> => {
  const user = await fetchUserDetails(accessToken);

  return {
    type: 'setAuth',
    value: {
      accessToken,
      user,
    },
  };
};

export const setAuthTicket = async (
  user: IUserDetails,
  accessToken: string
): Promise<Action> => {
  const { auth_ticket } = await HomeService.updateUserSSO(user.id, accessToken);

  return {
    type: 'setAuthTicket',
    value: auth_ticket,
  };
};

export const removeAccessToken = (): Action => {
  window.localStorage.removeItem('accessToken');

  return {
    type: 'removeAccessToken',
    value: undefined,
  };
};

export const setAccessToken = (value: string): Action => {
  return {
    type: 'setAccessToken',
    value,
  };
};

export const fetchUserDetails = async (
  accessToken: string
): Promise<IUserDetails> => {
  const { id, isAdmin } = await AppService.validateToken(accessToken);
  const user = await HomeService.getUserDetails(id, accessToken);

  return {
    ...user,
    isAdmin,
  };
};

export const signoutUser = (): Action => {

  return {
    type: 'resetContext',
    value: undefined,
  }

}
