import { useAppSelector } from './useAppSelector';

export const useGetUserData = () => {
  const username = useAppSelector((state) => state.userReducer.username);
  const full_name = useAppSelector((state) => state.userReducer.full_name);
  const picture = useAppSelector((state) => state.userReducer.picture);
  const status = useAppSelector((state) => state.userReducer.status);

  return { username, full_name, picture, status };
};
