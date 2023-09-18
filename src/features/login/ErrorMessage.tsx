type ErrorMessagePropsType = {
  type: string;
  message: string;
};

const ErrorMessage = ({ type, message }: ErrorMessagePropsType) => {
  const returnElInput =
    type == 'email' || type == 'password' ? (
      <p className='text-sm text-figmaRed mt-1'>{message}</p>
    ) : null;

  const returnElServer =
    type == 'server' ? (
      <div className='py-2 text-center bg-figmaRed rounded-lg mt-2'>
        <p className='text-white text-sm'>{message}</p>
      </div>
    ) : null;

  return returnElInput || returnElServer;
};

export default ErrorMessage;
