import { api, endpoints } from './config';

import { Post } from '../types';

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export const PostService = {
  getPosts: () => api.get<Post[]>(endpoints.posts),
  getPost: (id: number) => api.get<Post>(`${endpoints.posts}/${id}`),
  createPost: (data: Omit<Post, 'id'>) => api.post<Post>(endpoints.posts, data),
  updatePost: (id: number, data: Partial<Post>) => api.put<Post>(`${endpoints.posts}/${id}`, data),
  deletePost: (id: number) => api.delete(`${endpoints.posts}/${id}`),
};

export const UserService = {
  getUsers: () => api.get<User[]>(endpoints.users),
  getUser: (id: number) => api.get<User>(`${endpoints.users}/${id}`),
};

export const CommentService = {
  getComments: (postId?: number) => {
    const url = postId ? `${endpoints.posts}/${postId}/comments` : endpoints.comments;
    return api.get<Comment[]>(url);
  },
  createComment: (data: Omit<Comment, 'id'>) => api.post<Comment>(endpoints.comments, data),
};
