import UserInfo from '../../ui/UserInfo';
import { useGetUserData } from '../../hooks/useGetUserData';
import ActionButton from '../../ui/ActionButton';
import UserImage from '../../ui/UserImage';
import RecordAudio from '../AudioPlayer/RecordAudio';

const WritePost = () => {
  const { full_name, picture } = useGetUserData();

  return (
    <div className='bg-figmaGray py-4 px-6 rounded-lg'>
      <div className='flex gap-4 items-center mb-4'>
        <UserImage
          picture={picture}
          full_name={full_name}
          imgClassname='h-12 w-12'
        />
        <input
          type='text'
          className='input-comment py-2 w-full border-b border-figmaGrayShade  placeholder:text-figmaGrayShade bg-figmaGray outline-none focus:border-figmaBlue'
          placeholder="What's happening"
        />
      </div>
      <div className='flex items-center justify-between '>
        <RecordAudio />
        <ActionButton>Confirm</ActionButton>
      </div>
    </div>
  );
};

export default WritePost;
