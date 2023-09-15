import { baseUrl } from '../utils/baseUrl';

export default async function getCurrentUser() {
  const jwt = localStorage.getItem('jwt');

  const response = await fetch(`${baseUrl}/accounts/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + jwt,
    },
  });

  const { status, account } = await response.json();

  if (status == 'ok') return { account };
}
