import { loginValidator } from './InputValidation';
import { useState } from 'react';
import { ZodError } from 'zod';
import { baseUrl } from '../utils/baseUrl';
import Logo from '../utils/logo';
import FormLabel from './FormLabel';
import formatZodError from '../helpers/formatZodError';
import LogInButton from './LogInButton';
import { clsx } from 'clsx';
import FormInput from './FormInput';
import ErrorMessage from './ErrorMessage';
import logInUser from '../api/logInUser';

type ErrorType = { type: string; message: string };

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<ErrorType>({ type: '', message: '' });

  // this returns boolean, and log in button can accept it as disabled prop value in order to prevent user to submit credentials before passing the validation
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

      const { status, error } = await logInUser(
        tryUser.email,
        tryUser.password
      );

      if (status !== 'ok') {
        setError({ type: 'server', message: error.message });
        return;
      }
    } catch (error) {
      if (error instanceof ZodError) {
        const formatedError = formatZodError(error);

        if (formatedError.includes('email'))
          setError({ type: 'email', message: formatedError });
        else {
          setError({ type: 'password', message: formatedError });
        }
      } else {
        setError({
          type: 'server',
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
            <FormInput
              id='Email'
              placeholder='Enter your email here...'
              errorType={error.type == 'email' ? error.type : null}
              value={email}
              setter={setEmail}
            />
            {error.type == 'email' && (
              <ErrorMessage type={error.type} message={error.message} />
            )}
          </div>
          <div>
            <FormLabel forProp='Password' />
            <FormInput
              id='Password'
              placeholder='Enter your password here...'
              errorType={error.type == 'password' ? error.type : null}
              value={password}
              setter={setPassword}
            />
            {error.type == 'password' && (
              <ErrorMessage type={error.type} message={error.message} />
            )}
          </div>
          {error.type == 'server' && (
            <ErrorMessage type={error.type} message={error.message} />
          )}
          <div className='text-center'>
            <LogInButton />
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
