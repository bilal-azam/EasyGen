import axios from 'axios';

// Base URL for the backend
const API = axios.create({
  baseURL: 'http://localhost:3000',
});

// Signup API
export const signUp = (data: { email: string; name: string; password: string }) =>
  API.post('/auth/signup', data);

// Login API
export const signIn = (data: { email: string; password: string }) =>
  API.post('/auth/signin', data);

// Fetch profile API
export const getProfile = (token: string) =>
  API.get('/users/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
