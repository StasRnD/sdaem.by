import { useMutation } from 'react-query';
import axios from 'axios';

interface UserDataRegistration {
  email: string;
  password: string;
  login: string;
}

export const useRegistrationProps = () => {
  return useMutation((data: UserDataRegistration) => {
    return axios.post('http://localhost:3001/register', data);
  });
};
