import { loginValidator } from './InputValidation';
import { useState } from 'react';
import { ZodError } from 'zod';
import { baseUrl } from '../utils/baseUrl';
import Logo from '../utils/logo';
import FormLabel from '../ui/FormLabel';
import formatZodError from '../helpers/formatZodError';
import LogInButton from '../ui/LogInButton';
import { clsx } from 'clsx';

type ErrorType = { type: string; message: string };

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<ErrorType>({ type: '', message: '' });

  const allFieldsCompleted = loginValidator.safeParse({
    email,
    password,
  }).success;

  const logIn = async (email: string, password: string) => {
    try {
      const tryUser = loginValidator.parse({
        email,
        password,
      });
      tryUser.password;

      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: tryUser.email,
          password: tryUser.password,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      if (error instanceof ZodError) {
        const formatedError = formatZodError(error);
        console.log(formatedError);

        if (formatedError.includes('email'))
          setError({ type: 'email error', message: formatedError });

        if (formatedError.includes('Password')) {
          setError({ type: 'password error', message: formatedError });
        }
      } else {
        setError({
          type: 'server error',
          message: 'Oops, something went wrong',
        });
      }
    }
  };

  return (
    <section id='login' className='relative'>
      <div className='max-w-sm absolute left-1/2 -translate-x-1/2 translate-y-[30%] '>
        <div className=''>
          <Logo />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            logIn(email, password);
          }}
        >
          <div className='mb-6'>
            <FormLabel forProp='Email' />
            <input
              id='Email'
              type='text'
              className={clsx(
                'block w-full border-0 py-3 px-4 rounded-lg align-middle text-gray-900 text-xs lg:text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-blue-500',
                {
                  'ring-red-500': error.type == 'email error',
                }
              )}
              placeholder='Enter email here...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error.type == 'email error' && <p>{error.message}</p>}
          </div>
          <div>
            <FormLabel forProp='Password' />
            <input
              id='password'
              className={clsx(
                'block w-full border-0 py-3 px-4 rounded-lg align-middle text-gray-900 text-xs lg:text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-blue-500',
                {
                  'ring-red-500': error.type == 'password error',
                }
              )}
              placeholder='Enter password here...'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error.type == 'password error' && <p>{error.message}</p>}
          </div>
          <div className='text-center'>
            <LogInButton />
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
