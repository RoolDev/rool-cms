import axios, { AxiosInstance } from 'axios';

import config from '../../config/config';

import { AppService } from '../../index.service';

class Service {
  constructor(private instance: AxiosInstance) {}

  async updateUserSSO(id: number, token: string) {
    try {
      const ip = await AppService.getUserIP();

      const {
        data: { auth_ticket }
      } = await this.instance.post<{ auth_ticket: string }>(
        `/users/${id}/sso`,
        {
          ip
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      return {
        auth_ticket
      };
    } catch (error) {
      throw error.response;
    }
  }
}

export const HomeService = new Service(
  axios.create({
    baseURL: `${config.api.url}`
  })
);
