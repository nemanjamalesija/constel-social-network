import { useEffect, useState } from 'react';
import getAllComments from '../../api/getAllComments';
import { usePost } from '../posts/PostContext';
import { useGetUserData } from '../../hooks/useGetUserData';
import Spinner from '../../ui/Spinner';
import { useGetCommentsData } from '../../hooks/useGetCommentsData';
import { removeComment, setComments } from './commentsSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import deleteComment from '../../api/deleteComment';
import SingleComment from './SingleComment';
import { memo } from 'react';

const AllComments = memo(() => {
  const { post_id } = usePost();
  const dispatch = useAppDispatch();
  const { comments } = useGetCommentsData();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const commentsAPI = await getAllComments(post_id);
      if (!commentsAPI) return;

      const { comments } = commentsAPI;

      console.log(comments);
      dispatch(setComments(comments));
      setLoading(false);
    })();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <h3 className='text-lg font-bold text-figmaBlack mb-3'>
        {comments.length === 0
          ? 'No comments'
          : comments.length === 1
          ? '1 comment'
          : `${comments.length} comments`}
      </h3>
      <div className='w-full flex flex-col gap-4'>
        {comments.map((c) => (
          <SingleComment key={c.comment_id} {...c} post_id={post_id} />
        ))}
      </div>
    </div>
  );
});

export default AllComments;
