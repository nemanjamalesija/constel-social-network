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

    if (response.status === 400) {
      const { error } = await response.json();

      alert(error.message);
      return;
    }

    await response.json();
  } catch (error) {
    console.log(error);
  }
}
