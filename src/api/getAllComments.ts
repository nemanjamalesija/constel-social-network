import { baseUrl } from '../utils/baseUrl';

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

    const { comments } = await response.json();

    return { comments };
  } catch (error) {
    console.log(error);
  }
}
