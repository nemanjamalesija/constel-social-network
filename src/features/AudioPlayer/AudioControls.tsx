import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';

const AudioControls = ({
  playing,
  setIsPlaying,
}: {
  playing: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const classBase =
    'h-10 w-10 rounded-full flex items-center justify-center text-white transition-all duration-200';

  return (
    <div>
      {playing ? (
        <button
          className={`${classBase} bg-figmaRed hover:bg-figmaRedShade`}
          type='button'
          onClick={() => setIsPlaying(false)}
          aria-label='Pause'
        >
          <FontAwesomeIcon icon={faPause} className='text-xl' />
        </button>
      ) : (
        <button
          type='button'
          className={`${classBase} bg-figmaBlue hover:bg-figmaBlueShade`}
          onClick={() => setIsPlaying(true)}
          aria-label='Play'
        >
          <FontAwesomeIcon icon={faPlay} className='text-xl' />
        </button>
      )}
    </div>
  );
};

export default AudioControls;
