import { baseUrl } from '../utils/baseUrl';

export default async function getCurrentUser() {
  const jwt = localStorage.getItem('jwt');

  if (!jwt) return;

  const response = await fetch(`${baseUrl}/accounts/me`, {
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

  const { account } = await response.json();

  return account;
}
