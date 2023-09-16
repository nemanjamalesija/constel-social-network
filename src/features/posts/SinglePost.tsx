import { Post } from '../../types/postType';
import PostHeader from './PostHeader';
import LikeOrCommentButton from '../../ui/LikeOrCommentButton';
import { useContext } from 'react';
import { usePost } from './PostContext';

const SinglePost = () => {
  const postProps = usePost();
  const {
    audio,
    comments,
    created_at,
    image,
    liked,
    likes,
    post_id,
    text,
    user,
    user_id,
  } = postProps;

  console.log(liked + 'from single post ');

  return (
    <article className='bg-figmaGray py-4 px-6 rounded-lg'>
      <PostHeader />
      {image && (
        <figure className='flex mb-3'>
          <img
            src={image}
            alt={`${user.full_name}'s post image`}
            className='rounded-lg mx-auto'
          />
        </figure>
      )}
      <p className='text-[15px] text-figmaBlack mb-3'>{text}</p>
      <div className='flex gap-2'>
        <LikeOrCommentButton type='likes' likes={likes} />
        <LikeOrCommentButton type='comments' />
      </div>
    </article>
  );
};

export default SinglePost;
