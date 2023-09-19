type ActionButtonProps = {
  disabled?: boolean;
  className?: string;
  screen?: string;
};

const ActionButton = ({ disabled, className, screen }: ActionButtonProps) => {
  return (
    <button
      className={`smb:w-full sma:py-3 sma:px-[3.2rem] smb:px-[4.6rem] smb:py-3 sm:py-1 md:py-3  md:w-full sm:text-base bg-figmaBlue md:text-base text-white hover:bg-figmaBlueShade disabled:bg-figmaGrayShade disabled:hover:bg-figmaGrayShade2 rounded-lg transition-all duration-300 cursor-pointer font-medium ${className}`}
      type='submit'
      disabled={disabled}
    >
      {screen ? 'New Post' : 'Confirm'}
    </button>
  );
};

export default ActionButton;
