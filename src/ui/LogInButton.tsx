const LogInButton = ({ disabled }: { disabled: boolean }) => {
  return (
    <button
      className='mt-6 py-2.5 px-12 bg-blue-500 text-sm lg:text-base text-white hover:bg-blue-600 disabled:bg-gray-400 rounded-lg transition-all duration-300'
      type='submit'
      disabled={disabled}
    >
      Confirm
    </button>
  );
};

export default LogInButton;
