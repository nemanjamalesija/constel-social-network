import { usePost } from './PostContext';
import UserInfo from '../../ui/UserInfo';
import PostDate from '../../ui/PostDate';
import LikeButton from '../post/LikeButton';
import CommentButton from '../post/CommentButton';
import AudioPlayer from '../Audio/AudioPlayer';
import { memo } from 'react';
import PostImage from '../../ui/PostImage';

const SinglePost = memo(() => {
  const {
    audio,
    image,
    text,
    created_at,
    user: { username, full_name, picture },
  } = usePost();

  return (
    <article className='py-4 px-6 rounded-lg md:bg-figmaGray smb:bg-#fff'>
      <div className='flex justify-between items-center mb-3'>
        <UserInfo username={username} full_name={full_name} picture={picture} />
        <PostDate created_at={created_at} />
      </div>

      {image && (
        <PostImage src={image} alt={full_name} containerSize='max-h-[360px]' />
      )}

      <p className='sma:text-[0.88rem]  md:text-[0.95rem] md:leading-[1.45rem] text-figmaBlack mb-3'>
        {text}
      </p>

      {audio && <AudioPlayer audioSrc={audio} />}

      <div className='flex gap-2 justify-between sm:justify-start'>
        <LikeButton />
        <CommentButton type='modal' />
      </div>
    </article>
  );
});

export default SinglePost;
