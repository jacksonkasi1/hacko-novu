export interface Post {
  u_id: string;
  post_id: string;
  title: string;
  slug: string;
  content: string;
  published_date: string;
  likes: { u_id: string }[];
  dislikes: { u_id: string }[];
}
