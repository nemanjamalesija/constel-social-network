import { useEffect } from 'react';
import getCurrentUser from '../api/getCurrentUser';

const HomePage = () => {
  useEffect(() => {
    (async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser) return;
      const { account } = currentUser;

      console.log(account);
    })();
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
