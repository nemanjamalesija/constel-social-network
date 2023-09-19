import { baseUrl } from '../utils/baseUrl';
import toast from 'react-hot-toast';

export default async function deletePost(postId: string) {
  try {
    const jwt = localStorage.getItem('jwt');
    const response = await fetch(`${baseUrl}/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt,
      },
    });

    if (response.status == 400) {
      const { error } = await response.json();

      toast.error(error.message);
      return;
    }

    await response.json();
    const { status } = response;

    return status;
  } catch (error) {
    console.error(error);
    throw new Error('Could not delete the post.');
  }
}
