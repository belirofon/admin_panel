import axios from '../../../shared/api/axiosInstance';

export const login = async (username: string, password: string) => {
  const response = await axios.post('/auth/login', { username, password });
  return response.data;
};