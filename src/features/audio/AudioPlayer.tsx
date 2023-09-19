import { useState, useEffect } from 'react';
import AudioControls from './AudioControls';
import formatTime from '../../helpers/formatTime';

type AudioPlayerPropsType = {
  audioSrc: string;
  recording?: boolean;
  handleStartRecording?: () => void;
  handleStopRecording?: () => void;
};

const AudioPlayer = ({
  audioSrc,
  recording,
  handleStopRecording,
}: AudioPlayerPropsType) => {
  const [audio] = useState(new Audio(audioSrc));
  const [playing, setPlaying] = useState<boolean>(false);
  const [trackProgress, setTrackProgress] = useState<number>(0);

  useEffect(() => {
    let interval: any;

    if (playing) {
      audio.play();
      interval = startTimer();
    } else {
      clearInterval(interval); // Clear the interval when not playing
      audio.pause();
    }

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  const startTimer = () => {
    const interval = setInterval(() => {
      if (audio.ended) {
        clearInterval(interval); // Clear the interval when audio ends
        setTrackProgress(0);
      } else {
        setTrackProgress(audio.currentTime);
      }
    }, 1000);
  };

  return (
    <div className='py-6 px-4 bg-figmaGrayPlayer rounded-lg mb-3 overflow-hidden col-start-1 col-span-3 row-start-1'>
      <audio src={audioSrc}></audio>

      <div className='flex items-center h-full'>
        <AudioControls
          playing={playing}
          setIsPlaying={setPlaying}
          recording={recording}
          handleStopRecording={handleStopRecording}
        />
        {/* if recording render straight line */}
        {recording ? (
          <hr className='w-full h-[2px] bg-figmaGrayShade'></hr>
        ) : (
          // else render input showing audio data
          <input
            type='range'
            value={trackProgress}
            readOnly
            step='0.01'
            min='0'
            max={isNaN(audio.duration) ? '0.00' : audio.duration}
            className='w-full h-[2px] bg-figmaGrayShade rounded-lg appearance-none custom-range-input"'
          />
        )}
        {/* audio duration and time left */}
        <div className='flex items-center gap-1 text-figmaGrayShade pl-5'>
          <span>{formatTime(audio.currentTime)}</span>
          <span>/</span>
          <span>
            <span>
              {isNaN(audio.duration) || !isFinite(audio.duration)
                ? '0.00'
                : formatTime(audio.duration)}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
