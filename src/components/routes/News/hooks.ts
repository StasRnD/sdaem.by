import { useQuery } from 'react-query';
import axios from 'axios';
import { NewsDetails } from '../../../types/types';

export function useNewsProps() {
  const { isLoading, error, data } = useQuery<NewsDetails[]>('news', () => {
    return axios
      .get('http://localhost:3001/news/')
      .then((response) => response.data);
  });

  return {
    isLoading,
    error,
    news: data || [],
  };
}
