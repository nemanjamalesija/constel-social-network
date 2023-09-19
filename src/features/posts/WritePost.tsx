import createPost from '../../api/createPost';
import { useGetUserData } from '../../hooks/useGetUserData';
import ActionButton from '../../ui/ActionButton';
import UserImage from '../../ui/UserImage';
import AudioRecorder from '../audio/AudioRecorder';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addNewPost } from './postsSlice';
import toast from 'react-hot-toast';

const WritePost = () => {
  const { full_name, picture } = useGetUserData();
  const dispatch = useAppDispatch();
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [postText, setPostText] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isRecordButtonVisible, setIsRecordButtonVisible] =
    useState<boolean>(true);
  const [audioSrc, setAudioSrc] = useState<string>('');

  const submitHandler = async (text: string) => {
    if (!text.trim()) return toast.error('Post text cannot be empty!');

    const formData = new FormData();

    // audio file comming from the recorder
    audioFile && formData.append('audio', audioFile);

    formData.append('text', postText);
    setPostText('');

    const post = await createPost(formData);

    post && dispatch(addNewPost(post));
  };

  return (
    <div className='py-4 px-6 md:bg-figmaGray smb:bg-#fff rounded-lg relative'>
      <form
        className='w-full '
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(postText);
        }}
      >
        <div className='smb:flex smb:items-center smb:gap-4 smb:mb-3 md:grid grid-cols-[72px,1fr] md:mb-3'>
          <UserImage src={picture} alt={full_name} imgClassname='h-14 w-14' />
          <input
            type='text'
            className='input-comment py-2 w-full border-b border-figmaGrayShade  placeholder:text-figmaGrayShade md:bg-figmaGray smb:bg-#fff outline-none focus:border-figmaBlue transition-all duration-200 relative z-40'
            placeholder="What's happening"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <div className='md:grid md:grid-cols-[50px,1fr,160px] '>
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
                ? 'flex items-center smb:mb-3 smb:text-figmaRed smb:hover:text-figmaRedShade smb:text-base smb:font-medium smb:justify-center smb:w-full md:justify-end md:col-start-2 md:mr-4 transition-all duration-200 cursor-pointer '
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
              className='h-6 w-6 text-figmaRed hover:text-figmaRedShade smb:hidden'
            />
            <span className='text-base w-full flex items-center justify-center md:hidden'>
              Delete audio
            </span>
          </button>
          <div
            className={`${
              isRecording
                ? 'row-start-2 col-start-3 flex justify-end'
                : 'w-full md:col-start-3 smb:block md:flex md:justify-end'
            }`}
          >
            <ActionButton screen='small' disabled={!postText.trim()} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default WritePost;
