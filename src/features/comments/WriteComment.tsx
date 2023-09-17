import { useState } from 'react';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import createComment from '../../api/createComment';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addNewComment } from './commentsSlice';
import { memo } from 'react';

const WriteComment = memo(({ post_id }: { post_id: string }) => {
  const dispatch = useAppDispatch();
  const [commentText, setCommentText] = useState('');

  const submitHandler = async () => {
    if (!commentText.trim()) return alert('Comment text cannot be empty!');
    const comment = await createComment(post_id, commentText);

    dispatch(addNewComment(comment));
    setCommentText('');
  };

  return (
    <form
      className='flex items-center  mb-3 text-base'
      onSubmit={async (e) => {
        e.preventDefault();
        submitHandler();
      }}
    >
      <input
        type='text'
        className='input-comment py-2 border-b border-figmaGrayShade w-full placeholder:text-figmaGrayShade bg-figmaGray outline-none focus:border-figmaBlue transition-all duration-200'
        placeholder='Write a comment'
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button type='submit' className='-ml-4'>
        <FontAwesomeIcon
          icon={faPaperPlane}
          className='text-figmaGrayShade transition-all duration-200 text-xl'
        />
      </button>
    </form>
  );
});

export default WriteComment;
