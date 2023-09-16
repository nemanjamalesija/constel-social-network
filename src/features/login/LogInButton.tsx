const LogInButton = ({ disabled }: { disabled: boolean }) => {
  return (
    <button
      className='mt-6 py-2.5 px-12 bg-figmaBlue text-sm lg:text-base text-white hover:bg-figmaBlueShade disabled:bg-figmaGrayShade disabled:hover:bg-figmaGrayShade2 rounded-lg transition-all duration-300 cursor-pointer'
      type='submit'
      disabled={disabled}
    >
      Confirm
    </button>
  );
};

export default LogInButton;
