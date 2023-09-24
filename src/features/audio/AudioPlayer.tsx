import { useState, useEffect, useRef } from 'react';
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
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (audio.ended) {
        setPlaying(false);
        setTrackProgress(0);
        cancelAnimationFrame(animationFrameRef.current as number);
      } else {
        setTrackProgress(audio.currentTime);
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    const startPlayback = () => {
      try {
        audio.play();
        setPlaying(true);
        animationFrameRef.current = requestAnimationFrame(animate);
      } catch (error) {
        console.error('Error playing audio:', error);
        setPlaying(false);
      }
    };

    if (playing) {
      startPlayback();
    } else {
      audio.pause();
      setPlaying(false);
      cancelAnimationFrame(animationFrameRef.current as number);
    }

    // Cleanup function
    return () => {
      audio.pause();
      cancelAnimationFrame(animationFrameRef.current as number);
    };
  }, [playing, audio]);

  return (
    <div className='col-span-3 col-start-1 row-start-1 px-4 py-6 mb-3 overflow-hidden rounded-lg bg-figmaGrayPlayer'>
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
        <div className='flex items-center gap-1 pl-5 text-figmaGrayShade'>
          <span>
            {audio.currentTime ? formatTime(audio.currentTime) : '00:00'}{' '}
          </span>
          <span>/</span>
          <span>
            <span>
              {isNaN(audio.duration) || !isFinite(audio.duration)
                ? '00.00'
                : formatTime(audio.duration)}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
