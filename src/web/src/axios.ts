import axios, { AxiosInstance, AxiosRequestConfig, AxiosHeaders } from 'axios';
import { getToken, isTokenExpired } from './jwt';

const axiosInstance: AxiosInstance = axios.create({baseURL:'/api'});


axiosInstance.interceptors.request.use((config) => {
  const token: string | null = getToken();
  if (token && !isTokenExpired()) {
    const headers: AxiosHeaders = config.headers || {};
    headers.Authorization = `Bearer ${token}`;
    config.headers = headers;
  }
  return config;
});

export default axiosInstance;
