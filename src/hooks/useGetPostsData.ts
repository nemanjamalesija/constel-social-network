import { useAppSelector } from './useAppSelector';

export const useGetPostsData = () => {
  const posts = useAppSelector((state) => state.postsReducer.posts);

  return { posts };
};
