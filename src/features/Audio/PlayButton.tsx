import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

type PlayButtonPropsType = {
  handleStartPlaying: () => void;
};

const classBase =
  'h-9 w-10 rounded-full flex items-center justify-center text-white transition-all duration-200';

const PlayButton = ({ handleStartPlaying }: PlayButtonPropsType) => {
  return (
    <button
      className={`${classBase} bg-figmaBlue hover:bg-figmaBlue col-start-1`}
      aria-label='Play'
      onClick={handleStartPlaying}
    >
      <FontAwesomeIcon icon={faPlay} />
    </button>
  );
};

export default PlayButton;
