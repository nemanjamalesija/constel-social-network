import { ReactNode, useEffect, useState } from 'react';
import { setUser } from '../features/user/userSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import Spinner from './Spinner';
import { useNavigate } from 'react-router';
import getCurrentUser from '../api/getCurrentUser';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const fullName = useAppSelector((state) => state.userReducer.fullName);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const jwt = localStorage.getItem('jwt');
      if (!jwt) return navigate('/login');

      try {
        setLoading(true);
        const currentUser = await getCurrentUser();
        if (!currentUser) return;
        const {
          account: { username, full_name, picture },
        } = currentUser;

        dispatch(setUser({ username, full_name, picture }));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    if (!fullName) getUser();
  }, [fullName, dispatch, navigate]);

  if (loading) return <Spinner />;

  if (fullName) return children;
}

export default ProtectedRoute;
