import { baseUrl } from '../utils/baseUrl';
import toast from 'react-hot-toast';

export default async function deleteComment(postId: string, commentId: string) {
  try {
    const jwt = localStorage.getItem('jwt');
    const response = await fetch(
      `${baseUrl}/posts/${postId}/comments/${commentId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + jwt,
        },
      }
    );

    if (response.status == 400) {
      const { error } = await response.json();

      toast.error(error.message);
      return;
    }

    await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Could not delete the comment.');
  }
}
