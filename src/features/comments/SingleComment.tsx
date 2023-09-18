import UserInfo from '../../ui/UserInfo';
import PostDate from '../../ui/PostDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import deleteComment from '../../api/deleteComment';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { removeComment } from './commentsSlice';
import { useGetUserData } from '../../hooks/useGetUserData';
import { memo } from 'react';

interface UserInfoProps {
  comment_id: string;
  username: string;
  full_name: string;
  picture: string;
  created_at: string;
  text: string;
  post_id: string;
}

const SingleComment = memo(
  ({
    comment_id,
    username,
    full_name,
    picture,
    created_at,
    text,
    post_id,
  }: UserInfoProps) => {
    const dispatch = useAppDispatch();
    const { username: currentUserUsername } = useGetUserData();

    const deleteCommentHandler = async (postId: string, commentId: string) => {
      await deleteComment(postId, commentId);
      dispatch(removeComment(commentId));
    };

    return (
      <article className='w-full border-b border-figmaGrayShade smb:relative'>
        <div className='flex justify-between items-center'>
          <UserInfo
            username={username}
            full_name={full_name}
            picture={picture}
            imgClassname='h-9 w-9'
            usernameClassname='text-xs'
            fullNameClassname='text-sm'
          />
          <div className='flex items-center gap-3 smb:flex-col smb:gap-0 smb:items-end'>
            <PostDate created_at={created_at} />

            {/* if post belongs to the current user allow delete */}
            {username === currentUserUsername && (
              <button
                className='flex items-center gap-1 text-sm text-figmaRed capitalize   md:self-start'
                onClick={() => {
                  deleteCommentHandler(post_id, comment_id);
                }}
              >
                <FontAwesomeIcon icon={faTrashCan} />
                <span>delete</span>
              </button>
            )}
          </div>
        </div>
        <p className='text-sm text-figmaBlack pt-2 pb-1'>{text}</p>
      </article>
    );
  }
);

export default SingleComment;
