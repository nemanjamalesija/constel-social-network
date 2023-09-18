import { useState, useRef, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';
import RecorderControls from './RecorderControls';

const mimeType = 'audio/webm';

type AudioRecorderPropsType = {
  setAudioFile: React.Dispatch<React.SetStateAction<File | null>>;
  setIsRecording: React.Dispatch<React.SetStateAction<boolean>>;
  isRecording: boolean;
  isRecordButtonVisible: boolean;
  setIsRecordButtonVisible: React.Dispatch<React.SetStateAction<boolean>>;
  audioSrc: string;
  setAudioSrc: React.Dispatch<React.SetStateAction<string>>;
};

const AudioRecorder = ({
  setAudioFile,
  setIsRecording,
  isRecording,
  audioSrc,
  setAudioSrc,
  isRecordButtonVisible,
  setIsRecordButtonVisible,
}: AudioRecorderPropsType) => {
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef<MediaRecorder>();
  const [stream, setStream] = useState<MediaStream>();
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyzerRef = useRef<AnalyserNode>(null);
  const animationRef = useRef<number>(null); // Create a ref to store the request ID

  // Audio context in order to display audio visualization
  const audioContext = new AudioContext();
  const windowWidth = window.innerWidth;

  useEffect(() => {
    (async () => {
      if ('MediaRecorder' in window) {
        try {
          const mediaStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false,
          });
          setPermission(true);

          setStream(mediaStream);
        } catch (error) {
          console.log(error);
        }
      } else {
        alert('The MediaRecorder API is not supported in your browser.');
        return;
      }
    })();
  }, []);

  // Function to draw the audio waveform on the canvas
  const visualizeData = () => {
    // Create a Uint8Array to hold the audio data
    const analyzerNode = analyzerRef.current as AnalyserNode;
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    analyzerNode.fftSize = 2048;
    const bufferLength = analyzerNode.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyzerNode.getByteFrequencyData(dataArray);

    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    // Clear the canvas before drawing the bars in each frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const barSpacing = 12;
    const barWidth = 5; // Adjust the width of each bar

    console.log(canvas.width);
    console.log(window.innerWidth);

    animationRef.current = window.requestAnimationFrame(visualizeData);

    for (let i = 0; i < canvas.width; i++) {
      const x = i * barSpacing;

      // Create a gradient for the whole canvas
      let gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0.2, '#005BCA');

      ctx.fillStyle = gradient;
      ctx.fillRect(x, canvas.height, barWidth, -dataArray[i]);
    }
  };

  const startRecording = async () => {
    setIsRecording(true);
    setIsRecordButtonVisible(false);
    console.log('recording');
    const media = new MediaRecorder(
      stream as MediaStream,
      { type: mimeType } as MediaRecorderOptions
    );

    const sourceNode = audioContext.createMediaStreamSource(
      stream as MediaStream
    );

    // audio processing
    // add an analyzer node to visualize audio data
    analyzerRef.current = audioContext.createAnalyser();
    sourceNode.connect(analyzerRef.current);

    mediaRecorder.current = media;
    mediaRecorder.current.start();

    let localAudioChunks: Blob[] | [] = [];

    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === 'undefined') return;
      if (event.data.size === 0) return;
      (localAudioChunks as Blob[]).push(event.data);
    };

    setAudioChunks(localAudioChunks);
    visualizeData(); // Start visualizing voice data
  };

  const stopRecording = async () => {
    setIsRecording(false);

    if (!mediaRecorder.current) return;

    console.log('stopping');

    mediaRecorder.current.stop();

    // Close the AudioContext
    if (audioContext.state != 'closed') {
      await audioContext.close();
    }

    // Cancel the animation frame using the stored request ID
    if (animationRef.current) {
      window.cancelAnimationFrame(animationRef.current);
    }

    // Clear the canvas
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      const audioUrl = URL.createObjectURL(audioBlob);

      let file = new File([audioBlob], mimeType, {
        type: mimeType,
        lastModified: new Date().getTime(),
      });

      setAudioSrc(audioUrl);
      setAudioFile(file);
      setAudioChunks([]);
      setIsRecordButtonVisible(false);
    };
  };

  const restartRecordingHandler = () => {
    setIsRecordButtonVisible(true);
    setAudioFile(null);
    startRecording();
  };

  if (!permission) return null;

  return (
    <>
      <canvas
        id='visualizer'
        className='py-3 absolute top-1/2 left-[53%] transform -translate-x-1/2 -translate-y-1/2 z-50  h-[36%] w-[55%]'
        ref={canvasRef}
      ></canvas>
      <RecorderControls
        recording={isRecording}
        handleStartRecording={startRecording}
        handleStopRecording={stopRecording}
        isRecordButtonVisible={isRecordButtonVisible}
        handleRestartRecording={restartRecordingHandler}
      />
      {audioSrc && <AudioPlayer audioSrc={audioSrc} />}

      {isRecording && (
        <AudioPlayer
          audioSrc={audioSrc}
          recording={isRecording}
          handleStartRecording={startRecording}
          handleStopRecording={stopRecording}
        />
      )}
    </>
  );
};

export default AudioRecorder;
