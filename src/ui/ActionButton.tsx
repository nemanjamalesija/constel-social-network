import { ReactNode } from 'react';

type ActionButtonProps = {
  disabled?: boolean;
  className?: string;
  children: ReactNode;
};

// I've set disabled as optional undefined to avoid throwing an
// error if you decide to disable it in the parent
const ActionButton = ({ disabled, className, children }: ActionButtonProps) => {
  return (
    <button
      className={`py-2.5 px-12 bg-figmaBlue text-sm lg:text-base text-white hover:bg-figmaBlueShade disabled:bg-figmaGrayShade disabled:hover:bg-figmaGrayShade2 rounded-lg transition-all duration-300 cursor-pointer font-medium ${className}`}
      type='submit'
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ActionButton;
