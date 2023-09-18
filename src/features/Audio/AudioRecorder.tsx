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

  const startRecording = async () => {
    setIsRecording(true);
    setIsRecordButtonVisible(false);
    console.log('recording');
    const media = new MediaRecorder(
      stream as MediaStream,
      { type: mimeType } as MediaRecorderOptions
    );

    mediaRecorder.current = media;
    mediaRecorder.current.start();

    let localAudioChunks: Blob[] | [] = [];

    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === 'undefined') return;
      if (event.data.size === 0) return;
      (localAudioChunks as Blob[]).push(event.data);
    };

    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (!mediaRecorder.current) return;

    console.log('stopping');

    mediaRecorder.current.stop();

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
