import { baseUrl } from '../utils/baseUrl';

export default async function logInUser(email: string, password: string) {
  const response = await fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  try {
    if (response.status === 400) {
      const { status, error } = await response.json();
      return { status, error };
    }

    const { token } = await response.json();
    localStorage.setItem('jwt', token);
  } catch (error) {
    console.error(error);
    throw new Error('Could not log in.');
  }
}
