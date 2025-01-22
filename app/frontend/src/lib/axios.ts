import axios, { AxiosInstance } from 'axios';

export const PUBLIC_API: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const SERVER_API: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_SERVER_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
