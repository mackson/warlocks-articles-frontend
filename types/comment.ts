export type CommentType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  content: string;
  likes: number;
  replies?: CommentType[];
};