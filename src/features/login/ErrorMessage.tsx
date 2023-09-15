type ErrorType = {
  type: string;
  message: string;
};

const ErrorMessage = ({ type, message }: ErrorType) => {
  const returnElInput =
    type == 'email' || type == 'password' ? (
      <p className='text-sm text-red-500 mt-1'>{message}</p>
    ) : null;

  const returnElServer =
    type == 'server' ? (
      <div className='py-2 text-center bg-red-500 rounded-lg mt-2'>
        <p className='text-white text-sm'>{message}</p>
      </div>
    ) : null;

  return returnElInput || returnElServer;
};

export default ErrorMessage;