import { baseUrl } from '../utils/baseUrl';

export default async function getCurrentPosts() {
  const jwt = localStorage.getItem('jwt');

  if (!jwt) return;

  const response = await fetch(`${baseUrl}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + jwt,
    },
  });
  const { posts } = await response.json();

  return { posts };
}
