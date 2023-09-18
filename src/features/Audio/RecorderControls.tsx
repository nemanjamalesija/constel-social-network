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
        className='smb:w-full smb:bg-figmaBlue smb:rounded-lg smb:mb-2 smb:px-3 smb:py-2 sm:py-1 flex flex-col items-start self-center smb:relative smb:z-50'
      >
        <FontAwesomeIcon
          icon={faMicrophone}
          className='text-figmaBlue hover:text-figmaBlueShade h-7 w-7 smb:text-white smb:hover:text-figmaGray'
        />
      </button>
    )
  );
};

export default RecorderControls;
