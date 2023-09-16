import { baseUrl } from '../utils/baseUrl';

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

    await response.json();
  } catch (error) {
    console.log(error);
  }
}
