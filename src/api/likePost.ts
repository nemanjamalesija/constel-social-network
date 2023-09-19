import { baseUrl } from '../utils/baseUrl';
import toast from 'react-hot-toast';

export default async function likePost(id: string) {
  try {
    const jwt = localStorage.getItem('jwt');
    const response = await fetch(`${baseUrl}/posts/${id}/like`, {
      method: 'POST',
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

    await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Could not like the post.');
  }
}
