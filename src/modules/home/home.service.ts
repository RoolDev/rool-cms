/**
 * Dependencies
 */
import axios, { AxiosInstance } from 'axios';
import config from '../../config/config';
import { AppService } from '../../index.service';

/**
 * Models
 */
import { IUserDetails, IUserCurrencies } from './models/user-details';
import { RecoverPasswordDTO } from './models/recover-password.dto';
import { ChangePasswordDTO } from './models/change-password.dto';

class Service {
  constructor(private instance: AxiosInstance) {}

  async updateUserSSO(id: number, token: string) {
    try {
      const ip = await AppService.getUserIP();
      const request = await this.instance.post<{ auth_ticket: string }>(
        `/users/${id}/sso`,
        {
          ip,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return {
        auth_ticket: request.data.auth_ticket,
      };
    } catch (error) {
      throw error.response;
    }
  }

  async getUsersOnlineCount(): Promise<{ usersOnline: number }> {
    const request = await this.instance.get<{ usersOnline: number }>('/users');

    return request.data;
  }

  async getUserDetails(id: number, token: string): Promise<IUserDetails> {
    try {
      const request = await this.instance.get(`/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const { data } = request;

      const currencies = this.parseCurrencies(data.currencies);
      const user = new IUserDetails({ ...request.data, currencies });

      return user;
    } catch (error) {
      throw error.response;
    }
  }

  private parseCurrencies(
    currencies: { type: number; amount: number }[]
  ): IUserCurrencies {
    const result: any = currencies.reduce((prev, cur) => {
      const { type, amount } = cur;

      const nObj = {
        [type === 0 ? `DUCKETS` : `DIAMONDS`]: {
          amount,
        },
      };

      return { ...prev, ...nObj };
    }, {});

    return result;
  }

  async recoverPassword(
    payload: RecoverPasswordDTO,
    recaptchaToken: string
  ): Promise<string>{
    try {
      const response = await this.instance.post('/users/recover', {
        ...payload,
        recaptchaToken
      });

      return response.statusText;

    } catch(err){
      throw(err)
    }
  }

  async changePassword(
    payload: ChangePasswordDTO,
    token: string,
    recaptchaToken: string
  ): Promise<string> {

    try {
      const response = await this.instance.post('/users/recover/changePassword', {
        ...payload,
        token,
        recaptchaToken,
      });
  
      return response.statusText;
      
    } catch(err){
      throw(err)
    }
  }
}

export const HomeService = new Service(
  axios.create({
    baseURL: `${config.api.url}`,
  })
);

