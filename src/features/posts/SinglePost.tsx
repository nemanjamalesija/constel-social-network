import { usePost } from './PostContext';
import UserInfo from './UserInfo';
import PostDate from './PostDate';
import LikeButton from '../../ui/LikeButton';
import CommentButton from '../../ui/CommentButton';

const SinglePost = () => {
  const { image, text, user } = usePost();

  return (
    <article className='bg-figmaGray py-4 px-6 rounded-lg'>
      <div className='flex justify-between items-center mb-3'>
        <UserInfo />
        <PostDate />
      </div>
      {image && (
        <figure className='flex mb-3 max-h-[360px]'>
          <img
            src={image}
            alt={`${user.full_name}'s post image`}
            className='rounded-lg mx-auto object-cover'
          />
        </figure>
      )}
      <p className='text-[15px] text-figmaBlack mb-3'>{text}</p>
      <div className='flex gap-2'>
        <LikeButton />
        <CommentButton type='modal' />
      </div>
    </article>
  );
};

export default SinglePost;
