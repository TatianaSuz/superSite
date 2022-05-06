import axios from 'axios';
import { mainUrl } from '../generalApi';
import { Photos } from './types';

class PhotosApi {
  static async getComment() {
    return await axios.get<Photos>(`${mainUrl}/photos`);
  }
}

export default PhotosApi;
