export interface Post {
  id: number;
  title: string;
  body: string;
  status: 'Success' | 'Failed' | 'Pending';
  user?: string;
  postId?: string;
  userId: number;
}
