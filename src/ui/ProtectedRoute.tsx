import { ReactNode, useEffect } from 'react';
import { getUser } from '../features/user/userSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import Spinner from './Spinner';
import { useNavigate } from 'react-router';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const fullName = useAppSelector((state) => state.userReducer.fullName);
  const status = useAppSelector((state) => state.userReducer.status);
  if (!fullName) dispatch(getUser());
  const navigate = useNavigate();

  useEffect(() => {
    if (status != 'loading' && !fullName) navigate('/login');
  }, [status, fullName, navigate]);

  if (status == 'loading') return <Spinner />;

  return children;
}

export default ProtectedRoute;
