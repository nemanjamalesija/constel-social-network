import { useState } from 'react';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import createComment from '../../api/createComment';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addNewComment } from './commentsSlice';
import { useGetUserData } from '../../hooks/useGetUserData';

// type CommentType = {
//   comment_id: string;
//   created_at: string;
//   full_name: string;
//   picture: string;
//   text: string;
//   username: string;
// };

const WriteComment = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [commentText, setCommentText] = useState('');
  const { full_name, username, picture } = useGetUserData();

  return (
    <form
      className='flex items-center  mb-3 text-base'
      onSubmit={async (e) => {
        e.preventDefault();
        await createComment(id, commentText);

        // update the ui
        dispatch(
          addNewComment({
            full_name,
            username,
            picture,
            text: commentText,
            created_at: new Date().toDateString(),
          })
        );
        setCommentText('');
      }}
    >
      <input
        type='text'
        className='py-2 border-b border-figmaGrayShade w-full  placeholder:text-figmaGrayShade bg-figmaGray outline-none'
        placeholder='Write a comment'
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button type='submit' className='-ml-4'>
        <FontAwesomeIcon
          icon={faPaperPlane}
          className='text-figmaGrayShade text-xl'
        />
      </button>
    </form>
  );
};

export default WriteComment;
