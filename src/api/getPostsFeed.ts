import { baseUrl } from '../utils/baseUrl';
import toast from 'react-hot-toast';

export default async function getPostsFeed() {
  const jwt = localStorage.getItem('jwt');

  if (!jwt) return;

  try {
    const response = await fetch(`${baseUrl}/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt,
      },
    });

    if (response.status === 400) {
      const { error } = await response.json();

      toast.error(error.message);
      return;
    }

    const { posts } = await response.json();

    return { posts };
  } catch (error) {
    console.error(error);
    throw new Error('Could not get posts!');
  }
}
