import UserInfo from '../../ui/UserInfo';
import { useGetUserData } from '../../hooks/useGetUserData';
import ActionButton from '../../ui/ActionButton';
import UserImage from '../../ui/UserImage';
import RecordAudio from '../AudioPlayer/RecordAudio';

//  </div>;

const WritePost = () => {
  const { full_name, picture } = useGetUserData();

  return (
    <section className='bg-figmaGray py-4 px-6 rounded-lg'>
      <div className='flex gap-5'>
        <UserImage
          picture={picture}
          full_name={full_name}
          imgClassname='h-14 w-14'
        />
        <form action='' className='w-full'>
          <input
            type='text'
            className='input-comment py-2 w-full border-b border-figmaGrayShade  placeholder:text-figmaGrayShade bg-figmaGray outline-none focus:border-figmaBlue  mb-4'
            placeholder="What's happening"
          />

          <div className='flex items-center justify-between '>
            <RecordAudio />
            <ActionButton>Confirm</ActionButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default WritePost;
