interface ArticleProps {
  id?: string;
  title: string;
  slug: string;
  author_id: string;
  content: string;
  cover: string;
  likes: string[];
  tags: string[];
  status: number;
  createdAt?: Date;
  updatedAt?: Date;
}