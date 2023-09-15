import { ReactNode } from 'react';
import { getUser } from '../features/user/userSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import Spinner from './Spinner';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const fullName = useAppSelector((state) => state.userReducer.fullName);
  const status = useAppSelector((state) => state.userReducer.status);

  if (!fullName) dispatch(getUser());

  if (status == 'loading') return <Spinner />;

  return children;
}

export default ProtectedRoute;
