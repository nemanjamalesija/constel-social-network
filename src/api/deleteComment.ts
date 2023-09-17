import { baseUrl } from '../utils/baseUrl';

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

      alert(error.message);
      return;
    }

    await response.json();
  } catch (error) {
    console.log(error);
  }
}
