import { usePost } from './PostContext';
import UserInfo from '../../ui/UserInfo';
import PostDate from '../../ui/PostDate';
import LikeButton from '../../ui/LikeButton';
import CommentButton from '../../ui/CommentButton';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { memo } from 'react';

const SinglePost = memo(() => {
  const {
    audio,
    image,
    text,
    created_at,
    user: { username, full_name, picture },
  } = usePost();

  return (
    <article className='bg-figmaGray py-4 px-6 rounded-lg'>
      <div className='flex justify-between items-center mb-3'>
        <UserInfo username={username} full_name={full_name} picture={picture} />
        <PostDate created_at={created_at} />
      </div>
      {image && (
        <figure className='flex mb-3 max-h-[360px]'>
          <img
            src={image}
            alt={`${full_name}'s post image`}
            className='rounded-lg mx-auto object-cover'
          />
        </figure>
      )}
      <p className='text-[15px] leading-[1.45rem] text-figmaBlack mb-3'>
        {text}
      </p>

      {audio && <AudioPlayer audioSrc={audio} />}

      <div className='flex gap-2'>
        <LikeButton />
        <CommentButton type='modal' />
      </div>
    </article>
  );
});

export default SinglePost;
