import axios from 'axios';
import { Posts } from './types';
import { mainUrl } from '../generalApi';

class PostApi {
  static async getPosts() {
    return await axios.get<Posts>(`${mainUrl}/posts`);
  }
}

export default PostApi;

// PostApi.getPosts();
