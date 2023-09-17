import { baseUrl } from '../utils/baseUrl';

export default async function getPostsFeed() {
  const jwt = localStorage.getItem('jwt');

  if (!jwt) return;

  try {
    const response = await fetch(`${baseUrl}/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt,
      },
    });
    const { posts } = await response.json();

    return { posts };
  } catch (error) {
    console.log(error);
  }
}
