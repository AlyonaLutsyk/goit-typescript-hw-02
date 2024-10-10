import axios from 'axios';
import { Image } from './types'; 

const API_KEY = 'alE0PwRUW_YgIw5Z5ycbV2jSx5gku_-oOd5pD-wivZs';
const BASE_URL = 'https://api.unsplash.com/search/photos';

interface FetchImagesResponse {
  results: Image[];
}

export const fetchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 12
): Promise<FetchImagesResponse> => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: API_KEY,
    },
  });
  return response.data;
};
