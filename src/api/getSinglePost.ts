import { baseUrl } from '../utils/baseUrl';
import toast from 'react-hot-toast';

export default async function getSinglePost(id: string) {
  const jwt = localStorage.getItem('jwt');

  if (!jwt) return;

  try {
    const response = await fetch(`${baseUrl}/posts/${id}`, {
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

    const data = await response.json();

    return data.post;
  } catch (error) {
    console.error(error);
    throw new Error('Could not get the post!');
  }
}
