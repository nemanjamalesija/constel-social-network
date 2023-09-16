import { useAppSelector } from './useAppSelector';

export const useGetCommentsData = () => {
  const comments = useAppSelector((state) => state.commentsReducer.comments);

  return { comments };
};
