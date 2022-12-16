import { useMutation } from 'react-query';
import axios from 'axios';

interface UserDataAuth {
  password: string;
  email: string;
}

export const useAuthProps = () => {
  return useMutation((data: UserDataAuth) => {
    return axios.post('http://localhost:3001/login', data);
  });
};
