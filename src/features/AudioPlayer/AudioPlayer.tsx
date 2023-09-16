import { useState, useEffect, useRef } from 'react';
import AudioControls from './AudioControls';

const AudioPlayer = ({ audioSrc }: { audioSrc: any }) => {
  const [audio] = useState(new Audio(audioSrc));
  const [playing, setPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

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

  const onScrub = (value: any) => {
    audio.currentTime = value;
    setTrackProgress(audio.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  return (
    <div className='p-6 bg-figmaGrayPlayer rounded-lg mb-3 overflow-hidden'>
      <audio src={audioSrc}></audio>

      <div className='flex items-center gap-4 h-full '>
        <AudioControls playing={playing} setIsPlaying={setPlaying} />
        <input
          type='range'
          value={trackProgress}
          step='0.01'
          min='0'
          max={isNaN(audio.duration) ? '0.00' : audio.duration}
          onChange={(e) => onScrub(e.target.value)}
          className='w-full h-[2px] bg-figmaGrayShade rounded-lg appearance-none cursor-pointer custom-range-input"'
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
        />
        <div className='flex items-center gap-1 text-figmaGrayShade'>
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
