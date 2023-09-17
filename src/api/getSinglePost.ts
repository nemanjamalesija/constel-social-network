import { baseUrl } from '../utils/baseUrl';

export default async function getSinglePost(id: string) {
  const jwt = localStorage.getItem('jwt');

  if (!jwt) return;

  const response = await fetch(`${baseUrl}/posts/${id}`, {
    method: 'GET',
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

  const { post } = await response.json();

  return { post };
}
