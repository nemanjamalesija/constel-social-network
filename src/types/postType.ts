export type Post = {
  post_id: string;
  user_id: string;
  text: string;
  image: string;
  audio: string;
  comments: number;
  likes: number;
  created_at: string;
  user: {
    username: string;
    full_name: string;
    picture: string;
  };
  liked: boolean;
};

export type PostsType = Post[];
