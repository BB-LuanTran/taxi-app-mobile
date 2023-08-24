import { User } from '@/types';
import axios from './axios'; // authConfig

export const homePage = async (): Promise<any> => {
  const response = await axios.get<any>('/');
  return response.data;
};

export const checkUser = async (): Promise<User> => {
  const response = await axios.get<User>('/v1/auth/azureAD/check');
  return response.data;
};

export const logout = async (): Promise<User> => {
  const response = await axios.get<User>('/v1/auth/azureAD/logout');
  return response.data;
};
