import React from 'react';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';

type AudioControlsType = {
  playing: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  recording?: boolean;
  handleStopRecording?: () => void;
};

const AudioControls = ({
  playing,
  setIsPlaying,
  recording,
  handleStopRecording,
}: AudioControlsType) => {
  const stopPlayingHandler = () => {
    setIsPlaying(false);
  };

  const startPlayingHandler = () => {
    setIsPlaying(true);
  };

  return (
    <div className='rounded-lg overflow-hidden pr-7'>
      <div className='col-start-1'>
        {!playing && !recording && (
          <PlayButton handleStartPlaying={startPlayingHandler} />
        )}
        {playing && <PauseButton handleStopState={stopPlayingHandler} />}
        {recording && (
          <PauseButton handleStopState={handleStopRecording as () => void} />
        )}
      </div>
    </div>
  );
};

export default AudioControls;
