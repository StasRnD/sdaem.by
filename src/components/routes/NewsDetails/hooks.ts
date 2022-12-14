import { useQuery } from 'react-query';
import axios from 'axios';
import { NewsDetails } from '../../../types/types';
import { useParams } from 'react-router-dom';
import { sampleSize } from 'lodash';

export function useNewsDetailsProps() {
  const { newsId } = useParams();

  const { isLoading, error, data } = useQuery<NewsDetails>(
    'newsDetails',
    () => {
      return axios
        .get(`http://localhost:3001/news/${newsId}`)
        .then((response) => response.data);
    }
  );

  return {
    isLoading,
    error,
    newsDetails: data,
  };
}

export function useRandomNewsProps() {
  const { isLoading, error, data } = useQuery<NewsDetails[]>(
    'randomNews',
    () => {
      return axios
        .get(`http://localhost:3001/news`)
        .then((response) => response.data);
    }
  );

  return {
    isLoading,
    error,
    randomNews: sampleSize(data, 3),
  };
}
