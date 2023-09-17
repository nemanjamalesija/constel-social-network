import { useEffect, useState } from 'react';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import createComment from '../../api/createComment';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addNewComment, setComments } from './commentsSlice';
// import { useGetUserData } from '../../hooks/useGetUserData';
import getAllComments from '../../api/getAllComments';
import { usePost } from '../posts/PostContext';
import Spinner from '../../ui/Spinner';
import { memo } from 'react';

const WriteComment = memo(({ post_id }: { post_id: string }) => {
  const dispatch = useAppDispatch();
  // const { full_name, username, picture } = useGetUserData();
  const [commentText, setCommentText] = useState('');
  const [loading, setLoading] = useState(false);
  const [triggerRefetch, setTriggerRefetch] = useState(false);

  // refetch nescessary in order to update ui
  // (missing comment_id from the backend response)
  useEffect(() => {
    const refetchComments = async () => {
      setLoading(true);

      const commentsAPI = await getAllComments(post_id);
      if (!commentsAPI) return;

      const { comments } = commentsAPI;
      dispatch(setComments(comments));
      setLoading(false);
    };

    refetchComments();
  }, [triggerRefetch]);

  if (loading) return <Spinner />;

  return (
    <form
      className='flex items-center  mb-3 text-base'
      onSubmit={async (e) => {
        e.preventDefault();

        await createComment(post_id, commentText);
        setTriggerRefetch(!triggerRefetch);

        // this updates the UI without refetching,
        // but will cause a bug if trying to submit DELETE request before refreshing the page

        // dispatch(
        //   addNewComment({
        //     // need the id from the BE to store the comment correctly
        //     full_name,
        //     username,
        //     picture,
        //     text: commentText,
        //     created_at: new Date().toDateString(),
        //   })
        // );
        setCommentText('');
      }}
    >
      <input
        type='text'
        className='input-comment py-2 border-b border-figmaGrayShade w-full placeholder:text-figmaGrayShade bg-figmaGray outline-none focus:border-figmaBlue'
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
