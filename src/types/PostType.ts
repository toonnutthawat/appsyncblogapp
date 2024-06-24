export interface PostType {
  id: string;
  title: string;
  content: string;
  username?: string | null ;
  coverImage?: string | null;
  createdAt: string;
  updatedAt: string;
}