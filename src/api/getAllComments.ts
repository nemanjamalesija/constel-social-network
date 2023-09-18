import { baseUrl } from '../utils/baseUrl';
import toast from 'react-hot-toast';

export default async function getAllComments(id: string) {
  const jwt = localStorage.getItem('jwt');

  if (!jwt) return;

  try {
    const response = await fetch(`${baseUrl}/posts/${id}/comments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt,
      },
    });

    if (response.status === 400) {
      const { error } = await response.json();

      return toast.error(error.message);
    }

    const { comments } = await response.json();

    return comments;
  } catch (error) {
    console.error(error);
    throw new Error('Could not get comments!');
  }
}
