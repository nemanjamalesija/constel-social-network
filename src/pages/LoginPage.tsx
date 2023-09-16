import { loginValidator } from '../features/login/InputValidation';
import { useEffect, useState } from 'react';
import { ZodError } from 'zod';
import Logo from '../ui/logo';
import FormLabel from '../features/login/FormLabel';
import formatZodError from '../helpers/formatZodError';
import ActionButton from '../ui/ActionButton';
import FormInput from '../features/login/FormInput';
import ErrorMessage from '../features/login/ErrorMessage';
import logInUser from '../api/logInUser';
import { useNavigate } from 'react-router';

type ErrorType = { type: string; message: string };

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<ErrorType>({ type: '', message: '' });
  const navigate = useNavigate();

  // this line returns boollean and controls the disabled prop on the log in button (<ActionButton />). Remove the disabled prop to see input error handling

  const allFieldsCompleted = loginValidator.safeParse({
    email,
    password,
  }).success;

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) navigate('/home');
  }, [navigate]);

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
    } finally {
      setTimeout(() => {
        setError({ type: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section id='login' className='relative'>
      <div className='max-w-sm absolute left-1/2 -translate-x-1/2 translate-y-[30%] '>
        <div className='flex items-center'>
          <Logo width='386' height='94' viewBox='0 0 36 36' />
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
              type='email'
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
              type='password'
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
            <ActionButton className='mt-6' disabled={!allFieldsCompleted}>
              Log in
            </ActionButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
