import axios from 'axios';
import { mainUrl } from '../generalApi';
import { Comment } from './types';

class CommentsApi {
  static async getComment() {
    return await axios.get<Comment>(`${mainUrl}/comments`);
  }
}

export default CommentsApi;
