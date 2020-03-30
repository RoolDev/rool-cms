/**
 * Dependencies
 */
import decode from 'jwt-decode';
import config from './config/config';

import axios, { AxiosInstance } from 'axios';

/**
 * Models
 */
import { SigninUserDTO } from './modules/index/models/signin-user.dto';
import { CreateUserDTO } from './modules/index/models/create-user.dto';
import { User } from './modules/index/models/user';

class Service {
  constructor(private instance: AxiosInstance) {}

  /**
   * Faz uma requisiçao para o API para validar se o token está ok.
   *
   * @param accessToken string
   */
  async validateToken(accessToken: string): Promise<User> {
    const request = await this.instance.post('/validate', {
      accessToken
    });

    return new User({ ...request.data });
  }

  /**
   * Faz o decode de um JWT
   *
   * @param accessToken string
   * @returns User
   */
  async decodeJWT(accessToken: string): Promise<User> {
    const decoded: any = decode(accessToken);

    if (!decoded) {
      throw new Error('Não foi possível fazer o decode do token.');
    }

    return new User(decoded);
  }

  /**
   * Cria um user no API
   *
   * @param user User
   * @returns accessToken
   */
  async createUser(user: CreateUserDTO): Promise<{ accessToken: string }> {
    try {
      const ip = await this.getUserIP();

      const { data } = await this.instance.post<{ accessToken: string }>(
        '/signup',
        {
          ...user,
          ip
        }
      );

      return {
        ...data
      };
    } catch (error) {
      throw error.response;
    }
  }

  async authenticateUser(formData: SigninUserDTO) {
    try {
      const { data } = await this.instance.post<{ accessToken: string }>(
        '/signin',
        { ...formData }
      );

      return {
        ...data
      };
    } catch (error) {
      throw error.response;
    }
  }

  async getUserIP(): Promise<string> {
    const { data } = await this.instance.get('/ip');
    return data.ip;

    // const request = await axios.get('https://www.cloudflare.com/cdn-cgi/trace');

    // let data = request.data.replace(/[\r\n]+/g, '","').replace(/=+/g, '":"');

    // data = '{"' + data.slice(0, data.lastIndexOf('","')) + '"}';

    // return JSON.parse(data).ip;
  }
}

export const AppService = new Service(
  axios.create({
    baseURL: `${config.api.url}/auth`
  })
);
