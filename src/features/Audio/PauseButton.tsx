import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStop } from '@fortawesome/free-solid-svg-icons';

type PauseButtonProps = {
  handleStopState: () => void;
};

const PauseButton = ({ handleStopState }: PauseButtonProps) => {
  const classBase =
    'h-10 w-10 rounded-full flex items-center justify-center text-white transition-all duration-200';

  return (
    <button
      className={`${classBase} bg-figmaRed hover:bg-figmaRedShade col-start-1`}
      type='button'
      onClick={handleStopState}
      aria-label='Pause'
    >
      <FontAwesomeIcon icon={faStop} className='text-xl' />
    </button>
  );
};

export default PauseButton;
