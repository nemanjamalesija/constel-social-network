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
      const { error } = await response.json();

      alert(error.message);
      return;
    }

    const { token } = await response.json();

    return { token };
  } catch (error) {
    console.log(error);
  }
}
