import createPost from '../../api/createPost';
import { useGetUserData } from '../../hooks/useGetUserData';
import ActionButton from '../../ui/ActionButton';
import UserImage from '../../ui/UserImage';
import AudioRecorder from '../Audio/AudioRecorder';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addNewPost } from './postsSlice';

const WritePost = () => {
  const { full_name, picture } = useGetUserData();
  const dispatch = useAppDispatch();
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [postText, setPostText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isRecordButtonVisible, setIsRecordButtonVisible] = useState(true);
  const [audioSrc, setAudioSrc] = useState<string>('');

  const submitHandler = async (text: string) => {
    if (!text.trim()) return alert('post text cannot be empty');

    const formData = new FormData();

    if (audioFile) formData.append('audio', audioFile);

    formData.append('text', postText);
    setPostText('');

    const post = await createPost(formData);
    dispatch(addNewPost(post));
  };

  return (
    <section className='py-4 px-6 bg-figmaGray 6 rounded-lg'>
      <div className='grid grid-cols-[80px,1fr]'>
        <UserImage src={picture} alt={full_name} imgClassname='h-14 w-14 ' />
        <form
          className='w-full '
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler(postText);
          }}
        >
          <input
            type='text'
            className='input-comment py-2 w-full border-b border-figmaGrayShade  placeholder:text-figmaGrayShade bg-figmaGray outline-none focus:border-figmaBlue transition-all duration-200 mb-4'
            placeholder="What's happening"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
          <div className='grid grid-cols-[50px,1fr,160px]'>
            <AudioRecorder
              setAudioFile={setAudioFile}
              audioSrc={audioSrc}
              setAudioSrc={setAudioSrc}
              setIsRecording={setIsRecording}
              isRecording={isRecording}
              isRecordButtonVisible={isRecordButtonVisible}
              setIsRecordButtonVisible={setIsRecordButtonVisible}
            />

            {/* // delete and submit button 
            move around conditinally depending on recording status */}
            <button
              type='button'
              className={`${
                audioFile
                  ? 'mr-4 transition-all duration-200 flex items-center col-start-2 justify-end '
                  : 'hidden'
              }`}
              onClick={() => {
                setAudioFile(null);
                setAudioSrc('');
                setIsRecordButtonVisible(true);
              }}
            >
              <FontAwesomeIcon
                icon={faTrashCan}
                className='h-6 w-6 text-figmaRed hover:text-figmaRedShade'
              />
            </button>
            <div
              className={`${
                isRecording
                  ? 'row-start-2 col-start-3 flex justify-end'
                  : 'col-start-3 flex justify-end'
              }`}
            >
              <ActionButton>Confirm</ActionButton>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default WritePost;
