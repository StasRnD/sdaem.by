import { useQuery } from 'react-query';
import axios from 'axios';
import { NewsDetails } from '../../../../types/types';
import { useParams } from 'react-router-dom';

export function useNewsDetailsProps() {
  const { newsId } = useParams();

  const { isLoading, error, data } = useQuery<NewsDetails>(
    'newsDetails',
    () => {
      return axios
        .get(`http://localhost:3000/news/${newsId}`)
        .then((response) => response.data);
    }
  );

  return {
    isLoading,
    error,
    newsDetails: data,
  };
}
