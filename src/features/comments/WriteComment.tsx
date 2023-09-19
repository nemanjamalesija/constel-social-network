import { useState } from 'react';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import createComment from '../../api/createComment';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addNewComment } from './commentsSlice';
import { memo } from 'react';
import toast from 'react-hot-toast';

const WriteComment = memo(({ post_id }: { post_id: string }) => {
  const dispatch = useAppDispatch();
  const [commentText, setCommentText] = useState<string>('');

  const submitHandler = async () => {
    if (!commentText.trim())
      return toast.error('Text comment cannot be empty!');

    const comment = await createComment(post_id, commentText);

    comment && dispatch(addNewComment(comment));
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
        className='input-comment py-2 border-b border-figmaGrayShade w-full placeholder:text-figmaGrayShade md:bg-figmaGray smb:bg-white outline-none focus:border-figmaBlue transition-all duration-200'
        placeholder='Write a comment'
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button type='submit' className='-ml-4' disabled={!commentText.trim()}>
        <FontAwesomeIcon
          icon={faPaperPlane}
          className='text-figmaGrayShade transition-all duration-200 text-xl'
        />
      </button>
    </form>
  );
});

export default WriteComment;
