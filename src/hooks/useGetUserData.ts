import { useAppSelector } from './useAppSelector';

export const useGetPersonData = () => {
  const username = useAppSelector((state) => state.userReducer.username);
  const fullName = useAppSelector((state) => state.userReducer.fullName);
  const picture = useAppSelector((state) => state.userReducer.picture);
  const status = useAppSelector((state) => state.userReducer.status);

  return { username, fullName, picture, status };
};
