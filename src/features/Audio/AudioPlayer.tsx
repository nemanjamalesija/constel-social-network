import { useState, useEffect } from 'react';
import AudioControls from './AudioControls';

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
  const [playing, setPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

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

  function formatTime(time: number) {
    let minutes: any = Math.round(time / 60);
    let secs: any = Math.round(time % 60);

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (secs < 10) {
      secs = '0' + secs;
    }

    return minutes + ':' + secs;
  }

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
        <input
          type='range'
          value={trackProgress}
          readOnly
          step='0.01'
          min='0'
          max={isNaN(audio.duration) ? '0.00' : audio.duration}
          className='w-full h-[2px] bg-figmaGrayShade rounded-lg appearance-none cursor-pointer custom-range-input"'
        />

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
