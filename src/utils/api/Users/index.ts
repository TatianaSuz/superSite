import axios from 'axios';
import { mainUrl } from '../generalApi';
import { Users } from './types';

class UsersApi {
  static async getUsers() {
    return await axios.get<Users>(`${mainUrl}/users`);
  }
}

export default UsersApi;
