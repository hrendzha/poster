import { User } from "./user.model";

export interface Post {
  id: string;
  user: User;
  media: string;
  likes: number;
  comments: number;
  location: string;
  description: string;
  liked: boolean;
}
