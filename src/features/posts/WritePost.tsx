import createPost from '../../api/createPost';
import { useGetUserData } from '../../hooks/useGetUserData';
import ActionButton from '../../ui/ActionButton';
import UserImage from '../../ui/UserImage';
import RecordAudio from '../AudioPlayer/RecordAudio';
import { useState } from 'react';

const WritePost = () => {
  const { full_name, picture } = useGetUserData();
  const [postText, setPostText] = useState('');

  const submitHandler = async (text: string) => {
    if (!text.trim()) return alert('post text cannot be empty');

    const formData = new FormData();
    formData.append('text', postText);
    await createPost(formData);
  };

  return (
    <section className='bg-figmaGray py-4 px-6 rounded-lg'>
      <div className='flex gap-5'>
        <UserImage src={picture} alt={full_name} imgClassname='h-14 w-14' />
        <form
          className='w-full'
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
