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
    <div className='flex flex-col items-start  self-center'>
      {!recording && isRecordButtonVisible && (
        <button type='button' onClick={handleStartRecording} aria-label='Play'>
          <FontAwesomeIcon
            icon={faMicrophone}
            className='text-figmaBlue hover:text-figmaBlueShade h-7 w-7'
          />
        </button>
      )}
    </div>
  );
};

export default RecorderControls;
