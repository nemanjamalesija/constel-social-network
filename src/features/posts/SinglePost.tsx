import { usePost } from './PostContext';
import UserInfo from '../../ui/UserInfo';
import PostDate from '../../ui/PostDate';
import LikeButton from '../post/LikeButton';
import CommentButton from '../post/CommentButton';
import AudioPlayer from '../audio/AudioPlayer';
import PostImage from '../../ui/PostImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useGetUserData } from '../../hooks/useGetUserData';
import { memo } from 'react';
import deletePost from '../../api/deletePost';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { removePost } from './postsSlice';
import toast from 'react-hot-toast';

const SinglePost = memo(() => {
  const {
    post_id,
    audio,
    image,
    text,
    created_at,
    user: { username, full_name, picture },
  } = usePost();
  const { username: currentUserUsername } = useGetUserData();
  const dispatch = useAppDispatch();

  const deletePostHandler = async () => {
    const status = await deletePost(post_id);

    status == 200 &&
      dispatch(removePost(post_id)) &&
      toast.success('Post succesfully deleted.');
  };

  return (
    <article className='py-4 px-6 rounded-lg md:bg-figmaGray smb:bg-#fff'>
      <div className='flex justify-between items-center mb-3 '>
        <UserInfo username={username} full_name={full_name} picture={picture} />

        <div className='flex items-center gap-3 smb:flex-col smb:gap-0'>
          <PostDate created_at={created_at} />
          {/* if post belongs to the current user allow delete */}
          {username === currentUserUsername && (
            <button
              className='flex items-center gap-1 text-sm text-figmaRed capitalize  md:self-start smb:self-end'
              onClick={deletePostHandler}
            >
              <FontAwesomeIcon icon={faTrashCan} />
              <span>delete</span>
            </button>
          )}
        </div>
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
