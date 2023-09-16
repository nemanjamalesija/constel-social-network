import { baseUrl } from '../utils/baseUrl';

export default async function createComment(id: string, text: string) {
  const jwt = localStorage.getItem('jwt');
  if (!jwt) return;

  try {
    const response = await fetch(`${baseUrl}/posts/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt,
      },
      body: JSON.stringify({
        text: text,
      }),
    });

    const { status, error } = await response.json();

    if (status == 'error') return alert(error.message);
  } catch (error) {
    console.log(error);
  }
}
