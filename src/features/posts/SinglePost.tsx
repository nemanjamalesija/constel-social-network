import { Post } from '../../types/postType';
import PostHeader from './PostHeader';
import LikeOrCommentButton from '../../ui/LikeOrCommentButton';

type SinglePostProps = Post;

const SinglePost = (props: SinglePostProps) => {
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
  } = props;

  return (
    <article className='bg-figmaGray py-4 px-6 rounded-lg'>
      <PostHeader
        picture={user.picture}
        full_name={user.full_name}
        username={user.username}
        created_at={created_at}
      />
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
        <LikeOrCommentButton type='likes' likes={likes} liked={liked} />
        <LikeOrCommentButton type='comments' comments={comments} />
      </div>
    </article>
  );
};

export default SinglePost;
