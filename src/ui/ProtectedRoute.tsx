import { ReactNode, useEffect, useState } from 'react';
import { setUser } from '../features/user/userSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import Spinner from './Spinner';
import { useNavigate } from 'react-router';
import getCurrentUser from '../api/getCurrentUser';
import { UserAccountType } from '../types/UserType';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const full_name = useAppSelector((state) => state.userReducer.full_name);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const jwt = localStorage.getItem('jwt');
      if (!jwt) return navigate('/login');

      try {
        setLoading(true);
        const account = await getCurrentUser();

        const { username, full_name, picture } = account;

        username &&
          dispatch(
            setUser({ username, full_name, picture } as UserAccountType)
          );

        setLoading(false);
      } catch (error) {
        console.error('Error getting the user:', error);
        setLoading(false);
      }
    };

    if (!full_name) getUser();
  }, [full_name, dispatch, navigate]);

  if (loading) return <Spinner />;

  if (full_name) return children;
}

export default ProtectedRoute;
