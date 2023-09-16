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

    const { status, error } = await response.json();

    if (status == 'error') return alert(error.message);
  } catch (error) {
    console.log(error);
  }
}
