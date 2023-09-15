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

  const { status, error, token } = await response.json();

  if (error) return { status, error };
  else {
    localStorage.setItem('jwt', token);
    return { status };
  }
}
