import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const endpoints = {
  posts: '/posts',
  users: '/users',
  comments: '/comments',
} as const;
