import { User } from '@/types';
import axios from './axios'; // authConfig
const googleMapApiKey = process.env.EXPO_PUBLIC_API_KEY;

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

export const reverseGeocoding = async (latitude: number, longitude: number) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapApiKey}`,
  );
  return response.data;
};
