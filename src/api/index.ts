export * from './config';
export * from './services';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Post, PostService, Comment, CommentService, User, UserService } from './services';

// Post Hooks
export const useGetPosts = () => {
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await PostService.getPosts();
      return response.data.map((post) => ({
        ...post,
        status: ['Success', 'Failed', 'Pending'][Math.floor(Math.random() * 3)] as 'Success' | 'Failed' | 'Pending',
      }));
    },
  });
};

export const useGetPost = (id: number) => {
  return useQuery<Post>({
    queryKey: ['post', id],
    queryFn: async () => {
      const response = await PostService.getPost(id);
      return response.data;
    },
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: Omit<Post, 'id'>) => {
      const response = await PostService.createPost(data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};

// User Hooks
export const useGetUsers = () => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await UserService.getUsers();
      return response.data;
    },
  });
};

// Comment Hooks
export const useGetComments = (postId?: number) => {
  return useQuery<Comment[]>({
    queryKey: ['comments', postId],
    queryFn: async () => {
      const response = await CommentService.getComments(postId);
      return response.data;
    },
  });
};