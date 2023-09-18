import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

type RecorderControlsType = {
  recording: boolean;
  handleStopRecording: () => void;
  handleStartRecording: () => void;
  handleRestartRecording: () => void;
  isRecordButtonVisible: boolean;
};

const RecorderControls = ({
  recording,
  handleStartRecording,
  isRecordButtonVisible,
}: RecorderControlsType) => {
  return (
    !recording &&
    isRecordButtonVisible && (
      <button
        type='button'
        onClick={handleStartRecording}
        aria-label='Play'
        className='sma:py-3 sm:py-1 sm:text-base sma:px-[3.2rem] smb:w-full smb:py-3  smb:bg-figmaBlue smb:hover:bg-figmaBlueShade smb:rounded-lg smb:mb-2 smb:px-3  smb:justify-start smb:items-center md:py-3 md:flex-col md:items-start md:self-center smb:relative smb:md:w-full smb:z-50 md:col-start-1 md:col-span 1 md:ml-16 flex transition-all duration-200 '
      >
        <FontAwesomeIcon
          icon={faMicrophone}
          className='text-figmaBlue hover:text-figmaBlueShade h-7 w-7 smb:text-white smb:hover:text-figmaGray sm:self-start smb:absolute'
        />
        <span className='md:hidden text-white flex-1'>Record audio</span>
      </button>
    )
  );
};

export default RecorderControls;
