import { baseUrl } from '../utils/baseUrl';
import toast from 'react-hot-toast';

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

  try {
    if (response.status === 400) {
      const { error } = await response.json();

      toast.error(error.message);
      return;
    }

    const { account } = await response.json();

    return account;
  } catch (error) {
    console.error(error);
    throw new Error('Could not get the user.');
  }
}
